import Cell from './cell'

export default function Board(cellsMatrix) {
	this.cellsMatrix = cellsMatrix
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
		console.log("\n")	
	})
}

