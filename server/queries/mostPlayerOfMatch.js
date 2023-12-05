const problem3 = (connection, table1) => {
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
        `with POMCount as (select season,player_of_match,count(*) as match_count,rank() over (partition by  season  order by count(*) desc) as myRank from ${table1} group by season , player_of_match ) select season , player_of_match  , match_count from POMCount where myRank=1;`
      );
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((err) => {
      console.log(err);
    })
  
};

module.exports = problem3;
