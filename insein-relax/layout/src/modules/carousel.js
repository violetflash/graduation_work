class Carousel {
  constructor(
    {
      main,
      wrapper,
      next,
      prev,
      className,
      axis = 'x',
      dotsClass = false,
      infinite = false,
      slidesToShow = 2,
      position = 0,
      responsive = [],
    }) {

    if(!main || !wrapper){
      console.warn('carousel: Необходимо 2 селектора, "main" и "wrapper"');
    }

    this.className = className;
    this.main = document.querySelector(main);
    this.wrapper = document.querySelector(wrapper);
    this.slides = document.querySelector(wrapper).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.infinite = infinite;
    this.axis = axis;
    if (dotsClass) {
      this.dots = document.querySelectorAll(dotsClass);
    }

    this.options = {
      position,
      maxPosition: this.slides.length - this.slidesToShow,
      slideWidth: Math.floor(100 / this.slidesToShow),
    };
    this.responsive = responsive;
  }

  addSliderClasses() {
    this.main.classList.add(`${this.className}-max-slider`);
    this.wrapper.classList.add(`${this.className}-max-slider__wrapper`);
    for (const elem of this.slides) {
      elem.classList.add(`${this.className}-max-slider__item`);
    }
    if (this.dots) {
      this.setDots();
    }
  }

  addStyle() {
    let style = document.getElementById(`${this.className}-max-slider__styles`);
    if (!style) {
      style = document.createElement('style');
      style.id = `${this.className}-max-slider__styles`;
    }

    style.textContent = `
            .${this.className}-max-slider {
                overflow: hidden !important;
            }
            .${this.className}-max-slider__wrapper {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .${this.className}-max-slider__item {
                display: flex !important;
                align-items: center;
                justify-content: center;
                flex: 0 0 ${this.options.slideWidth}% !important;
                margin: auto 0 !important;
            }
        `;
    document.head.appendChild(style);
  }

  addSliderArrows() {
    this.main.insertAdjacentHTML('beforeend', `
            <button id="${this.className}-max-slider__prev-arrow"></button>
            <button id="${this.className}-max-slider__next-arrow"></button>
        `);
    const style = document.createElement('style');
    style.textContent = `
            #${this.className}-max-slider__prev-arrow,
            #${this.className}-max-slider__next-arrow {
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
                outline: transparent;
            }
            #${this.className}-max-slider__next-arrow {
                border-left-color: #19b5fe;
            }
            #${this.className}-max-slider__prev-arrow {
                border-right-color: #19b5fe;
            }
        `;
    document.head.appendChild(style);
  }

  nextSlider() {
    if(this.infinite || this.options.position < this.slides.length - this.slidesToShow){
      ++this.options.position;
      if (this.options.position > this.slides.length - this.slidesToShow) {
        this.options.position = 0;
      }
      this.wrapper.style.transform = `translate${this.axis.toUpperCase()}(-${this.options.position * this.options.slideWidth}%)`;
    }
  }

  prevSlider() {
    if (this.options.infinite || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.slides.length - this.slidesToShow;
      }
      this.wrapper.style.transform = `translate${this.axis.toUpperCase()}(-${this.options.position * this.options.slideWidth}%)`;
    }
  }

  dotControl(e) {
    let target = e.target;
    const className = `${this.className}-max-slider-dot`;
    if (target.classList.contains(className)) {
      this.options.position = +target.getAttribute('dot');
      this.setPosition();
    }
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
    if (this.dots) {
      document.addEventListener('click', this.dotControl.bind(this));
    }

  }

  initResponsive() {
    const slidesToShowDefault = this.slidesToShow;
    const breakpoints = this.responsive.map(item => item.breakpoint);
    const maxBreakpoint = Math.max(...breakpoints);

    const checkScreenWidth = () => {
      const windowWidth = document.documentElement.clientWidth;
      const windowHeight = document.documentElement.clientHeight;
      if (windowWidth < maxBreakpoint) {
        for (let i = 0; i < breakpoints.length; i++) {
          if (windowWidth < breakpoints[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            //обновление ширины слайда
            this.options.slideWidth = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }

        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        //обновление ширины слайда
        this.options.slideWidth = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);
  }

  setPosition() {
    this.wrapper.style.transform = `translate${this.axis.toUpperCase()}(-${this.options.position * this.options.slideWidth}%)`;
  }

  setDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.add(`${this.className}-max-slider-dot`);
      dot.setAttribute('dot', `${index}`);
    });
  }

  init() {
    this.addSliderClasses();
    this.addStyle();

    if (!this.prev && !this.next && !this.dots) {
      this.addSliderArrows();
      this.next = document.getElementById(`${this.className}-max-slider__next-arrow`);
      this.prev = document.getElementById(`${this.className}-max-slider__prev-arrow`);
    }

    this.controlSlider();

    if (this.responsive) {
      this.initResponsive();
    }

    this.setPosition();
  }
}


export default Carousel;
