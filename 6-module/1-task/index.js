import createElement from '../../assets/lib/create-element.js';

export default class UserTable {
  #table = null;

  constructor(rows) {
    this.#table = createElement(this.#templateTable(rows));
    this.#table.addEventListener('click', this.#onButtonClick);
  }

  #onButtonClick = (event) => {
    if(event.target.localName === 'button') {
      event.target.closest('tr').remove();
    }
  };

  get elem() {
    return this.#table;
  }

  #templateTable(rows) {
    return `
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => this.#templateRow(row)).join('')}
        </tbody>
      </table>
    `;
  }

  #templateRow(row) {
    return `
      <tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button>X</button></td>
      </tr>
    `;
  }
}
