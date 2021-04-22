<template>
      <div class="cart-product">     
         <div class="border-line cart-item">
            <img :src=getData[id].img> 
            <p class="cart-item__name">{{ getData[id].name }}</p> 
            <p class="cart-item__price">${{ getData[id].price }}</p>
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
      addToBaskett() {
         console.log(this.getData[this.id], this.getItemData, 'cartitem.vue')
         this.$emit( 'addToBaskett', this.getItemData)
      },
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