import Button from './button';


export default class BasketItem {
   _name = '';
   _price = 0;
   _img = 0;
   _counter = 1;  

   constructor ({name, price, img}) {
      this._name = name;
      this._price = price;
      this._img = img;
   }

   oneMoreProduct() {
      this._counter++
      BasketInstance.render()
   }

   deleteOneProduct() {
      this._counter--
      BasketInstance.render()
   }

   deleteAllGoods() {
      BasketInstance.removeItems(this)
   }

   render(renderBasket) {
      const basketProduct = document.createElement('div'); 

      basketProduct.innerHTML = `
         <img src="${this._img}"> 
         <p class="cart-item__name">${this._name}</p> 
         <p class="cart-item__price">$${this._price}</p>
         <div class="cart-item__price-block price-block">
         <input class="price-block__input-value" type="number" value="${this._counter}" min="0" max="99"/>
         </div>
         `;

      basketProduct.classList.add('border-line');
      basketProduct.classList.add('cart-item');

      const btnAdd = new Button('+', this.oneMoreProduct.bind(this), 'price-block__btn-add')
      btnAdd.render(basketProduct)

      const btnRemove = new Button('-', this.deleteOneProduct.bind(this), 'price-block__btn-remove')
      btnRemove.render(basketProduct)

      const btn = new Button('Удалить все', this.deleteAllGoods.bind(this), 'price-block__btn-remove-all')
      btn.render(basketProduct)

      renderBasket.appendChild(basketProduct)
   }
}