export default function Cell(active, printer) {
  this.active = active
  this.printer = printer ? printer : (value) => process.stdout.write(value)
}

Cell.prototype.toggle = function toggle() {
  this.active = !this.active
}

Cell.prototype.print = function print() {
	if(this.active) {
		this.printer(". ")
	} else {
		this.printer("x ")
	}
}
