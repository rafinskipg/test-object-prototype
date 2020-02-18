import { expect } from 'chai';
import Cell, {activeState, unactiveState} from './cell'

describe('Cell', () => {
  it('should be created', () => {
    var cell = new Cell()
    expect(cell).to.be.a('object')
  })

  it('should have an active state passed in the constructor', () => {
    var activeCell = new Cell(true)
    expect(activeCell.active).to.equals(true)

    var unactiveCell = new Cell(false)
    expect(unactiveCell.active).to.equals(false)
  })

  it('should print the correct value when active', () => {
    var activeCell = new Cell(true)
    expect(activeCell.print()).to.equals(activeState)
  })

  it('should print the correct value when unactive', () => {
    var unactiveCell = new Cell(false)
    expect(unactiveCell.print()).to.equals(unactiveState)
  })

  it('should toggle its state', () => {
    var activeCell = new Cell(true)
    activeCell.toggle()
    expect(activeCell.active).to.equals(false)
  })
})
