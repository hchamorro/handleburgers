const connection = require("./connection.js");

const orm = {
  all: function(tableInput, cb) {
    const query = `SELECT * FROM  ${tableInput}`;
    connection.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: (table, col, val, cb) => {
    const queryString = `INSERT INTO ${table} (${col}) VALUES ("${val}")`;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  update: (table, col, val, con, cb) => {
    const queryString = `UPDATE ${table} SET ${col} = ${val} WHERE id = ${con}`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;

      cb(result);
    });
  }
};

module.exports = orm;
