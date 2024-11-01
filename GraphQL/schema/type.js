const { gql } = require('apollo-server-express')

//User內定義的變數 ex:id,username 一定要是真實存在於資料庫內的欄位
const user = gql`
         type User {
                  id:ID!
                  username:String
                  email:String!
                  wallet:Int
         }
`

module.exports = user