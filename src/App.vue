<script>
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'

export default {
  components: {
    RouterView,
    Navbar
  },
  data() {
    return {
      filter: ''
    }
  },
  methods: {
    handleFilter(filter) {
      this.filter = filter
    }
  }
}
</script>

<template>
  <Navbar @filter="handleFilter" />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import './assets/base.css';
@import './assets/main.css';
</style>
