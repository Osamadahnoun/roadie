const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');
// the stipe key here is a test key - we may need to generate our own and keep it in a .env file
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('friends')
                    .populate('posts');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('posts')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('posts');
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1})
        },
        post: async (parent, { _id }) => {
            return Post.findOne({ _id })
        },
        checkout: async(parent, args, context) => {
          const url = new URL(context.headers.referer).origin;
          
          const line_items = [];

          const product = await stripe.products.create({
            name: 'Donation',
            description: "Donate to Roadie's fund to save the Earth's natural habitats!"
          });

          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 10000,
            currency: 'usd'
          });

          line_items.push({
            price: price.id,
            quantity: 1
          });
          
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`
          });
          
          return { session: session.id };
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Wrong credentials! Please try again.');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Wrong credentials! Please try again.');
            }

            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: { $each:[post._id], $position: 0} } },
                    { new: true }
                );

                return post;
            }

            throw new AuthenticationError('You need to be logged in to make a post!');
        },
        addComment: async (parent, { postId, commentBody }, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { comments: {$each: [{ commentBody, username: context.user.username }], $position: 0 } } },
                    { new: true, runValidators: true }
                );

                return updatedPost;
            }

            throw new AuthenticationError('You need to be logged in to add a comment!');
        },
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends')

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in to add a friend!');
        },
        deleteFriend: async (parent, { friendId }, context) => {
            if(context.user) {
                const friendlessUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { friends: friendId } },
                    { new: true }
                ).populate('friends')

                return friendlessUser;
            }

            throw new AuthenticationError('You need to be logged in to delete a friend!');
        },
        deletePost: async (parent, { postId }, context) => {
            if(context.user) {
                const postless = await Post.findOneAndDelete(
                    { _id: postId, username: context.user.username }
                )

                return postless;
            }

            throw new AuthenticationError('You need to be logged in to delete your post!');
        },
        deleteComment: async (parent, { postId, commentId }, context) => {
            if(context.user) {
                const commentlessPost = await Post.findOneAndUpdate(
                    { _id: postId, username: context.user.username },
                    { $pull: { comments: {_id: commentId }} },
                    { new: true }
                ).populate('comments')

                return commentlessPost;
            }

            throw new AuthenticationError('You need to be logged in to delete your comment!');
        },
        editPost: async (parent, args, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndReplace(
                    { _id: args.postId, username: context.user.username },
                    { postText: args.postText, location: args.location, locationImage: args.locationImage, cost: args.cost, heritages: args.heritages, placesToVisit: args.placesToVisit, accessibility: args.accessibility, other: args.other, username: context.user.username},
                    { new: true }
                )

                return updatedPost
            }

            throw new AuthenticationError('You need to be logged in to edit your post!');
        }
    }
};

module.exports = resolvers;
