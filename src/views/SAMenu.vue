<template>
  <div class = "bady" >
    <router-link :to = "{name: 'MainMenu'}"><button>Back to Main Menu</button></router-link>
    <h2>Solutions Architect Flash Cards</h2>
    <div>
     <router-link :to="{name: 'EC2Grid'}"> <button>EC2 Instance Grid Flash Cards</button></router-link>
     <router-link :to="{name: 'EC2Flash'}"> <button>EC2 Flash Cards</button></router-link>
     <router-link :to="{name: 'BatchFlash'}"> <button>AWS Batch Flash Cards</button></router-link>
     <router-link :to="{name: 'BeanstalkFlash'}"> <button>AWS Beanstalk Flash Cards</button></router-link>
     <router-link :to="{name: 'LambdaFlash'}"> <button>AWS Lambda Flash Cards</button></router-link>
     <router-link :to="{name: 'ServerlessARFlash'}"> <button>AWS Serverless Application repo Flash Cards</button></router-link>
     <router-link :to="{name: 'FargateFlash'}"> <button>AWS Fargate Flash Cards</button></router-link>
     <router-link :to="{name: 'EKSFlash'}"> <button>AWS EKS Flash Cards</button></router-link>
     <router-link :to="{name: 'ECSFlash'}"> <button>Amazon ECS Flash Cards</button></router-link>
     <router-link :to="{name: 'ECRFlash'}"> <button>Amazon ECR Flash Cards</button></router-link>
     <router-link :to="{name: 'S3Flash'}"> <button>Amazon S3 Flash Cards</button></router-link>
     <router-link :to="{name: 'S3Grid'}"> <button>Amazon S3 Storage Class Flash Cards</button></router-link>
    </div>
  </div>
  </template>


<script>
  export default {
    name: 'SAMenu'
  }

</script>

<style>
button {
  margin:10px;
}

.imgbox {
  width: 90vw;
  box-shadow: 0 0 30px 20px rgba(142, 142, 252, 0.536);
  border: 2px solid white;
  margin-top: 50px;
}
img {
  width:100%;
  height: 100%;
  object-fit: cover;
}
.bady {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>