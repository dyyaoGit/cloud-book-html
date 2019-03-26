import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index_back'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout'),
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: '云书'
          },
          component: () => import('@/views/index/index_back')
        }
      ]
    },
    {
      path: '/details/:id',
      name: 'details',
      meta: {
        title: '书籍详情'
      },
      component: () => import('@/views/details')
    }
  ]
})
