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
  mutation addPost($postText: String!, $location: String!, $cost: Int, $heritages: String, $placesToVisit: String, $accessibility: String, $other: String) {
    addPost(postText: $postText, location: $location, cost: $cost, heritages: $heritages, placesToVisit: $placesToVisit, accessibility: $accessibility, other: $other) {
      _id
      postText
      createdAt
      username
      commentCount
      location
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