import MainMenu from "@/views/MainMenu.vue"
import EC2Grid from "@/views/EC2Grid.vue"
import EC2Flash from "@/views/EC2Flash.vue"
import batchflash from "@/views/BatchFlash.vue"
import BeanstalkFlash from "@/views/BeanstalkFlash.vue"
import LambdaFlash from "@/views/LambdaFlash.vue"
import ServerlessARFlash from "@/views/ServerlessARFlash.vue"
import FargateFlash from "@/views/FargateFlash.vue"
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
        path: "/awszilla/ec2grid",
        name: "EC2Grid",
        component: EC2Grid
      },
      {
        path: "/awszilla/ec2flash",
        name: "EC2Flash",
        component: EC2Flash
      },
      {
        path: "/awszilla/batchflash",
        name: "batchflash",
        component: batchflash
      },
      {
        path: "/awszilla/beanstalkflash",
        name: "BeanstalkFlash",
        component: BeanstalkFlash
      },
      {
        path: "/awszilla/lambdaflash",
        name: "LambdaFlash",
        component: LambdaFlash
      },
      {
        path: "/awszilla/serverlessarflash",
        name: "ServerlessARFlash",
        component: ServerlessARFlash
      },
      {
        path: "/awszilla/fargateflash",
        name: "FargateFlash",
        component: FargateFlash
      }


      
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;