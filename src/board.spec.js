import { expect } from 'chai';
import Board from './board'

const matrix = [[true, true , true], [true, true, true], [true, true, true]]

describe('Board', () => {
  it('should be created', () => {
    var board = new Board(matrix)
    board.initialize()
    board.print()
    expect(board).to.be.a('object')
  })

})