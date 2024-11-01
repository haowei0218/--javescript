const { ApolloError } = require('apollo-server-express')

const resolvers = {
         Query: {
                  user: async (parent, { id }, { db }) => {
                           try {
                                    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]); //返回指定用戶
                                    return result.rows[0]
                           } catch (error) {
                                    console.error('Database query error:', error)
                                    throw new ApolloError('Error fetching users', 'DATABASE_ERROR');
                           }
                  },
                  users: async (parent, args, { db }) => {
                           try {
                                    const result = await db.query('SELECT * FROM users') //返回所有用戶
                                    return result.rows
                           } catch (error) {
                                    console.error('Database query error:', error)
                                    throw new ApolloError('Error fetching users', 'DATABASE_ERROR');
                           }
                  }
         },
         Mutation: {
                  //新增錢包
                  createUser: async (parent, { id, username, email, wallet }, { db }) => {
                           try {
                                    const result = await db.query('INSERT INTO users (id,username,email) VALUES ($1,$2,$3) RETURNING *', [id, username, email, wallet])
                                    return result.rows[0] //返回新創建的用戶
                           } catch (error) {
                                    console.error('Database query error:', error)
                                    throw new ApolloError('Error fetching users', 'DATABASE_ERROR');
                           }
                  },
                  //更新功能不能動到userid , 這邊的id要輸入舊資料的id , username and email 才是要放入新值
                  updateUser: async (parent, { id, username, email, wallet }, { db }) => {
                           try {
                                    const result = await db.query('UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *',
                                             [username, email, id, wallet])
                                    return result.rows[0]
                           } catch (error) {
                                    console.error('Database query error:', error)
                                    throw new ApolloError('Error fetching users', 'DATABASE_ERROR');
                           }

                  },
                  deleteUser: async (parent, { id }, { db }) => {
                           try {
                                    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])
                                    return result.rows[0]
                           } catch (error) {
                                    console.error('Database query error:', error)
                                    throw new ApolloError('Error fetching users', 'DATABASE_ERROR');
                           }

                  }
         }
}

module.exports = resolvers