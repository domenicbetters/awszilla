<template>
    <h1>AWSZILLA</h1>
    <div>
     <router-link :to="{name: 'EC2Grid'}"> <button>EC2 Instance Grid Flash Cards</button></router-link>
     <router-link :to="{name: 'EC2Flash'}"> <button>EC2 Flash Cards</button></router-link>
     <router-link :to="{name: 'batchflash'}"> <button>AWS Batch Flash Cards</button></router-link>
     <router-link :to="{name: 'BeanstalkFlash'}"> <button>AWS Beanstalk Flash Cards</button></router-link>
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
</style>