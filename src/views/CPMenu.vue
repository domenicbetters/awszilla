<template>
  <div class = "bady" >
    <router-link :to = "{name: 'MainMenu'}"><button>Back to Main Menu</button></router-link>
    <h2>Cloud Practitioner Flash Cards</h2>
    <div>
      <router-link :to="{name: 'AnalyticsFlash'}"> <button>AWS Analytics Cards</button></router-link>
      <router-link :to="{name: 'ApplicationIntFlash'}"> <button>AWS Application Integration</button></router-link>
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