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
  var possibleColumns = _.range(n);

  var fillBoard = function(row, possibleColumns, currentGameValues) {
    currentGameValues = currentGameValues || [];
    if (possibleColumns.length > 0) {
      //loop through elements in possibleColumns
      for (var i = 0; i < possibleColumns.length; i++) {
        var columnChoices = possibleColumns.slice();
        // debugger;
        //create current row with possible values and current row passed to function call
        var curRow = [row, columnChoices[i]];
        //splice out current i element from column choices
        columnChoices.splice(i, 1);
        currentGameValues.push(curRow);
        //pass remaining values to next recursion
        fillBoard(row + 1, columnChoices, currentGameValues);
      }
    } else {
      solutions.push(currentGameValues);
      return;
    }
  };
  fillBoard(0, possibleColumns);
  return solutions.length;
};
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n': n}); //fixme
  var allowedCols = _.range(n);
  var minDiags = []; 
  var majDiags = []; 
  
  var fillBoard = function (row, allowedCols, minDiags, majDiags, currentBoardValue) {
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
  var solutions = [];
  var minDiags = []; 
  var majDiags = []; 
  var possibleColumns = _.range(n);
  if (n === 0) {
    return 1;
  }
  var fillBoard = function(row, possibleColumns, minDiags, majDiags, currentGameValues) {
    currentGameValues = currentGameValues || [];

    debugger;

    if (possibleColumns.length > 0 && row < n) {
      //loop through elements in possibleColumns
      for (var i = 0; i < possibleColumns.length; i++) {
        var columnChoices = possibleColumns.slice(); // Copy of the array
        var usedMinDiags = minDiags.slice();
        var usedMajDiags = majDiags.slice();
        // If current spot has major or minor diag conflicts
        var min = columnChoices[i] - row;
        var maj = columnChoices[i] + row; 

        if (usedMinDiags.includes(min) || usedMajDiags.includes(maj)) {
          if (possibleColumns.length > 0) {
            fillBoard(row + 1, columnChoices, usedMinDiags, usedMajDiags, currentGameValues);
          }
          continue; 
        }

        //create current row with possible values and current row passed to function call
        var curRow = [row, columnChoices[i]];
        //splice out current i element from column choices
        columnChoices.splice(i, 1);
        currentGameValues.push(curRow);
        usedMinDiags.push(min); 
        usedMajDiags.push(maj); 
        //pass remaining values to next recursion
        fillBoard(row + 1, columnChoices, usedMinDiags, usedMajDiags, currentGameValues);
      }
    } else {
      if (currentGameValues.length === n) {
        solutions.push(currentGameValues);
      }
      return;
    }
  };

  fillBoard(0, possibleColumns, minDiags, majDiags);
  console.table(solutions);
  console.log('Number of solutions for ' + n + ' queens:', solutions);
  return solutions.length;

};












