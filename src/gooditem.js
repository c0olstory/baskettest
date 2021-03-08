import Button from './button';


export default class GoodItem {
   _name = '';
   _price = 0;
   _img = 0;
   _value = 1;
   _BasketInstance = null;

   constructor ({name, price, img, value}, BasketInstance) {
      this._name = name;
      this._price = price;
      this._img = img;
      this._value = value;
      this._BasketInstance = BasketInstance;
   }

   addToCart() {
      this._BasketInstance.add(this);
   }

   render() {
      const placeToRender = document.querySelector('.goods-list');
      if(placeToRender) {
         const basketProduct = document.createElement('div');
         basketProduct.innerHTML = `
         <img src="${this._img}"> 
         <p class="cart-item__name">${this._name}</p> 
         <p class="cart-item__price">$${this._price}</p>
         `;
         basketProduct.classList.add('border-line');
         basketProduct.classList.add('cart-item');

         const btn = new Button('Добавить в корзину', this.addToCart.bind(this), 'cart-item__btn')
         btn.render(basketProduct)

         placeToRender.appendChild(basketProduct)
      }
   }
}