const pool = require('./database_local')
const { mergeTypeDefs } = require('graphql')
const learnTableTypeDefs = require('./types/learnTable')
const learnTableQueries = require('./queries/learnTableQueries')
const learnTableMutations = require('./mutations/learnTableMutations')

const typeDefs = mergeTypeDefs([
         learnTableTypeDefs,
         learnTableQueries,
         learnTableMutations
])

module.exports = typeDefs
