<template>
  <div class = "bady" >
    <h1>AWSZILLA</h1>
    <div>
     <router-link :to="{name: 'EC2Grid'}"> <button>EC2 Instance Grid Flash Cards</button></router-link>
     <router-link :to="{name: 'EC2Flash'}"> <button>EC2 Flash Cards</button></router-link>
     <router-link :to="{name: 'batchflash'}"> <button>AWS Batch Flash Cards</button></router-link>
     <router-link :to="{name: 'BeanstalkFlash'}"> <button>AWS Beanstalk Flash Cards</button></router-link>
     <a href="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fdoom.jsdos?anonymous=1%27)"><button>DOOM</button></a> 
     <router-link :to="{name: 'LambdaFlash'}"> <button>AWS Lambda Flash Cards</button></router-link>
     <router-link :to="{name: 'ServerlessARFlash'}"> <button>AWS Serverless Application repo Flash Cards</button></router-link>
     <router-link :to="{name: 'FargateFlash'}"> <button>AWS Fargate Flash Cards</button></router-link>
    </div>
    <div class="imgbox"><img src="@/assets/godzilla.jpg" /></div>
  </div>
  </template>


<script>
  export default {
    name: 'MainMenu',
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