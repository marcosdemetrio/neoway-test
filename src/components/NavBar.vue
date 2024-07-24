<script>
import ArticleFilter from './ArticleFilter.vue'
import NavBarItem from './NavBarItem.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    ArticleFilter,
    NavBarItem
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/'
    }
  },
  methods: {
    ...mapActions(['filterArticles']),
    handleFilter(filter) {
      this.filterArticles(filter)
    }
  }
}
</script>

<template>
  <div class="navbar">
    <nav>
      <NavBarItem to="/">Articles</NavBarItem>
      <NavBarItem to="/favorites">Favorites</NavBarItem>
    </nav>
    <ArticleFilter v-if="isHomePage" @filter="handleFilter" />
  </div>
</template>

<style scoped>
.navbar {
  height: 6rem;
  background-color: var(--color-navbar);
  padding: 1rem;
  margin-bottom: 1rem;
  color: var(--color-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
