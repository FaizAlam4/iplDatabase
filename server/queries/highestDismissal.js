const problem7 = (connection, table1) => {
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
        `select batsman,bowler,count(case when player_dismissed <> '' and  dismissal_kind<>'runout' then 1 else null end) as dismissedFor from ${table1} group by batsman,bowler order by dismissedFor desc limit 1;`
      );
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((err) => {
      console.log(err);
    })
  
};

module.exports = problem7;
