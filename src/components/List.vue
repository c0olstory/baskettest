<template>
  <div class="featured__items cart-items">
     <!-- @addToCart="addToCart" -->
     <CartItem 
         v-for="id in getItemsOmPage" 
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
         'addItem',
         'addToBasketItem',
         'basketData'  
      ]),
      // addToCart(data) {
      //    console.log(data, "addtocart list page")   
      //    this.addItem(data)
      // },
      addToBaskett(data) {
         console.log(data, "list.vue") 
         this.addToBasketItem(data)
         // this.basketData(data)
      },
      loadMoreData () {
         this.page++
         this.requestData(this.page)
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
         // console.log(this.$store.getters.getData, 'myState')
         return this.$store.getters.getData
      }
   },
   created () {
      // this.requestData(1)
      this.loadMoreData()
   }
}
</script>

<style>

</style>