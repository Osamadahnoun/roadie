import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      posts {
        _id
        postText
        location
        cost
        heritages
        placesToVisit
        accessibility
        other
        createdAt
        commentCount
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      posts {
        _id
        postText
        location
        cost
        heritages
        placesToVisit
        accessibility
        other
        createdAt
        username
        commentCount
        comments {
          _id
          commentBody
          createdAt
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query users {
    users {
      _id
      username
      email
      posts {
        _id
        postText
        location
        cost
        placesToVisit
        heritages
        accessibility
        other
        createdAt
        username
        commentCount
        comments {
          _id
          commentBody
          createdAt
          username
        }
      }
      friendCount
      friends {
        _id
        email
        username
      }
    }
  }
`;

export const GET_SINGLE_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        location
        cost
        placesToVisit
        heritages
        accessibility
        other
        createdAt
        username
        commentCount
        comments {
          _id
          commentBody
          createdAt
          username
        }
      }
      friendCount
      friends {
        _id
        username
        email
      }
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      location
      cost
      heritages
      placesToVisit
      accessibility
      other
      createdAt
      username
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

export const GET_SINGLE_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      location
      cost
      heritages
      placesToVisit
      accessibility
      other
      createdAt
      username
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

export const QUERY_CHECKOUT = gql`
  query getCheckout {
    checkout {
      session
    }
  }
`;
