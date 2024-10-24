const db = require('../database_local');

const resolvers = {
         Query: {
                  user: async (parent, { id }) => {
                           const result = await db.query('SELECT * FROM users WHERE id = $1', [id]); //返回指定用戶
                           return result.rows[0]
                  },
                  users: async () => {
                           const result = await db.query('SELECT * FROM users') //返回所有用戶
                           return result.rows
                  }
         },
         Mutation: {
                  createUser: async (parent, { id, username, email }) => {
                           const result = await db.query('INSERT INTO users (id,username,email) VALUES ($1,$2,$3) RETURNING *', [id, username, email])
                           return result.rows[0] //返回新創建的用戶
                  },
                  //更新功能不能動到userid , 這邊的id要輸入舊資料的id , username and email 才是要放入新值
                  updateUser: async (parent, { id, username, email }) => {
                           const result = await db.query('UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *',
                                    [username, email, id])
                           return result.rows[0]
                  },
                  deleteUser: async (parent, { id }) => {
                           const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])
                           return result.rows[0]
                  }
         }
}

module.exports = resolvers