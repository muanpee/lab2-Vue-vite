<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message';
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div class = "text-center font-sans text-gray-700 antialias" >
  <header>
    <div id="flashMessage" class="animation-fade" v-if="message">
      <h4>{{ message }}</h4>
    </div>
    <h1>Deploy with Vercel</h1>
    <div class="wrapper">
      <nav class="py-6">
        <RouterLink class="font-bold text-gray-700"exact-active-class="text-green-500" :to="{ name: 'event-list-view' }">Event</RouterLink> | 
        <RouterLink class="font-bold text-gray-700"exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  </div>
</template>

<style>


/* #layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50
} */

 /* nav{
  padding: 30px;
 }
nav a {
  font-weight: bold;
  color: #2c3e50
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}

@keyframes yelloFade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  } 
}
#flashMessage {
  animation: yelloFade 3s ease-in-out;
} */
</style>