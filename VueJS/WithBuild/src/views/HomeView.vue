<template>
  <main>
    <TheWelcome/>
  </main>
</template>
<script>
import TheWelcome from '@/components/TheWelcome.vue'

export default {
  name: 'Home',
  components: {
    TheWelcome
  },
 /* mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) this.$route.push({name: 'About'})
  }*/
}
</script>
