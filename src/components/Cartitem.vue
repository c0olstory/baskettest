<template>
      <div class="cart-product">     
         <div class="border-line cart-item">
            <img :src=this.getData[this.id].img> 
            <p class="cart-item__name">{{ this.getData[this.id].name }}</p> 
            <p class="cart-item__price">${{ this.getData[this.id].price }}</p>
            <!-- <button @click="addToCart" class="cart-item__btn">Добавить в корзину</button> -->
            <div>
               <Button @clicked="addToBaskett">добавить в базу</Button>
            </div> 
         </div>
      </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from './Button.vue'

export default {
   components: {
      Button,
   },
   props: {
      id: Number,
   },
   methods: {
      // addToCart() {
      //    console.log(this.id, 'addtocart cartitem page')
      //    this.$emit( 'addToCart', this.id)
      // },

      addToBaskett() {
         console.log(this.getData[this.id], this.getItemData, 'cartitem.vue')
         this.$emit( 'addToBaskett', this.getItemData)
         // this.$emit( 'addToBaskett', `"name": ${this.getData[this.id].name}, "price": ${this.getData[this.id].price}`)
      },
      // ...mapActions ([
      //    'addToBasketItem',
      // ]),
      // addToBaskett() {
      //    console.log(this.id, 'cartitem.vue')
      //    this.$emit( 'addToBasketItem', this.id)
      // },
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