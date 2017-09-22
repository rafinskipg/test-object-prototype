# Babel ES6 + Mocha / Chai setup

Installation

```
npm install 
```

Test

```
npm test
```

## Exercise

### Create a Cell function constructor
  - Cell has a inner state "active" which is a boolean
  - Cell has toggle method that changes it's state
  - Cell has a "print" method that prints it's shape
      ....                   
      ....  for active cell 
      ....

      xxxx
      xxxx  for inactive cell
      xxxx 

### Write unit tests to ensure the cell behaves correctly

### Create a new "Board" function constructor
  - Board has a 2 dimension array of cells
  - It has a method "initialize" that resets the state of the board
  - In the initializate the state of the cells in the board is random.
  - It has a "print" method that prints a board and it's cells

### Unit test board functionality

### Create a game.js file that imports the Board and intializes it.
  You can test it by building it :
  `npm run build`
  and executing it on node by
  `node dist/game.js`

### Set a timeout to re-render the board each second, use console log to print the board.
  - Create a method "tick" in the board that increases a internal counter, re-initializes the board, and prints it

### PRO Implement the game of life rules:
    Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    Any live cell with two or three live neighbours lives on to the next generation.
    Any live cell with more than three live neighbours dies, as if by overpopulation.
    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
