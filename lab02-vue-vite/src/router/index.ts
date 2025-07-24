import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListview.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '@/views/StudentView.vue'
import EventDetailView from '@/views/EventDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
    },    
    {
      path: '/events/:id',
      name: 'event-detail-view',
      component: EventDetailView,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    
    },
    {
    path: '/students',
    name: 'student-view',
    component: StudentView,
    }
  ],
})

export default router
