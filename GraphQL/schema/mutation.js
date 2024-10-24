const { gql } = require('apollo-server-express')
const user = require('./type')

const MutationTypeDefs = gql`
         ${user}
         type Mutation {
                  createUser(id:String!,username:String!,email:String!):User
                  updateUser(id:String!,username:String,email:String):User
                  deleteUser(id:String!):User
         }
`
module.exports = MutationTypeDefs