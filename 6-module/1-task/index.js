/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;

  constructor(rows) {
    this.elem = document.createElement('table');

    this.elem.insertAdjacentHTML('afterbegin', this.#templateTHead({
      name: "Имя",
      age: "Возраст",
      salary: "Зарплата",
      city: "Город"
    }));

    this.elem.insertAdjacentHTML('beforeend', this.#templateTBody(rows));

    this.elem.addEventListener('click', this.#onButtonClick);
  }

  #onButtonClick = (event) => {
    if(event.target.localName === 'button') {
      event.target.closest('tr').remove();
    }
  };

  #templateTHead(labels) {
    return `
      <thead>
        <tr>
          <th>${labels.name}</th>
          <th>${labels.age}</th>
          <th>${labels.salary}</th>
          <th>${labels.city}</th>
          <th></th>
        </tr>
      </thead>
    `;
  }

  #templateTBody(rows) {
    return `
      <tbody>
        ${rows.map(row => this.#templateRow(row)).join('')}
      </tbody>
    `;
  }

  #templateRow(row) {
    return  `
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
