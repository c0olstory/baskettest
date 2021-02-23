class List {
   _items = [];

   constructor (BasketInstance) {
      let goods = this.fetchGoods();
      goods = goods.map(item => {
         return new GoodItem(item, BasketInstance);
      });
      this._items = goods;
      this.render();
   }

   fetchGoods () {
      return [
         {name: 'Shirt', price: 150, img: 'https://picsum.photos/seed/1/200',value: 1},
         {name: 'Socks', price: 250, img: 'https://picsum.photos/seed/2/200',value: 1},
         {name: 'Jacket', price: 350, img: 'https://picsum.photos/seed/3/200',value: 1}
      ]
   }

   render() {
      this._items.forEach(Good => {
         Good.render()
      })
   }
}

class GoodItem {
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
      console.log('Add', this._name);
   }

   render() {
      const placeToRender = document.querySelector('.goods-list');
      if(placeToRender) {
         const basketProduct = document.createElement('div');
         basketProduct.innerHTML = `<img src="${this._img}"> <p class="cart-item__name">${this._name}</p> <p class="cart-item__price">$${this._price}</p>`;
         basketProduct.classList.add('border-line');
         basketProduct.classList.add('cart-item');

         const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
         btn.render(basketProduct)

         placeToRender.appendChild(basketProduct)
      }
   }
}

class Basket {
   _items = [];

   // constructor () {
      
   // }


   add(item) {
      if(item != undefined) {
         let cart = item;
         this._items.push(cart);
         // this.quantityProduct();
         this.render();
      }
   }

   // quantityProduct() {
   //    console.log(this)
   //    if(this._items.length > 1) {
   //       this._items.forEach(function(name) {
   //          console.log(name)
   //       })
   //    }  
   // }

   itemValue(nameProduct) {
      console.log(nameProduct)
   }
   

   render() {      
      return new BasketItem(this._items[this._items.length-1])
      
      // if(this.addItem != undefined) {
      //    this._items.forEach(Cart => {
      //       Cart.render()
      //    })
      // }
      // let Bi = this._items;
      // Bi.render();
   }
}

class BasketItem {
   _name = '';
   _price = 0;
   _img = 0;
   _value = 1;
   // _BasketInstance = null;

   constructor ({_name, _price, _img, value}) {
      this._name = _name;
      this._price = _price;
      this._img = _img;
      this._value = value;

      this.addToBasket();
   }

   addToBasket() {
      this.render();
   }

   

   oneMoreProduct() {
      
   }

   deleteOneProduct() {

   }
 

   render() {
      const renderBasket = document.querySelector('.basket-list');
      if(renderBasket) {
         const basketProduct = document.createElement('div');
         basketProduct.innerHTML = `<img src="${this._img}"> <p class="cart-item__name">${this._name}</p> <p class="cart-item__price">$${this._price}</p> <input class="cart-item__input-value" type="number" value="${this.value}" min="0" max="99"/>`;
         basketProduct.classList.add('border-line');
         basketProduct.classList.add('cart-item');

         const btn = new Button('Удалить все', this.addToBasket.bind(this))
         btn.render(basketProduct)

         const btnAdd = new Button('+', this.oneMoreProduct.bind(this))
         btnAdd.render(basketProduct)

         const btnRemove = new Button('-', this.deleteOneProduct.bind(this))
         btnRemove.render(basketProduct)

         renderBasket.appendChild(basketProduct)
      }
   }
}

const BasketInstance = new Basket();

new List(BasketInstance);