const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: 'You need to create a post!',
      minlength: 1,
      maxlength: 100
    },
    location: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    },
    // image of location?
    cost: {
      // find a way to have user select number of dollar signs instead of inputting a number?
      // or have their post show a number of dollar signs based on the number they input
      type: Number,
      maxlength: 10
    },
    heritages: {
      type: String,
      maxlength: 50
    },
    placesToVisit: {
      type: String,
      maxlength: 50
    },
    accessibility: {
      type: String,
      maxlength: 100
    },
    other: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
