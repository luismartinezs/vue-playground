import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue')
const CreditCardForm = () => import('./views/CreditCardForm.vue')
const Slots = () => import('./views/Slots.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/credit-card-form',
      name: 'CreditCardForm',
      component: CreditCardForm
    },
    {
      path: '/slots',
      name: 'Slots',
      component: Slots
    }
  ]
})

export default router
