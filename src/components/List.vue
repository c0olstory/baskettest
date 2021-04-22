<template>
  <div class="featured__items cart-items">
     <!-- @addToCart="addToCart" -->
     <CartItem 
         v-for="id in getItemsOnPage" 
         :id="id" 
         :key="id"
         @addToBaskett="addToBaskett"  
     />
     <div>
         <Button @clicked="loadMoreData">Показать ещё</Button>
     </div> 
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import CartItem from './Cartitem.vue'
import Button from './Button.vue'

export default {
   components: {
      CartItem,
      Button,
   },
   data () {
      return {
         page: 0, 
      }
   },
   methods: {
      ...mapActions([
         'requestData',
         'addToBasketItem',
      ]),
      addToBaskett(data) {
         console.log(data, "list.vue") 
         this.addToBasketItem(data)
      },
      loadMoreData () {
         this.page++
         this.requestData(this.page)
      },
   },
   computed: {
      ...mapGetters([
         'getItemsOnPage',
         'getItemsInCart',
         'getFullPrice',
      ]),
      myState () {
         return this.$store.getters.getData
      }
   },
   created () {
      this.loadMoreData()
   }
}
</script>

<style>

</style>