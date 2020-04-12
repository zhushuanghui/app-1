import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import DetailPage from '../views/DetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/consultation',
        name: 'Consultation',
        component: () => import('../views/Consultation.vue')
      },
      {
        path: '/cases',
        name: 'Cases',
        component: () => import('../views/Cases.vue'),
        children:[
          {
            path: "/cases/detail/:id",
            component: DetailPage,
            name: 'detailPage',
            meta: {
              title: '详情'
            }
          }
        ]
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
      },
      // {
      //   path: '/detail',
      //   name: 'DetailPage',
      //   component: () => import('../views/DetailPage.vue')
      // }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:'hash'
})

export default router
