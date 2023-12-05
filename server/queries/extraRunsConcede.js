const problem5 = (connection, table1, table2) => {
  return connection
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
      console.log("Connection established successfully!");
      return connection.query(
        `SELECT * FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name ='${table2}'`
      );
    })
    .then((data) => {
      if (data.length == 0) {
        throw new Error("Table doesn't exists!");
      }
    })
    .then(() => {
      return connection.query(
        `select season, bowling_team, sum(extra_runs) as runConceded from ${table1} A join ${table2} B on A.id=B.match_id where season=2016 group by bowling_team;`
      );
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((err) => {
      console.log(err);
    })  
};

module.exports = problem5;
