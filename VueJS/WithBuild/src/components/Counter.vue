<template>
  <div class="my-3 flex justify-center w-20 border py-4">
    {{ countPlusLocalState }}
  </div>
  <div>
    <button v-on:click="increment"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      Increment
    </button>
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  name: 'Counter',
  data() {
    return {
      count: 0
    }
  },
  /*watch: {
    count: function (val) {
      if (val > 5) {
        this.count = 0
      }
    }
  },*/
  /*  computed: {
      count(){
        return this.$store.state.count
      }
    },*/
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState(state) {
      return state.count
    }
  }),
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      this.count = this.$store.state.count
    }
  }
}
</script>
<style scoped>
</style>
