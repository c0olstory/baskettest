import BasketItem from './basketitem';



export default class Basket {
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

// const BasketInstance = new Basket();

// new List(BasketInstance);