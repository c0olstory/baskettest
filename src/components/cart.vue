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
import { mapGetters } from 'vuex'
import Cartitem from './Cartitem.vue'
export default {
   components: {
      Cartitem,
   },
   props: {
      cart_data: {
         type: Array,
         default() {
            return []
         }
      }
   },
   computed: {
      ...mapGetters([
         'getItemsInCart'
      ]),
   },
}
</script>

<style>

</style>