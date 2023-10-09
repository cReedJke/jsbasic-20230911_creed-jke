import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  elem = null;

  #product = {};

  constructor(product) {
    this.#product = product || this.#product;

    this.#render();
  }

  #render() {
    this.elem = createElement(this.#template());

    this.elem.addEventListener('click', (event) => {
      if (!event.target.closest('.card__button')) return;
      this.elem.dispatchEvent(new CustomEvent('product-add', {
      detail: this.#product.id,
      bubbles: true
    }))});
  }

  #template() {
    return `
    <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${this.#product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.#product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${this.#product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    </div>
    `;
  }

}