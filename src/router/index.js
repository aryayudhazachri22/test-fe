import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import ListAbsensi from '../views/ListAbsensi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/list-absensi',
      name: 'list-absensi',
      component: ListAbsensi
    }
  ]
})

router.beforeEach((to) => {
  if(localStorage.getItem("access_token") && to.name === "login"){
    return { path: '/' }
  } else if(!localStorage.getItem("access_token") && to.name === "home"){
    return {path: '/login'}
  } else if(!localStorage.getItem("access_token") && to.name === "profile"){
    return {path: '/login'}
  } else if(!localStorage.getItem("access_token") && to.name === "list-absensi"){
    return {path: '/login'}
  } 
})

export default router
