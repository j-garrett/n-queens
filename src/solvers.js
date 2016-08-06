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
  var solution = new Board({ 'n': n }); //fixme
  var allowedRows = [];
  var allowedCols = [];

  for (var i = 0; i < n; i++) {
    allowedRows.push(i);
    allowedCols.push(i);
  }

  var fillBoard = function(allowedRows, allowedCols) {
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
  var fillBoard = function(row, possibleColumns) {
    if (row < n) {
      for (var i = 0; i < possibleColumns.length; i++) {
        var columnChoices = possibleColumns.slice();
        columnChoices.splice(i, 1);
        fillBoard(row + 1, columnChoices);
      }
    } else {
      solutions++;
      return;
    }
  };
  var solutions = 0;
  fillBoard(0, _.range(n));
  return solutions;
};
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({ 'n': n }); //fixme
  var allowedCols = _.range(n);
  var minDiags = [];
  var majDiags = [];

  var fillBoard = function(row, allowedCols, minDiags, majDiags, currentBoardValue) {
    for (var i = 0; i < n; i++) {
      solution.togglePiece(allowedRows.pop(), allowedCols.pop());
    }
  };

  fillBoard(allowedRows, allowedCols);

  solution = solution.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};
// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var start = new Date();
  var solutions = 0;
  var fillBoard = function(row, possibleColumns, possibleMinor, possibleMajor) {
    if (row < n) {
      for (var i = 0; i < possibleColumns.length; i++) {
        var columnChoices = possibleColumns.slice();
        var minorChoices = possibleMinor.slice();
        var majorChoices = possibleMajor.slice();
        var minDiag = possibleColumns[i] - row;
        var majDiag = possibleColumns[i] + row;
        if(minorChoices.indexOf(minDiag) === -1 && majorChoices.indexOf(majDiag) === -1) {
          columnChoices.splice(i, 1);
          minorChoices.push(minDiag);
          majorChoices.push(majDiag);          
        }
        fillBoard(row + 1, columnChoices, minorChoices, majorChoices);
      }
    } else if(possibleColumns.length === 0) {
      solutions++;
      return;
    } else {
      return;
    }
  };
  fillBoard(0, _.range(n), [], []);
  var end = new Date();
  console.log('Time to solve: ', end - start);
  console.log('Number of solutions for ' + n + ' queens:', solutions);
  return solutions;
};
