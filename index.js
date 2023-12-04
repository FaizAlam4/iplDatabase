const connection = require("./server/connection.js");
const problem1 = require("./server/queries/matchesPerYear.js");
const problem2 = require("./server/queries/matchesWonPerTeam.js");
const problem3 = require("./server/queries/mostPlayerOfMatch.js");
const problem4 = require("./server/queries/strikeRate.js");

// problem1(connection, 'matches');
// problem2(connection, 'matches');
// problem3(connection, "matches");
problem4(connection, 'matches','deliveries','DA Warner')
