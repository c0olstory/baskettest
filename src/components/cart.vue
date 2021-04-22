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
export default {
   components: {
      Cartitem,
   },
   methods: {
      ...mapActions([
         'basketData',
         'addToBasketItem',
      ]),
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