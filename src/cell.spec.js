import { expect } from 'chai';
import Cell from './cell'

describe('Cell', () => {
  it('should be created', () => {
    var cell = new Cell(true)
    expect(cell).to.be.a('object')
  })

  it('should toggle to false', () => {
    var cell = new Cell(true)
    cell.toggle()
    expect(cell.active).to.be.false
  })

  it('should toggle to true', () => {
    var cell = new Cell(false)
    cell.toggle()
    expect(cell.active).to.be.true
  })


})