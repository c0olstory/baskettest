let counterBase = 0; // я не знаю как избежать ввода глобальной переменной


class List {
   _items = [];
   // preloading = false;
   // counterBase = 0;


   constructor (BasketInstance) {
      this.fetchGoods()
         .then(res => {
            return res.json()
         })
         .then(data => {
            // this.preloading = false;
            const goods = data.data.map(item => {
               return new GoodItem(item, BasketInstance)
            })
            // this._items = [...this._items, ...goods];
            this._items = goods;
            this.render();
            this.renderShowMore()
         })
   }

   fetchGoods () {
      // const url = 'http://localhost:3000/database/items.json'
      const url = 'https://baskettest.herokuapp.com/database/items.json'


      return fetch(url)
   }

   showMore() {
      // const url = [
      //    'http://localhost:3000/database/items1.json',
      //    'http://localhost:3000/database/items2.json',
      //    'http://localhost:3000/database/items3.json'
      // ]

      const url = [
         'https://baskettest.herokuapp.com/database/items1.json',
         'https://baskettest.herokuapp.com/database/items2.json',
         'https://baskettest.herokuapp.com/database/items3.json'
      ]
      
      if(counterBase < 3) {
         fetch(url[counterBase])
         .then(res => {
            return res.json()
         })
         .then(data => {
            const goods = data.data.map(item => {
               return new GoodItem(item, BasketInstance)
            })
            this._items = goods;
            this.render();
            this.addMore()
         })
         counterBase++
      } else {
         this.deleteButton();
      }
      this.deleteButton();
   }

   deleteButton() {
      const btnMore = document.querySelectorAll('.cart-item__btn')
      btnMore[btnMore.length - 1].remove();
   }

   addMore() {
      if(counterBase < 3) {
         this.renderShowMore()
      }
   }

   renderShowMore() {
      const goodsList = document.querySelector('.goods-list');
      const btn = new Button('Показать ещё', this.showMore.bind(this), 'cart-item__btn')
      btn.render(goodsList);
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

class Basket {
   _items = [];

   add(item) {
      const FoundItem = this._items.find((BasketItem) => {
         return BasketItem._name === item._name
      })

      if(FoundItem) {
         FoundItem._counter++
      } else {
         this._items.push(new BasketItem({
            name: item._name,
            price: item._price,
            img: item._img
         }))
      }

      this.render()
   }

   removeItems(item) {
      console.log(BasketItem)
      const activeItem = this._items.find((BasketItem) => {
         return BasketItem._name === item._name
      })

      if(activeItem) {
         const index = this._items.indexOf(activeItem)
            this._items.splice(index, 1)
      }
      this.render()
   }
   
   render() {
      const renderBasket = document.querySelector('.basket-list');
      let goodsSum = 0;

      this._items.forEach(BasketItemInstance => {
         goodsSum += BasketItemInstance._price * BasketItemInstance._counter
         return goodsSum
      })

      if(renderBasket) {
         renderBasket.innerHTML = ''
         renderBasket.innerHTML = `<h2 class="header-h2">Корзина</h2> <div class="sum">Общая сумма: $${goodsSum}</div>`
      }

      this._items.forEach(BasketItemInstance => {
         if(BasketItemInstance._counter === 0) {
            const index = this._items.indexOf(BasketItemInstance)
            this._items.splice(index, 1)
         }
      })

      this._items.forEach(BasketItemInstance => {
         BasketItemInstance.render(renderBasket)
      })
   }
}

class BasketItem {
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

const BasketInstance = new Basket();

new List(BasketInstance);