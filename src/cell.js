export const activeState = `!!`
export const unactiveState = `ÑÑ`

export default function Cell(active) {
  this.active = active
}

Cell.prototype.toggle = function() {
  this.active = !this.active
}

Cell.prototype.print = function () {
  return this.active ? activeState : unactiveState
}