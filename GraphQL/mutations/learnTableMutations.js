const { gql } = require('apollo-server')


const typeDefs = gql`
         extend type Mutation{
                  addLearnTable(id:Int,name:String!,age:Int,sex:String!):LearnTable
                  deleteLearnTable(id:ID!):Boolean
         }


`

module.exports = typeDefs