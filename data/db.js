import mysql from 'mysql2';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'blog',
  port: 3306
});

connection.connect((err) => {
  if (err) throw err;

  console.log('mysql connesso');
});

export default connection;

