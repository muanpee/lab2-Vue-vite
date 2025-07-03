<script setup lang="ts">
import { ref } from 'vue'
import type { Event as EventType } from '@/types'
defineProps<{
  event: EventType
}>()
const event = ref({
  id: 5555101,
  category:'animal welfare',
  title: 'Cat Adoption Day',
  description: 'Find your new feline friend at this event.',
  location: 'Meow Town',
  date: 'January 28, 2022',
  time: '12:00',
  petsAllowed: true,
  organizer: 'Kat Laydee',
})

</script>

<template>
    <div class="event-meta">
     <h2> {{ event.category }}</h2>
      <span>{{ event.organizer}}</span>
    </div>
</template>

<style scoped>
.event-meta {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  align-items: end;
}
.event-meta:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
}
</style>
