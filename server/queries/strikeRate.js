const problem4 = (connection, table1, table2, playerName) => {
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
        `with myTable as (
          select season, B.batsman, B.strikeRate, rank() over(partition by season order by B.strikeRate desc) as rnk from ${table1} A join (
          select match_id,batsman ,((sum(batsman_runs)*100)/count(case when wide_runs=0 AND noball_runs=0 then 1 else null end)) as strikeRate from ${table2} where batsman like '${playerName}' group by match_id,batsman) as B on A.id=B.match_id order by season) select * from myTable where rnk=1;`
      );
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((err) => {
      console.log(err);
    })
  
};

module.exports = problem4;
