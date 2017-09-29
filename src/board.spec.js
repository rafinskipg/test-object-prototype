import { expect } from 'chai';
import Board from './board'
import sinon from 'sinon'

const matrix = [[true, true , true], [true, true, true], [true, true, true]]
var printer = (value) => console.log(value) 

describe('Board', () => {
  it('should be initialiazed to a matrix of Cells', () => {
    var board = new Board(matrix, printer)
    board.initialize()
    board.print()
    expect(board.cellsMatrix[0][0].active).to.be.a('boolean')
  })

  it('should call printer with new line on print', () => {
    var printer = sinon.spy()

    var board = new Board(matrix, printer)
    board.initialize()
    board.print()

    sinon.assert.calledWith(printer, '\n');
  })
})