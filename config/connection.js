const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "happy",
  database: "good_burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});

function pract(table, col, val, con) {
  const queryString = `UPDATE ${table} SET ${col} = ${val} WHERE id = ${con}`;
  connection.query(queryString, (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

module.exports = connection;
