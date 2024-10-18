const { gql } = require('apollo-server-express')
const user = require('./type')

const MutationTypeDefs = gql`
         ${user}
         type Mutation {
                  createUser(id:ID!,username:String!,email:String!):User
                  updateUser(id:ID!,username:String,email:String):User
                  deleteUser(id:ID!):User
         }
`
module.exports = MutationTypeDefs