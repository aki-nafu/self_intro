import Vue from 'vue'
import VueRouter from "vue-router"
import Page1 from "./components/page1.vue"
import Page2 from "./components/page2.vue"
import Page3 from "./components/page3.vue"

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 }
]

const router = new VueRouter({
    routes: routes
})

export default router