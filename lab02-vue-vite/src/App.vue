<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Get current page from route, default to 1
const currentPage = computed(() => {
  return parseInt(route.query.page as string) || 1
})

// Get current size from route, default to 2
const currentSize = computed(() => {
  return parseInt(route.query.size as string) || 2
})
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Event</RouterLink> | 
          <RouterLink to="/about">About</RouterLink> |
          <RouterLink to="/students">Students</RouterLink>
        </nav>
        <div class="page-size">
          Page size:
          <RouterLink 
            :to="{ name: 'event-list-view', query: { page: 1, size: 2 } }"
            :class="{ active: currentSize === 2 }"
          >2</RouterLink> |
          <RouterLink 
            :to="{ name: 'event-list-view', query: { page: 1, size: 5 } }"
            :class="{ active: currentSize === 5 }"
          >5</RouterLink> |
          <RouterLink 
            :to="{ name: 'event-list-view', query: { page: 1, size: 6 } }"
            :class="{ active: currentSize === 6 }"
          >6</RouterLink>
        </div>
      </div>
    </header>
    
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50
}

nav a.router-link-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}

.page-size {
  margin-top: 10px;
  font-size: 14px;
}

.page-size a {
  margin: 0 4px;
  text-decoration: none;
  color: #2c3e50;
}

.page-size a.active {
  color: #42b983;
  font-weight: bold;
}

.page-size a:hover {
  color: #42b983;
}</style>