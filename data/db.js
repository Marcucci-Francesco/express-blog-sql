const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'blog'
});

connection.connect((err) => {
  if (err) throw err;

  console.log('mysql connesso');
});

module.exports = connection;

