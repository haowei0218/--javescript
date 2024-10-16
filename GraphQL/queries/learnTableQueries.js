const { gql } = require('apollo-server')

const typeDefs = gql`
         extend type Query {
                  getLearnTables: [LearnTable]
                  searchByName(name:String!): [LearnTable]
         }
`

module.exports = typeDefs