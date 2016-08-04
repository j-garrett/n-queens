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

  fillBoard(allowedRows, allowedCols);

  solution = solution.rows();

  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  
  var solutions = [];
  var start = 0;

  var buildSolutions = function(startPoint) {
    var board = new Board({'n': n});
    for (var i = startPoint; i < n; i++) {
      for (var i2 = 0; i2 < n; i2++) {
        board.togglePiece(i, i2);
        if (board.hasAnyRooksConflicts() === true) {
          board.togglePiece(i, i2);
        }
      }
    }
    start++;
    
    solutions.push(board.rows());
  };

  for (var j = 0; j < n; j++) {
    buildSolutions(j);
  }
  // console.table(solutions);
  console.table(solutions);
  return solutions.length;
  // var solution = new Board( {'n': n}); //fixme
  // var allowedRows = []; 
  // var allowedCols = []; 


  // // Need to reset allowed rows/cols
  // for (var i = 0; i < n; i++) {
  //   allowedRows.push(i); 
  //   allowedCols.push(i); 
  // }

  // var fillBoard = function (allowedRows, allowedCols) {
  //   for (var i = 0; i < n; i++) {
  //     for (var j = 0; j < n; j++) {
  //       solution.togglePiece(allowedRows.splice(i + j, 1), allowedCols.splice(i, 1));
  //     }
  //   }
  // };

  // fillBoard(allowedRows, allowedCols);

  // solution = solution.rows();

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
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
