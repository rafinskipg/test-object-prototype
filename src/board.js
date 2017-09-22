import Cell from './cell'

export const maxRows = 10
export const maxColumns = 10
export const separator = '.......'

export function random() {
  return Math.random() > 0.5
}

export default function Board() {
  this.grid = []
}

Board.prototype.initialize = function() {
  this.grid = []

  for(let i = 0; i < maxRows; i++) {
    this.grid.push([])

    for(let l = 0; l < maxColumns; l++) {
      this.grid[i].push(new Cell(random()))
    }
  }
}

function columnsReducer(acc, cell) {
  return `${acc} ${cell.print()} | `
}

Board.prototype.print = function() {
  return this.grid.reduce((acc, row) => {
    const divider = Array(row.length).join(separator)
    const columns = row.reduce(columnsReducer, '|') 
    const rowText = `${acc}
      ${columns}
      ${divider}
    `
    return rowText
  }, '')
} 