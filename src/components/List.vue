<template>
  <div class="featured__items cart-items">
     <CartItem 
      v-for="id in getItemsOmPage" 
      :id="id" 
      :key="id"
      @addToCart="addToCart" 
     />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import CartItem from './Cartitem.vue'

export default {
   components: {
      CartItem,
   },
   methods: {
      ...mapActions([
         'requestData',
         'addItem'  
      ]),
      addToCart(data) {
         this.addItem(data)
         console.log(data, "215")
      },
   },
   computed: {
      ...mapGetters([
         'getItemsOmPage',
         'getItemsInCart',
         'getFullPrice',
      ]),
      myState () {
         cosnole.log(this.$store.getters.getData)
         return this.$store.getters.getData
      }
   },
   created () {
      this.requestData(1)
   }
}
</script>

<style>

</style>