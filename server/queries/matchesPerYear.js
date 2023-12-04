const problem1 = (connection, table1) => {
  connection
    .getConnection()
    .then(() => {
      console.log("Connection established successfully!");
      return connection.query(`SELECT * FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name ='${table1}'`);
    })
    .then((data) => {
      // console.log(data)
      if(data.length==0){
        throw new Error("Table doesn't exists!")
      }
    })
    .then(() => {
      return connection.query(
        `select season , count(*) as totalMatchesPlayed from ${table1} group by season order by season`
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

module.exports = problem1;
