export default function Cell(active) {
	this.active = active
}

Cell.prototype.toggle = function toggle() {
	this.active = !this.active
}

Cell.prototype.print = function print() {
	if(this.active) {
		process.stdout.write(". ")
	} else {
		process.stdout.write("x ")
	}
}
