import mysql from 'mysql2';


const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'rootroot',
  database: 'blog'
});

connection.connect((err) => {
  if (err) throw err;

  console.log('mysql connesso');
});

export default connection;

