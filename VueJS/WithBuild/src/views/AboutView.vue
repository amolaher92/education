<template>
  <SignUp/>
</template>
<script>
import SignUp from '../components/SignUp.vue'

export default {
  name: 'AboutView',
  components: {
    SignUp
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
