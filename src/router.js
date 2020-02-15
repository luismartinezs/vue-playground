import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue')
const CreditCardForm = () => import('./views/CreditCardForm.vue')

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
    }
  ]
})

export default router
