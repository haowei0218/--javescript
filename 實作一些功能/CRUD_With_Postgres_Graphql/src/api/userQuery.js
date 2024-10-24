import { gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
    }
  }
`;

const GET_USER = gql`
  query User($id:ID!){
    user(id:$id){
      id
      username
      email
    }
  }


`

const CREATE_USER = gql`
  mutation CreateUser($id:String!,$username:String!,$email:String!){
    createUser(id:$id,username:$username,email:$email){
      id
      username
      email
    }
  }

`

const DELETE_USER = gql`
  mutation DeleteUser($id:String!){
    deleteUser(id:$id){
      id
      username
      email
    }
  }


`
export {
  GET_ALL_USERS,
  GET_USER,
  CREATE_USER,
  DELETE_USER
};
