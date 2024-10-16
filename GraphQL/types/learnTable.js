const { gql } = require('apollo-server')

const typeDefs = gql`
         type LearnTable {
                  id:ID!
                  name:String!
                  age:Int
                  created_at:String
         }
`

module.exports = typeDefs