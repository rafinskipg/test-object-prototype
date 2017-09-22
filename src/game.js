import Board from './board'

export default function Game() {
	this.board = new Board([[true, true , true], [true, true, true], [true, true, true]])
	this.board.initialize()
	this.counter = 0
}

Game.prototype.rerender = function () {
	
	var lines = process.stdout.getWindowSize()[1];
	for(var i = 0; i < lines; i++) {
	    console.log('\r\n');
	}
	this.tick()
	setTimeout(
		this.rerender.bind(this),
		1000);
}

Game.prototype.tick = function() {
	this.counter++
	this.board.initialize()
	this.board.print()
}
