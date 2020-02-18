import Board from './board'


var board = new Board()

function printer(str) {
  console.log(str)
}

function tick() {
  clearWindow()
  board.initialize()
  printer(board.print())
  setTimeout(tick, 1000)
}

function clearWindow() {
  var lines = process.stdout.getWindowSize()[1];
  for(var i = 0; i < lines; i++) {
    console.log('\r\n');
	}
}

tick()