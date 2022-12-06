function Carousel(node) {
  const $ = (selector) => document.querySelector(node).querySelector(selector);

  const carousel = {
    innitCarousel() {
      this.carouselInner = $('.carousel__inner');
      this.arrowLeft = $('.carousel__arrow_left');
      this.arrowRight = $('.carousel__arrow_right');

      carousel.setCurrentSlideNumber(0);
      carousel.updateVisibilityOfArrows();

      this.arrowLeft.addEventListener('click', e => this.eventScroll(e));
      this.arrowRight.addEventListener('click', e => this.eventScroll(e));

      return this;
    },

    getSlideWidth() {
      return this.carouselInner.offsetWidth;
    },

    getTotalSlideAmount() {
      return this.carouselInner.querySelectorAll('.carousel__slide').length - 1;
    },

    getCurrentSlideNumber() {
      return parseInt(this.carouselInner.dataset.currentSlide, 10);
    },

    setCurrentSlideNumber(number) {
      this.carouselInner.dataset.currentSlide = number;
    },

    updateVisibilityOfArrows() {
      this.arrowRight.style.display =
        this.getCurrentSlideNumber() === this.getTotalSlideAmount() ? 'none' : '';

      this.arrowLeft.style.display =
        this.getCurrentSlideNumber() === 0 ? 'none' : '';
    },

    eventScroll(target) {
      const direction = (target.currentTarget === this.arrowRight) ? +1 : -1;
      this.setCurrentSlideNumber(this.getCurrentSlideNumber() +  direction);

      const shift = this.getSlideWidth() * this.getCurrentSlideNumber() * -1;

      this.carouselInner.style.transform = `translateX(${shift}px)`;
      this.updateVisibilityOfArrows();
    }
  };

  return carousel.innitCarousel();
}

function initCarousel() {
  const carousel = new Carousel('.carousel');
}
