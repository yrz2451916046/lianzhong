import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home/Home'
import Course from '@/components/Course/Course'
import Training from '@/components/Training/Training'
import Introduce from '@/components/Introduce/Introduce'
import Research from '@/components/Research/Research'
import About from '@/components/About/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: "/Course",
      name: 'Course',
      component: Course
    },
    {
      path: "/Training",
      name: 'Training',
      component: Training
    },
    {
      path: "/Introduce",
      name: 'Introduce',
      component: Introduce
    },
    {
      path: "/Research",
      name: 'Research',
      component: Research
    },
    {
      path: "/About",
      name: 'About',
      component: About
    }
  ]
})
