<template>
  <div class = "bady" >
    <h2>Main Menu</h2>
    <div>
     <router-link :to="{name: 'SAMenu'}"> <button>Solutions Architect Flash Cards</button></router-link>
     <a href="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fdoom.jsdos?anonymous=1%27)"><button>DOOM</button></a> 
    </div>
  </div>
  </template>


<script>
  export default {
    name: 'MainMenu'
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