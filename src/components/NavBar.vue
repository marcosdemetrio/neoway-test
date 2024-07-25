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
  min-height: 100px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--color-border);
}
@media (max-width: 473px) {
  .navbar {
    justify-content: center;
    min-height: 140px;
  }
  .navbar > nav {
    margin-bottom: 1rem;
  }
}
</style>
