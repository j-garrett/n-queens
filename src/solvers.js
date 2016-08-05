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
  var start = new Date();
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
  var end = new Date();
  //console.table (solutions);
  console.log( end - start);
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
  if (n === 0) {
    return 1;
  }
  var solutions = [];
  var minDiags = []; 
  var majDiags = []; 
  var possibleColumns = _.range(n);

  var fillBoard = function(row, possibleColumns, minDiags, majDiags, currentGameValues) {
    if (n === 4) {
      debugger;
    }
    var usedMinDiags = minDiags.slice();
    var usedMajDiags = majDiags.slice();
    if (possibleColumns.length > 0 && row < n) {
      for (var i = 0; i < possibleColumns.length; i++) {
        var columnChoices = possibleColumns.slice();
        var minDiag = columnChoices[i] - row;
        var majDiag = columnChoices[i] + row;
        //if current value does not conflict with used diagonal indexes
        if (usedMinDiags.includes(minDiag) !== true && usedMajDiags.includes(majDiag) !== true) {
          //push current value to possible solutions
          var posSolution = currentGameValues || [];
          posSolution.push([row, columnChoices[i]]);
          //update used Diagonals
          usedMinDiags.push(minDiag);
          usedMajDiags.push(majDiag);
          //remove index from future possible columns
          columnChoices.splice(i, 1);
          //call recursive function with updated values
        }
        //call function to recurse to next level!
        //values will be updated by previous if statement if a value was found 
        fillBoard(row + 1, columnChoices, usedMinDiags, usedMajDiags, posSolution);
      }
    } else {
      if (Array.isArray(currentGameValues) && currentGameValues.length === n) {
        solutions.push(currentGameValues);
      }
      return;
    }















    // if (n === 2) {
    //   debugger;
    // }

    // currentGameValues = currentGameValues || [];
    // if (currentGameValues.length === n) {
    //   solutions.push(currentGameValues);
    //   return;
    // }
    // if (row < n) {
    //   //loop through elements in possibleColumns
    //   for (var i = 0; i < possibleColumns.length; i++) {
    //     var curSolutionAttempt = currentGameValues || [];
    //     var columnChoices = possibleColumns.slice(); // Copy of the array
    //     var usedMinDiags = minDiags.slice();
    //     var usedMajDiags = majDiags.slice();
    //     var min = columnChoices[i] - row;
    //     var maj = columnChoices[i] + row; 

    //     if (usedMinDiags.includes(min) !== true && usedMajDiags.includes(maj) !== true) {
    //       currentGameValues.push([row, columnChoices[i]]);
    //       usedMinDiags.push(min); 
    //       usedMajDiags.push(maj); 
    //       columnChoices.splice(i, 1);
    //       fillBoard(row + 1, columnChoices, usedMinDiags, usedMajDiags, currentGameValues);
    //     } else if (i === columnChoices.length - 1) { //if we have checked whole row and not found working space
    //       //we have to pass in all possible columns as it was before we finished up this row
    //       fillBoard(row + 1, columnChoices, usedMinDiags, usedMajDiags, currentGameValues);
    //     }
    //   }
    // } else {
    //   return;
    // }
  };

  fillBoard(0, possibleColumns, minDiags, majDiags);
  console.table(solutions);
  console.log('Number of solutions for ' + n + ' queens:', solutions);
  return solutions.length;

};












