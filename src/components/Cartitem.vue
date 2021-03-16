<template>
      <div class="cart-product">     
         <div class="border-line cart-item">
            <img :src=this.getData[this.id].img> 
            <p class="cart-item__name">{{ this.getData[this.id].name }}</p> 
            <p class="cart-item__price">${{ this.getData[this.id].price }}</p>
            <button @click="addToCart" class="cart-item__btn">Добавить в корзину</button>
         </div>
      </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   props: {
      id: Number,
   },
   methods: {
      addToCart() {
         this.$emit( 'addToCart', this.id)
      }
   },
   computed: {
      ...mapGetters ([
         'getData',
         'getItemsInCart',
      ]),
      getItemData() {
         return this.getData[this.id]
      },
      getItemsInCart() {
         return this.getData[this.id]
      }
   },
}
</script>

<style>

</style>