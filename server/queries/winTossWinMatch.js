const problem6 = (connection, table1) => {
  return connection
    .getConnection()
    .then(() => {
      console.log("Connection established successfully!");
      return connection.query(
        `SELECT * FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name ='${table1}'`
      );
    })
    .then((data) => {
      // console.log(data)
      if (data.length == 0) {
        throw new Error("Table doesn't exists!");
      }
    })
    .then(() => {
      return connection.query(
        `select toss_winner ,count(*) as matchWins from ${table1} where toss_winner=winner group by toss_winner order by matchWins;`
      );
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((err) => {
      console.log(err);
    })

};

module.exports = problem6;
