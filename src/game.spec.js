import { expect } from 'chai';
import Game from './game'

describe('Game', () => {
  it('should be created', () => {
    var game = new Game()
    game.rerender()
    expect(game).to.be.a('object')
  })

})