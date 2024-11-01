import { gql } from "@apollo/client";

//graphql api
const GET_ALL_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
      wallet
    }
  }
`;

const GET_USER = gql`
  query User($id:ID!){
    user(id:$id){
      id
      username
      email
      wallet
    }
  }


`

const CREATE_USER = gql`
  mutation CreateUser($id:String!,$username:String!,$email:String!,$wallet:Int){
    createUser(id:$id,username:$username,email:$email,wallet:$wallet){
      id
      username
      email
      wallet
    }
  }

`

const DELETE_USER = gql`
  mutation DeleteUser($id:String!){
    deleteUser(id:$id){
      id
      username
      email
      wallet
    }
  }
`
const UPDATE_USER = gql`
  mutation UpdateUser($id:String!,$username:String!,$email:String!,$wallet:Int){
    updateUser(id:$id,username:$username,email:$email,wallet:$wallet){
      id
      username
      email
      wallet
    }
  }

`
export {
  GET_ALL_USERS,
  GET_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER
};
