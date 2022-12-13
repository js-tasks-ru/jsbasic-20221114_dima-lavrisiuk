import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  #card = null;
  #button = null;
  #product = null;

  constructor(product) {
    this.#card = createElement(this.#templateCard(product));
    this.#button = this.#card.querySelector('.card__button');
    this.#product = product;

    this.#button.addEventListener('click', this.#onButtonClick);
  }

  #onButtonClick = () => {
    this.#button.dispatchEvent(
      new CustomEvent('product-add', {
        bubbles: true,
        detail: this.#product.id
      })
    );
  };

  get elem() {
    return this.#card;
  }

  #templateCard(product) {
    return `
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">${'€' + product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }
}
