<template>
   <div>
      <div class="wrapper">
         <header class="header">
            <a class="header__link" href="form.html">Форма</a>
         </header>
         <div class="cart-product">
            <div class="goods-list">
               <h2 class="header-h2">Товары</h2>
               <List />
            </div>
            <div class="basket-list">
               <h2 class="header-h2">Корзина</h2>
               <div class="sum">Общая сумма: </div>
                  <Cart 
                     v-if="getItemsInCart.length"
                     :cart_data="getItemsInCart"
                  />
               
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import List from './components/List.vue'
import Cart from './components/cart.vue'
import { mapGetters } from 'vuex'
export default {
   components: {
      List,
      Cart,
   },
   computed: {
      ...mapGetters ([
         'getItemsInCart',
      ])
   },
}
</script>

<style>

</style>
