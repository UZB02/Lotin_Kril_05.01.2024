<template>
 <section class="w-full h-screen bg-slate-300">
   <div class="container bg-red-500 h-full flex items-center justify-center flex-col">
      <div class="top w-full">
        <top/>
      </div>
      <div class="bottom w-full">
        <textareas/>
      </div>
    </div>
 </section>
</template>
<script setup>
import top from "./topchange.vue"
import textareas from "./textarea.vue"
</script>
<style scoped>
  
</style>