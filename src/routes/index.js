import MainMenu from "@/views/MainMenu.vue"
import SAMenu from "@/views/SAMenu.vue"
import CPMenu from "@/views/CPMenu.vue"
import EC2Grid from "@/views/EC2Grid.vue"
import SAFlashCards from "@/views/SAFlashCards.vue"
import CPFlashCards from "@/views/CPFlashCards.vue"
import S3Grid from "@/views/S3Grid.vue"
import EBSGrid from "@/views/EBSGrid.vue"
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
      path: "/awszilla/solutionsarchitect",
      name: "SAMenu",
      component: SAMenu
    },
    {
      path: "/awszilla/cloudpractitioner",
      name: "CPMenu",
      component: CPMenu
    },
    {
        path: "/awszilla/solutionsarchitect/ec2grid",
        name: "EC2Grid",
        component: EC2Grid
      },
      {
        path: "/awszilla/solutionsarchitect/ec2flash",
        name: "EC2Flash",
        component: SAFlashCards,
        props: {title: "AWS EC2"}
      },
      {
        path: "/awszilla/solutionsarchitect/batchflash",
        name: "BatchFlash",
        component: SAFlashCards,
        props: {title: "AWS Batch"}
      },
      {
        path: "/awszilla/solutionsarchitect/beanstalkflash",
        name: "BeanstalkFlash",
        component: SAFlashCards,
        props: {title: "AWS Beanstalk"}
      },
      {
        path: "/awszilla/solutionsarchitect/lambdaflash",
        name: "LambdaFlash",
        component: SAFlashCards,
        props: {title: "AWS Lambda"}
      },
      {
        path: "/awszilla/solutionsarchitect/serverlessarflash",
        name: "ServerlessARFlash",
        component: SAFlashCards,
        props: {title: "AWS Serverless Application Repository"}
      },
      {
        path: "/awszilla/solutionsarchitect/fargateflash",
        name: "FargateFlash",
        component: SAFlashCards,
        props: {title: "AWS Fargate"}
      },
      {
        path: "/awszilla/solutionsarchitect/eksflash",
        name: "EKSFlash",
        component: SAFlashCards,
        props: {title: "AWS Elastic Kubernetes Service"}
      },
      {
        path: "/awszilla/solutionsarchitect/ecsflash",
        name: "ECSFlash",
        component: SAFlashCards,
        props: {title: "AWS Elastic Container Service"}
      },
      {
        path: "/awszilla/solutionsarchitect/efsflash",
        name: "EFSFlash",
        component: SAFlashCards,
        props: {title: "AWS Elastic File Storage"}
      },
      {
        path: "/awszilla/solutionsarchitect/ecrflash",
        name: "ECRFlash",
        component: SAFlashCards,
        props: {title: "Amazon Elastic Container Registry"}
      },
      {
        path: "/awszilla/solutionsarchitect/s3grid",
        name: "S3Grid",
        component: S3Grid
      },
      {
        path: "/awszilla/solutionsarchitect/ebsgrid",
        name: "EBSGrid",
        component: EBSGrid
      },
      {
        path: "/awszilla/solutionsarchitect/s3flash",
        name: "S3Flash",
        component: SAFlashCards,
        props: {title: "Amazon S3"}
      },
      {
        path: "/awszilla/solutionsarchitect/fsxwsflash",
        name: "FSXWSFlash",
        component: SAFlashCards,
        props: {title: "Amazon FSx for Windows File Server"}
      },
      {
        path: "/awszilla/solutionsarchitect/fsxlsflash",
        name: "FXSLSFlash",
        component: SAFlashCards,
        props: {title: "Amazon FSx for Lustre"}
      },
      {
        path: "/awszilla/solutionsarchitect/ebsflash",
        name: "EBSFlash",
        component: SAFlashCards,
        props: {title: "AWS Elastic Block Storage"}
      },
      {
        path: "/awszilla/cloudpractitioner/analyticsflash",
        name: "AnalyticsFlash",
        component: CPFlashCards,
        props: {title: "AWS Analytics"}
      },
      {
        path: "/awszilla/cloudpractitioner/applicationintflash",
        name: "ApplicationIntFlash",
        component: CPFlashCards,
        props: {title: "AWS Application Integration"}
      },
      {
        path: "/awszilla/cloudpractitioner/costmanageflash",
        name: "CostManageFlash",
        component: CPFlashCards,
        props: {title: "AWS Cost Management"}
      },
      {
        path: "/awszilla/cloudpractitioner/computeflash",
        name: "ComputeFlash",
        component: CPFlashCards,
        props: {title: "AWS Compute Services"}
      },
      {
        path: "/awszilla/cloudpractitioner/containerflash",
        name: "ContainerFlash",
        component: CPFlashCards,
        props: {title: "AWS Container Services"}
      },
      {
        path: "/awszilla/cloudpractitioner/databaseflash",
        name: "DatabaseFlash",
        component: CPFlashCards,
        props: {title: "AWS Database Services"}
      },
      {
        path: "/awszilla/cloudpractitioner/devflash",
        name: "DevFlash",
        component: CPFlashCards,
        props: {title: "AWS Developer Tools"}
      },
      {
        path: "/awszilla/cloudpractitioner/apigameflash",
        name: "APIGameFlash",
        component: CPFlashCards,
        props: {title: "AWS API and Gamelift"}
      },



      
      
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;