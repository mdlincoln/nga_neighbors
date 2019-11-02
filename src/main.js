import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import AsyncComputed from 'vue-async-computed'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(AsyncComputed)

Vue.config.productionTip = false

import Home from "./components/Home"
import Work from "./components/Work"
import Grid from "./components/Grid"
import About from "./components/About"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/work/:id", name: "WorkView", component: Work, props: (route) => ({ id: route.params.id }) },
  { path: "/grid/:id", name: "GridView", component: Grid, props: (route) => ({ id: route.params.id }) }
]

export const base = "https://dh-web.hss.cmu.edu/"
export const subpath = "nga"

const router = new VueRouter({
  mode: 'history',
  base: subpath,
  routes: routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})


export const HTTP = axios.create({
  baseURL: base
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
