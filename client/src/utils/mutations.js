import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!, $location: String!, $locationImage: String, $cost: Int, $heritages: String, $placesToVisit: String, $accessibility: String, $other: String) {
    addPost(postText: $postText, location: $location, locationImage: $locationImage, cost: $cost, heritages: $heritages, placesToVisit: $placesToVisit, accessibility: $accessibility, other: $other) {
      _id
      postText
      createdAt
      username
      commentCount
      location
      locationImage
      cost
      heritages
      placesToVisit
      accessibility
      other
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentBody: String!, $postId: ID!) {
    addComment(commentBody: $commentBody, postId: $postId) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
      email
    }
  }
`;

export const DELETE_FRIEND = gql`
  mutation deleteFriend($friendId: ID!) {
    deleteFriend(friendId: $friendId) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;


export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId) {
      _id
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      _id
      postText
      comments {
        _id
        commentBody
      }
    }
  }
`;

export const EDIT_POST = gql`
  mutation editPost($postId: ID!, $postText: String!, $location: String!, $cost: Int, $heritages: String, $placesToVisit: String, $accessibility: String, $other: String) {
    editPost(postId: $postId, postText: $postText, location: $location, cost: $cost, heritages: $heritages, placesToVisit: $placesToVisit, accessibility: $accessibility, other: $other) {
      _id
      postText
      createdAt
      username
      commentCount
      location
      locationImage
      cost
      heritages
      placesToVisit
      accessibility
      other
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;
