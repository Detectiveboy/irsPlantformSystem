import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Manage.vue')
  },
  {
    path: '/serve',
    name: 'Serve',
    component: () => import('../views/Serve.vue')
  },
  {
    path: '/study',
    name: 'Study',
    component: () => import('../views/Study.vue')
  },
  {
    path: '/irs',
    name: 'Irs',
    component: () => import('../views/Irs.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/UserManage.vue')
      },
      {
        path: 'systemuserm',
        component: () => import('../components/SystemUserM.vue')
      },
      {
        path: 'infopublishm',
        component: () => import('../components/InfoPublishM.vue')
      },
      {
        path: 'tousum',
        component: () => import('../components/TousuM.vue')
      },
      {
        path: 'zixunm',
        component: () => import('../components/ZixunM.vue')
      },
      {
        path: 'easyknowm',
        component: () => import('../components/EasyKnowM.vue')
      },
      {
        path: 'yuyuething',
        component: () => import('../components/YuyueThing.vue')
      },
      {
        path: 'yuyueserve',
        component: () => import('../components/YuyueServe.vue')
      },
      {
        path: 'querym',
        component: () => import('../components/QueryM.vue')
      },
    ]
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
