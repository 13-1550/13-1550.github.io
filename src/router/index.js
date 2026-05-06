import { createRouter, createWebHashHistory } from 'vue-router'
import Garage from '../pages/Garage.vue'
import CarDetails from '../components/CarDetails.vue'


const routes = [
  { path: '/', component: Garage },
  { path: '/car/:id', component: CarDetails },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router