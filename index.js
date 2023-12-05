const connection = require("./server/connection.js");
const problem1 = require("./server/queries/matchesPerYear.js");
const problem2 = require("./server/queries/matchesWonPerTeam.js");
const problem3 = require("./server/queries/mostPlayerOfMatch.js");
const problem4 = require("./server/queries/strikeRate.js");
const problem5 = require("./server/queries/extraRunsConcede.js");
const problem6 = require("./server/queries/winTossWinMatch.js");
const problem7 = require("./server/queries/highestDismissal.js");
const problem8 = require("./server/queries/superOver.js");
const problem9 = require("./server/queries/economicalBowler.js");

let func = async () => {
  try {
    await problem1(connection, "matches");
    await problem2(connection, "matches");
    await problem3(connection, "matches");
    await problem4(connection, "matches", "deliveries", "DA Warner");
    await problem5(connection, "matches", "deliveries");
    await problem6(connection, "matches");
    await problem7(connection, "deliveries");
    await problem8(connection, "deliveries");
    await problem9(connection, "matches", "deliveries");
  } catch (err) {
    console.log(err);
  }
};
func()