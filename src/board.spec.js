import { expect } from 'chai';
import Board, { maxColumns, maxRows, random } from './board'

describe('Board', () => {
  it('should be created', () => {
    var board = new Board()
    expect(board).to.be.a('object')
  })

  it('should have a method initialize', () => {
    var board = new Board()
    expect(board.initialize).to.be.a('function')
  })

  it('when initializing the board it should have a NxN array', () => {
    var board = new Board()
    board.initialize()
    expect(board.grid).to.be.an('array')
    expect(board.grid.length).to.equals(maxColumns)
    expect(board.grid[0].length).to.equals(maxRows)

    board.grid.forEach(row =>{
      expect(row.length).to.equals(maxColumns)
    })
  })

  it('should have a random method that returns either true or false', () => {
    var randomValue = random()
    expect(randomValue).to.be.a('boolean')
  })

  it('should output some strings when calling board print', () => {
    var board = new Board()
    board.initialize()
    console.log(board.print())
    expect(board.print().length).not.to.equals(0)
  })

})