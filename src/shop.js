let counterBase = 0; // я не знаю как избежать ввода глобальной переменной

import Button from './button';
import GoodItem from './gooditem';
import Basket from './basket';

class List {
   _items = [];
   // preloading = false;

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
      const url = '/database/items.json'
      // const url = 'https://baskettest.herokuapp.com/database/items.json'


      return fetch(url)
   }
   // http://localhost:3000
   showMore() {
      const url = [
         '/database/items1.json',
         '/database/items2.json',
         '/database/items3.json'
      ]

      // const url = [
      //    'https://baskettest.herokuapp.com/database/items1.json',
      //    'https://baskettest.herokuapp.com/database/items2.json',
      //    'https://baskettest.herokuapp.com/database/items3.json'
      // ]
      
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

const BasketInstance = new Basket();

new List(BasketInstance);

