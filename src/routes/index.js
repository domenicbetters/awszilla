import MainMenu from "@/views/MainMenu.vue"
import EC2Grid from "@/views/EC2Grid.vue"
import FlashCards from "@/views/FlashCards.vue"
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
        component: FlashCards,
        props: {title: "AWS EC2"}
      },
      {
        path: "/awszilla/batchflash",
        name: "BatchFlash",
        component: FlashCards,
        props: {title: "AWS Batch"}
      },
      {
        path: "/awszilla/beanstalkflash",
        name: "BeanstalkFlash",
        component: FlashCards,
        props: {title: "AWS Beanstalk"}
      },
      {
        path: "/awszilla/lambdaflash",
        name: "LambdaFlash",
        component: FlashCards,
        props: {title: "AWS Lambda"}
      },
      {
        path: "/awszilla/serverlessarflash",
        name: "ServerlessARFlash",
        component: FlashCards,
        props: {title: "AWS Serverless Application Repository"}
      },
      {
        path: "/awszilla/fargateflash",
        name: "FargateFlash",
        component: FlashCards,
        props: {title: "AWS Fargate"}
      },
      {
        path: "/awszilla/eksflash",
        name: "EKSFlash",
        component: FlashCards,
        props: {title: "AWS Elastic Kubernetes Service"}
      },
      {
        path: "/awszilla/ecsflash",
        name: "ECSFlash",
        component: FlashCards,
        props: {title: "AWS Elastic Container Service"}
      },
      {
        path: "/awszilla/ecrflash",
        name: "ECRFlash",
        component: FlashCards,
        props: {title: "Amazon Elastic Container Registry"}
      },


      
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;