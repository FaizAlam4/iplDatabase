const problem2 = (connection, table1) => {
  connection
    .getConnection()
    .then(() => {
      console.log("Connection established successfully!");
      return connection.query(
        `SELECT * FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name ='${table1}'`
      );
    })
    .then((data) => {
      if (data.length == 0) {
        throw new Error("Table doesn't exists!");
      }
    })
    .then(() => {
      return connection.query(
        `select season,winner ,count(*) as wins from ${table1} where result like 'normal' group by season,winner order by season;`
      );
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      connection.end();
    });
};

module.exports = problem2;
