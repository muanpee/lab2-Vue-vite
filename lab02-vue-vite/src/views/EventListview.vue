<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import EventMeta from '@/components/EventMeta.vue';
import { ref, onMounted } from 'vue';
import EventService from '../services/EventService';
import type { Event } from '@/types'

const events = ref<Event[]>([])

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
});

</script>

<template>
  <h1>Events for Good</h1>
  <div>
    <div class="events">
      <div
        v-for="event in events"
        :key="event.id"
      >
        <EventCard :event="event" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.animal-welfare-meta {
  display: flex;
  justify-content: flex-end;
}
</style>
