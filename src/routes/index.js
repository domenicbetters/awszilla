import MainMenu from "@/views/MainMenu.vue"
import EC2Grid from "@/views/EC2Grid.vue"
import { createRouter, createWebHistory } from "vue-router";




const routes = [
    {
        path: '/',
        redirect: { name: 'MainMenu' }
      },
    {
      path: "/awszilla",
      name: "MainMenu",
      component: MainMenu
    },
    {
        path: "/awszilla/EC2Grid",
        name: "EC2Grid",
        component: EC2Grid
      },

      
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;