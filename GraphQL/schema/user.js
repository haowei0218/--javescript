const { gql } = require('apollo-server-express')
const QueryUser = require('./query')
const MuationUser = require('./mutation')
const UserType = require('./type')
const userTypeDefs = gql`
         ${UserType}
         ${QueryUser}
         ${MuationUser}      
`
module.exports = userTypeDefs