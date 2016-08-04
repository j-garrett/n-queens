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
        fillBoard(row++, columnChoices, currentGameValues);
      }
    } else {
      solutions.push(currentGameValues);
      return;
    }
  };

  fillBoard(0, possibleColumns);

  return solutions.length;









  // // var buildSolutions = function(startX, startY) {
  // //   var board = new Board({'n': n});
  // //   board.togglePiece(startX, startY); 
  // //   for (var i = startX; i < n; i++) {
  // //     for (var x = startY; x < n; x++) {
  // //       board.togglePiece(i, x);
  // //       if (board.hasAnyRooksConflicts() === true) {
  // //         board.togglePiece(i, x);
  // //       }
  // //     }
  // //   }
  // //   console.log('Board for n value of', n);
  // //   console.table(board.rows());
  // //   solutions.push(board.rows());
  // // };

  // // for (var j = 0; j < n; j++) {
  // //   for (var k = 0; k < n; k++) {
  // //     buildSolutions(j, k);
  // //   }
  // // }
  // // // console.table(solutions);
  // // // console.table(solutions);
  // // return solutions.length;

  // // Build a working board
  // var getSolutions = function(rowPosition, colPosition) {
  //   var board = insertPiece(rowPosition, colPosition); 

  //   for (var x = 0; x < n; x++) {
  //     for (var y = 0; y < n; y++) {
  //       // console.log([x, y]); 
  //       if (board.get(x)[y] === 1) {
  //         board.get(x)[y] = 1; 
  //       } else {
  //         board.togglePiece(x, y); 
  //         if (board.hasAnyRooksConflicts() === true) {
  //           board.togglePiece(x, y); 
  //         }
  //       }
  //     }
  //   }

  //   console.table(board.rows()); 
  //   return board.rows(); 
  // }; 

  // var insertPiece = function(rowPosition, colPosition) {
  //   // Create a new board of n length
  //   var board = new Board( {'n': n});
    
  //   board.togglePiece(rowPosition, colPosition); 
     

  //   // console.table(board.rows()); 
  //   return board; 

  // };

 

  // for (var rowPosition = 0; rowPosition < n; rowPosition++) {
  //   for (var colPosition = 0; colPosition < n; colPosition++) {
  //     solutions.push(getSolutions(rowPosition, colPosition));  
  //   }
  // }
  
  // var half = solutions.length / 2; 
  // var answer = solutions.splice(0, half + 1); 
  // return parseInt(answer); 




  // // var solution = new Board( {'n': n}); //fixme
  // // var allowedRows = []; 
  // // var allowedCols = []; 


  // // // Need to reset allowed rows/cols
  // // for (var i = 0; i < n; i++) {
  // //   allowedRows.push(i); 
  // //   allowedCols.push(i); 
  // // }

  // // var fillBoard = function (allowedRows, allowedCols) {
  // //   for (var i = 0; i < n; i++) {
  // //     for (var j = 0; j < n; j++) {
  // //       solution.togglePiece(allowedRows.splice(i + j, 1), allowedCols.splice(i, 1));
  // //     }
  // //   }
  // // };

  // // fillBoard(allowedRows, allowedCols);

  // // solution = solution.rows();

  // // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // // return solutionCount;
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
