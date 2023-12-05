const connection = require("./server/connection.js");
const problem1 = require("./server/queries/matchesPerYear.js");
const problem2 = require("./server/queries/matchesWonPerTeam.js");
const problem3 = require("./server/queries/mostPlayerOfMatch.js");
const problem4 = require("./server/queries/strikeRate.js");
const problem5 = require("./server/queries/extraRunsConcede.js");
const problem6 = require("./server/queries/winTossWinMatch.js");
const problem7 = require("./server/queries/highestDismissal.js");
const problem8 = require("./server/queries/superOver.js");

// problem1(connection, 'matches');
// problem2(connection, 'matches');
// problem3(connection, "matches");
// problem4(connection, "matches", "deliveries", "DA Warner");
// problem5(connection, "matches", "deliveries");
// problem6(connection, "matches");
// problem7(connection, "deliveries");
problem8(connection, "deliveries");
