const learnTableResolvers = {
         Query: {
                  getLearnTables: async (_, __, { pool }) => {
                           const res = await pool.query('SELECT * FROM learn_table');
                           return res.rows;
                  },
                  searchByName: async (_, { name }, { pool }) => {
                           const query = 'SELECT * FROM learn_table WHERE name ILIKE $1';
                           const values = [`%${name}%`];
                           const res = await pool.query(query, values);
                           return res.rows;
                  },
         },
         Mutation: {
                  addLearnTable: async (_, { name, age }, { pool }) => {
                           const res = await pool.query(
                                    'INSERT INTO learn_table (name, age) VALUES ($1, $2) RETURNING *',
                                    [name, age]
                           );
                           return res.rows[0];
                  },
                  deleteLearnTable: async (_, { id }, { pool }) => {
                           const res = await pool.query('DELETE FROM learn_table WHERE id = $1', [id]);
                           return res.rowCount > 0; // Return true if a row was deleted
                  },
         },
};

module.exports = learnTableResolvers;
