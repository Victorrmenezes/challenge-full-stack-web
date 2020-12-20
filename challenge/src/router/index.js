//This file uses navigation with Vue Router 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cadastro from '../views/Cadastro.vue'
import Lista from '../views/Lista.vue'
import Edicao from '../views/Edicao.vue'

Vue.use(VueRouter)

//Paths of the routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/lista',
    name: 'Lista',
    component: Lista
  },
  {
    path: '/edicao/:ra',
    name: 'Edição',
    component: Edicao
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
