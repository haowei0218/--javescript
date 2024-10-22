import { gql } from '@apollo/client'

const GET_USER = gql`
query GetUser($id: ID!) {
  user(id: $id) {
    id
    username
    email
  }
}
`

const GET_ALL_USERS = gql`
query GetUsers {
    users {
      id
      username
      email
    }
  }

`
export { GET_USER, GET_ALL_USERS }