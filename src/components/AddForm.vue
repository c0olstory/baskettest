<template>
  <div>
     <input type="text" placeholder="name" v-model="name">
     <input type="text" placeholder="price" v-model="price">
     <Button @clicked="addGood">Отправить товар</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from './Button.vue'
export default {
   components: {
      Button,
   },
   data () {
      return {
         name: '',
         price: '',
      }
   },
   methods: {
      ...mapActions ([
         'adminAddItem',
      ]),
      addGood () {
         const goodToAdd = {name: this.name, price: this.price, img: ''}
         console.log(goodToAdd)
         this.adminAddItem(goodToAdd)
      }
   }
}
</script>

<style>

</style>