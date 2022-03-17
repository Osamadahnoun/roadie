const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    posts: [Post]
    friends: [User]
  }

  type Post {
    _id: ID
    postText: String
    location: String
    cost: Int
    heritages: String
    placesToVisit: String
    accessibility: String
    other: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, location: String!, cost: Int, heritages: String, placesToVisit: String, accessibility: String, other: String): Post
    addComment(postId: ID!, commentBody: String!): Post
    addFriend(friendId: ID!): User
    deleteFriend(friendId: ID!): User
    deletePost(postId: ID!): User
    deleteComment(postId: ID! commentId: ID!): Post
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;