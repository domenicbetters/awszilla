<template>
  <div class = "bady" >
    <router-link :to = "{name: 'MainMenu'}"><button>Back to Main Menu</button></router-link>
    <h2>Cloud Practitioner Flash Cards</h2>
    <div>
      <router-link :to="{name: 'AnalyticsFlash'}"> <button>AWS Analytics Flash Cards</button></router-link>
      <router-link :to="{name: 'ApplicationIntFlash'}"> <button>AWS Application Integration Flash Cards</button></router-link>
      <router-link :to="{name: 'CostManageFlash'}"> <button>AWS Cost Management Flash Cards</button></router-link>
      <router-link :to="{name: 'ComputeFlash'}"> <button>AWS Compute Services Flash Cards</button></router-link>
      <router-link :to="{name: 'ContainerFlash'}"> <button>AWS Container Services Flash Cards</button></router-link>
      <router-link :to="{name: 'DatabaseFlash'}"> <button>AWS Database Services Flash Cards</button></router-link>
      <router-link :to="{name: 'DevFlash'}"> <button>AWS Developer Tools Flash Cards</button></router-link>
      <router-link :to="{name: 'APIGameFlash'}"> <button>AWS API and Gamelift Flash Cards</button></router-link>
      <router-link :to="{name: 'IoTFlash'}"> <button>AWS Internet of Things Flash Cards</button></router-link>
      <router-link :to="{name: 'MachineLearningFlash'}"> <button>AWS Machine Learning Flash Cards</button></router-link>
      <router-link :to="{name: 'ManagementandGovFlash'}"> <button>AWS Management and Governance Flash Cards</button></router-link>
      <router-link :to="{name: 'MigrationFlash'}"> <button>AWS Migration and Transfer Flash Cards</button></router-link>
      <router-link :to="{name: 'NetworkDeliveryFlash'}"> <button>AWS Network Delivery Flash Cards</button></router-link>
      
    </div>
  </div>
  </template>


<script>
  export default {
    name: 'CPMenu'
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