import Vue from 'vue'
import Router from 'vue-router'
import page1 from 'src/components/page1.vue'
import page2 from 'src/components/page2.vue'
import page3 from 'src/components/page3.vue'

Vue.use(Router)
//使ってないよ

export default new Router({
  routes: [
    {
      path: '/',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '/page3',
      component: page3
    }
  ]
})