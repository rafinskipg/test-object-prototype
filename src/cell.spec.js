import { expect } from 'chai';
import Cell from './cell'
import sinon from 'sinon'

var printer = (value) => process.stdout.write(value)

describe('Cell', () => {
  it('should be created', () => {

  	console.log(sinon)
    var cell = new Cell(true, printer)
    expect(cell).to.be.a('object')
  })

  it('should toggle to false', () => {
    var cell = new Cell(true, printer)
    cell.toggle()
    expect(cell.active).to.be.false
  })

  it('should toggle to true', () => {
    var cell = new Cell(false, printer)
    cell.toggle()
    expect(cell.active).to.be.true
  })

  it('should call printer on print', () => {
  	var spy = sinon.spy()

   	var cell = new Cell(false, spy)
    cell.print()

    sinon.assert.calledOnce(spy)
  })
})