(()=>{"use strict";var e={d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.d({},{h:()=>o});class i{constructor(e,i,s){t(this,"_text",""),t(this,"_callback",null),t(this,"_itemClass",""),this._text=e,this._callback=i,this._itemClass=s}onBtnClick(){const e=this._callback;"function"==typeof e&&e()}getTemplate(){const e=document.createElement("button");return e.classList.add(this._itemClass),e}render(e){if(e){const t=this.getTemplate(this._itemClass);t.innerHTML=this._text,e.appendChild(t),t.addEventListener("click",(()=>{this.onBtnClick()}))}}}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class n{constructor({name:e,price:t,img:i,value:n},r){s(this,"_name",""),s(this,"_price",0),s(this,"_img",0),s(this,"_value",1),s(this,"_BasketInstance",null),this._name=e,this._price=t,this._img=i,this._value=n,this._BasketInstance=r}addToCart(){this._BasketInstance.add(this)}render(){const e=document.querySelector(".goods-list");if(e){const t=document.createElement("div");t.innerHTML=`\n         <img src="${this._img}"> \n         <p class="cart-item__name">${this._name}</p> \n         <p class="cart-item__price">$${this._price}</p>\n         `,t.classList.add("border-line"),t.classList.add("cart-item"),new i("Добавить в корзину",this.addToCart.bind(this),"cart-item__btn").render(t),e.appendChild(t)}}}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class c{constructor({name:e,price:t,img:i}){r(this,"_name",""),r(this,"_price",0),r(this,"_img",0),r(this,"_counter",1),this._name=e,this._price=t,this._img=i}oneMoreProduct(){this._counter++,o.render()}deleteOneProduct(){this._counter--,o.render()}deleteAllGoods(){o.removeItems(this)}render(e){const t=document.createElement("div");t.innerHTML=`\n         <img src="${this._img}"> \n         <p class="cart-item__name">${this._name}</p> \n         <p class="cart-item__price">$${this._price}</p>\n         <div class="cart-item__price-block price-block">\n         <input class="price-block__input-value" type="number" value="${this._counter}" min="0" max="99"/>\n         </div>\n         `,t.classList.add("border-line"),t.classList.add("cart-item"),new i("+",this.oneMoreProduct.bind(this),"price-block__btn-add").render(t),new i("-",this.deleteOneProduct.bind(this),"price-block__btn-remove").render(t),new i("Удалить все",this.deleteAllGoods.bind(this),"price-block__btn-remove-all").render(t),e.appendChild(t)}}let a=0;const o=new class{constructor(){var e,t;t=[],(e="_items")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}add(e){const t=this._items.find((t=>t._name===e._name));t?t._counter++:this._items.push(new c({name:e._name,price:e._price,img:e._img})),this.render()}removeItems(e){const t=this._items.find((t=>t._name===e._name));if(t){const e=this._items.indexOf(t);this._items.splice(e,1)}this.render()}render(){const e=document.querySelector(".basket-list");let t=0;this._items.forEach((e=>(t+=e._price*e._counter,t))),e&&(e.innerHTML="",e.innerHTML=`<h2 class="header-h2">Корзина</h2> <div class="sum">Общая сумма: $${t}</div>`),this._items.forEach((e=>{if(0===e._counter){const t=this._items.indexOf(e);this._items.splice(t,1)}})),this._items.forEach((t=>{t.render(e)}))}};new class{constructor(e){var t,i;i=[],(t="_items")in this?Object.defineProperty(this,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[t]=i,this.fetchGoods().then((e=>e.json())).then((t=>{const i=t.data.map((t=>new n(t,e)));this._items=i,this.render(),this.renderShowMore()}))}fetchGoods(){return fetch("/database/items.json")}showMore(){a<3?(fetch(["/database/items1.json","/database/items2.json","/database/items3.json"][a]).then((e=>e.json())).then((e=>{const t=e.data.map((e=>new n(e,o)));this._items=t,this.render(),this.addMore()})),a++):this.deleteButton(),this.deleteButton()}deleteButton(){const e=document.querySelectorAll(".cart-item__btn");e[e.length-1].remove()}addMore(){a<3&&this.renderShowMore()}renderShowMore(){const e=document.querySelector(".goods-list");new i("Показать ещё",this.showMore.bind(this),"cart-item__btn").render(e)}render(){this._items.forEach((e=>{e.render()}))}}(o)})();