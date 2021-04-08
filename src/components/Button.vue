<template>
  <div :class="[$style.wrapper]" @click="$emit('clicked')"> 
     <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style module>
   .wrapper {
      display: block;
      border-radius: 5px;
      padding: 5px;
      background: #FF7A7A;
      color: #fff;
      text-align: center;
   }
</style> 