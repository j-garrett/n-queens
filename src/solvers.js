/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n}); //fixme
  var allowedRows = [];
  var allowedCols = [];

  for (var i = 0; i < n; i++) {
    allowedRows.push(i);
    allowedCols.push(i);
  }
  
  var fillBoard = function (allowedRows, allowedCols) {
    for (var i = 0; i < n; i++) {
      solution.togglePiece(allowedRows.pop(), allowedCols.pop());
    }
  };
  
  // //should we just brute force every single check?
  // for (var i2 = 0; i2 < n; i2++) {
  //   var indices = [i2];
  //   //if no column or row conflicts then push value in here
  // }

  fillBoard(allowedRows, allowedCols);

  solution = solution.rows();

  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
