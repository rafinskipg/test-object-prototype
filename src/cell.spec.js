import { expect } from 'chai';
import Cell from './cell'

describe('Cell', () => {
  it('should be created', () => {
    var cell = new Cell()
    expect(cell).to.be.a('object')
  })
})