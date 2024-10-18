## Apollo 環境設定

#### 1. Use comment : npm init -y

#### 2. Use comment : if want to use "Express and Graphql" npm install express express-graphql graphql

#### 3. Use comment : if want to use "Apollo Server and Graphql" npm install apollo-server graphql

#### 4. Use comment : Run server use node server.js

#### 5. Local web interface: http://localhost:4000/graphql

#### 6. Use comment : npm install apollo-server-express

## graphql 資料夾結構

#### schema:預定義了可查詢的數據類型和字段

#### resolvers(解析器):實現具體在資料庫CRUD邏輯 類似於node.js的app.get()api內的查詢資料邏輯

#### type: 定義一個類型 該類型真實存在資料庫內的資料 並返回一個物件 ex:type user {id:String!,name:String!}

#### type query:定義一個查詢 查詢所需要的參數 返回的結果

#### type mutation:修改資料夾的資料 定義一個突變(在資料庫內進行刪除,更新,插入等動作)的所需要的資料 以及會返回的結果
