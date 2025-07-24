<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import EventMeta from '@/components/EventMeta.vue';
import { ref, onMounted, computed, watchEffect } from 'vue';
import EventService from '../services/EventService';
import { type Event } from '@/types'

const totalEvents = ref(0);
const events = ref<Event[] | null>(null)
const loading = ref(false);
const error = ref<string | null>(null);

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    default: 2
  }
})

const page = computed(() => Number(props.page));
const size = computed(() => Number(props.size));

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / size.value);
  return page.value < totalPages;
});

const totalPages = computed(() => {
  return Math.ceil(totalEvents.value / size.value);
});

// Watch for changes in page or size and fetch new data
watchEffect(() => {

  EventService.getEvents(size.value, page.value)
    .then(response => {
      console.log('API Response received:', {
        eventsCount: response.data.length,
        totalCount: response.headers['x-total-count'],
        page: page.value,
        size: size.value
      });
      
      events.value = response.data;
      totalEvents.value = parseInt(response.headers['x-total-count']) || response.data.length;
    })
    .catch(err => {
      console.error('Error fetching events:', err);
      error.value = 'Failed to load events';
    })
    .finally(() => {
      loading.value = false;
    });
});
</script>

<template>
  <h1>Events for Good</h1>
  <span class="page-info">Page {{ page }} of {{ totalPages }}</span>
</br>
  <!-- Debug Info Panel -->
  <div v-if="!loading">
    <div class="events">
      <div
        v-for="event in events"
        :key="event.id"
      >
        <EventCard :event="event" />
      </div>
    </div>
    
    <div v-if="events && events.length === 0" class="no-events">
      No events found.
    </div>
  </div>
  
  <div class="pagination">
    <RouterLink 
      id="page-prev"
      :to="{ name: 'event-list-view', query: { page: page - 1, size: size } }"
      rel="prev"
      v-if="page > 1"
    >&#60; Prev Page</RouterLink>

    

    <RouterLink 
      id="page-next"
      :to="{ name: 'event-list-view', query: { page: page + 1, size: size } }"
      rel="next"
      v-if="hasNextPage"
    >Next Page &#62;</RouterLink>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.debug-panel {
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 10px auto;
  font-size: 12px;
  max-width: 800px;
  text-align: left;
}

.no-events {
  padding: 20px;
  color: #666;
  font-style: italic;
}

.pagination {
  display: flex;
  width: 290px;
  margin-left: auto;
  margin-right: auto;
}

.pagination a {
  flex : 1;
  text-decoration: none;
  color: #2c3e50;
  
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>