const { gql } = require('apollo-server-express');
const user = require('./type')

const userQueryDefs = gql`

${user}

type Query{
                  user(id:ID!):User
                  users: [User]  
         }
`

module.exports = userQueryDefs

