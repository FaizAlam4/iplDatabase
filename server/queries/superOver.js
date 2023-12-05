const problem8 = (connection, table1) => {
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
        `select bowler, (sum(total_runs-legbye_runs-bye_runs)*6)/count(case when wide_runs=0 and noball_runs=0 then 1 else null end) as economy from ${table1} where is_super_over<>0 group by bowler order by economy limit 1;`
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

module.exports = problem8;
