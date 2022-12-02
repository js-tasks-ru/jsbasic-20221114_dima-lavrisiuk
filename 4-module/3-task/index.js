function highlight(table) {
  for (const row of table.rows) {
    switch (row.cells[3].dataset['available']) {
      case "true":
        row.classList.add('available');
        break;
      case "false":
        row.classList.add('unavailable');
        break;
      default:
        row.setAttribute('hidden', 'true');
    }

    row.style.textDecoration =
      parseInt(row.cells[1].innerText) < 18
        ? 'line-through'
        : '';

    row.classList.add(
      row.cells[2].innerText === 'm'
        ? 'male'
        : 'female'
    );
  }
}
