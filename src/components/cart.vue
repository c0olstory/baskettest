<template>
   <div class="shopping-cart__card-products card-products">
         <Cartitem 
         v-for="id in getItemsInCart" 
         :id="id"
         :key="id"
      />
   </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import Cartitem from './Cartitem.vue'
// import Button from './Button.vue'
export default {
   components: {
      Cartitem,
   },
   props: {
      // cart_data: {
      //    type: Array,
      //    default() {
      //       return []
      //    }
      // }
   },
   methods: {
      ...mapActions([
         'basketData',
         // 'addToBasketItem',
      ]),
      // addToBaskett(data) {
      //    console.log(data, "list.vue asd") 
      //    this.addToBasketItem(data)
      // },
   },
   computed: {
      ...mapGetters([
         'getItemsInCart'
      ]),
   },
   created() {
      this.basketData()
   },
}
</script>

<style>

</style>