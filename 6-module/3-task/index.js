import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #carousel           = null;
  #arrowLeft          = null;
  #arrowRight         = null;
  #currentSlideNumber = null;
  #totalSlideAmount   = null;

  constructor(slides) {
    this.#carousel = createElement(this.#templateCarousel(slides));
    this.#arrowLeft = this.#carousel.querySelector('.carousel__arrow_left');
    this.#arrowRight = this.#carousel.querySelector('.carousel__arrow_right');
    this.#currentSlideNumber = 0;
    this.#totalSlideAmount = slides.length;

    this.#updateVisibilityOfArrows();

    this.#arrowLeft.addEventListener('click', this.#onLeftArrowClick);
    this.#arrowRight.addEventListener('click', this.#onRightArrowClick);
    this.#carousel.querySelectorAll('.carousel__slide').forEach(slide => {
      slide.querySelector('.carousel__button').addEventListener('click', this.#onButtonClick);
    });
  }

  get elem() {
    return this.#carousel;
  }

  #onLeftArrowClick = () => this.#actionSwitchSlider(-1);

  #onRightArrowClick = () => this.#actionSwitchSlider(+1);

  #onButtonClick = (event) => {
    event.target.dispatchEvent(
      new CustomEvent('product-add', {
        bubbles: true,
        detail: event.currentTarget.closest('.carousel__slide').dataset.id
      })
    );
  };

  #actionSwitchSlider(position) {
    this.#currentSlideNumber = this.#currentSlideNumber + position;
    const shift = this.#getSlideWidth() * this.#currentSlideNumber * -1;
    this.#carousel.querySelector('.carousel__inner').style.transform = `translateX(${shift}px)`;
    this.#updateVisibilityOfArrows();
  }

  #getSlideWidth() {
    return this.#carousel.offsetWidth;
  }

  #updateVisibilityOfArrows() {
    this.#arrowRight.style.display =
      this.#currentSlideNumber === this.#totalSlideAmount - 1 ? 'none' : '';

    this.#arrowLeft.style.display =
      this.#currentSlideNumber === 0 ? 'none' : '';
  }

  #templateCarousel(slides) {
    return `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
            ${slides.map((slide) => this.#templateSlide(slide)).join('')}
        </div>
      </div>
    `;
  }

  #templateSlide(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">${'€' + slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }
}
