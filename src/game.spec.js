import { expect } from 'chai';
import Game from './game'
import sinon from 'sinon'
import Board from './board'

describe('Game', () => {
  it('should initialize board on tick', () => {
    var boardInitializeMock = sinon.stub(Board.prototype, 'initialize')
    var boardPrintMock = sinon.stub(Board.prototype, 'print')

    var game = new Game()
    game.tick()

    boardInitializeMock.restore()
    boardPrintMock.restore()
    expect(game.counter).to.be.eq(1)
    sinon.assert.calledTwice(boardInitializeMock);
    sinon.assert.calledOnce(boardPrintMock);
  })
})