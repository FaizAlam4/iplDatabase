const connection = require("./server/connection.js");
const problem1 = require("./server/queries/matchesPerYear.js");
const problem2 = require("./server/queries/matchesWonPerTeam.js");

// problem1(connection, 'matches');
problem2(connection, 'matches');

