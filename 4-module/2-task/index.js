function makeDiagonalRed(table) {
  Array
    .from(table.rows)
    .forEach(
      (row, i) => row.cells[i].style.backgroundColor = 'red'
    );
}
