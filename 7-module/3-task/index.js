import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  #slider     = null;
  #steps      = null;
  #value      = null;
  elem        = null;

  constructor({ steps = 5, value = 0 }) {
    this.#slider = createElement(this.#templateSlider(steps, value));
    this.#steps = steps;
    this.#value = value;
    this.elem = this.#slider;

    this.#setActiveStep(value);

    this.#slider.addEventListener('click', this.#onSliderClick);
  }

  #onSliderClick = (event) => {
    const segments = this.#steps - 1;
    const sliderWidth = this.#slider.getBoundingClientRect().width;
    const segmentWidth = sliderWidth / segments;
    const relativeCordClick = event.clientX - this.#slider.getBoundingClientRect().x;

    this.#setActiveStep(Math.round(relativeCordClick / segmentWidth));

    event.currentTarget.dispatchEvent(
      new CustomEvent('slider-change', {
        bubbles: true,
        detail: this.#value
      }, { once: true })
    );
  }

  #setActiveStep(number) {
    if (number > this.#steps) {
      this.#value = this.#steps - 1;
    } else if (number < 0) {
      this.#value = 0;
    } else {
      this.#value = number;
    }

    const segments = this.#steps - 1;
    const positionInPercents = (100 / segments) * this.#value;

    this.#slider.querySelector('.slider__value').innerText = this.#value;
    this.#slider.querySelector('.slider__thumb').style.left = `${positionInPercents}%`;
    this.#slider.querySelector('.slider__progress').style.width = `${positionInPercents}%`;

    Array.from(this.#slider.querySelector('.slider__steps').children)
      .map((e, i) => {
      (this.#value === i) ? e.classList.add('slider__step-active') : e.classList.remove('slider__step-active')
    });
  }

  #templateSlider(steps, value) {
    return `
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value">${value}</span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
          ${`<span></span>`.repeat(steps)}
        </div>
      </div>
    `;
  }
}
