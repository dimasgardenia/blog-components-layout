import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import contentDetail from '@/components/contentDetail'
import postarticle from '@/components/postarticle'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/post',
      component: postarticle
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      children: [
        {
          path: ':id',
          component: contentDetail,
          props: true
        }
      ]
    }
  ]
})
