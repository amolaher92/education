<template>
  <div class="container bg-red-200 p-12">
    <Counter/>
  </div>

</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
  name: "StoreExample",
  components: {
    Counter
  }
}
</script>

<style scoped>

</style>
