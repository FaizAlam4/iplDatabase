const problem1 = (connection) => {
  connection
    .getConnection()
    .then((connect) => {
      console.log("Connection established successfully!");
      connect
        .query("show tables")
        .then((data) => {
          data = data[0];
          var flag = false;
          data.forEach((obj) => {
            if (obj.Tables_in_fzWorld == "matchs") {
              flag = true;
            }
          });
          if (flag) {
            console.log("Table found");
          } else {
            throw new Error("Table not found");
          }
        })
        .then(() => {
          return connect.query(
            "select season , count(*) as totalMatchesPlayed from matches group by season order by season"
          );
        })
        .then((data) => {
          console.log(data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log("Error in establishing connection with database:", err);
    });
};

module.exports = problem1;
