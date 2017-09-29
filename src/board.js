import Cell from './cell'

export default function Board(cellsMatrix, printer) {
	this.cellsMatrix = cellsMatrix
	this.printer = printer ? printer : (value) => console.log(value)
}

function random() {
	return Math.random() >= 0.5
}

Board.prototype.initialize = function () {
	this.cellsMatrix = this.cellsMatrix.map((array) => array.map((item) => random())
		.map((item) => new Cell(item)))
}

Board.prototype.print = function () {
	this.cellsMatrix.map((array) => { 
		array.map((item) => item.print())
		this.printer("\n")
	})
}

Board.prototype.asd = function () {
	
}
