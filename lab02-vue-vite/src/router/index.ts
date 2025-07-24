import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListview.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '@/views/StudentView.vue'
import EventDetailView from '@/views//event/DetailView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventLayoutView from '@/views/event/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: route => ({
        page: parseInt(route.query.page as string) || 1,
        size: parseInt(route.query.size as string) || 2
      })
    },  
    {
      path: '/events/:id',
      name: 'event-layout-view',
      component: EventLayoutView,
      props: true,
      children: [
        {
            path: '',
            name: 'event-detail-view',
            component: EventDetailView,
            props: true
        },
        {
            path: 'register',
            name: 'event-register-view',
            component: EventRegisterView,
            props: true
        },
        {
            path: 'edit',
            name: 'event-edit-view',
            component: EventEditView,
            props: true
        }
      ]
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
