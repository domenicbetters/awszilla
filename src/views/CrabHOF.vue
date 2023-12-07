<template>
  <div class = "darken">
    <h2 class = "title">CRAB LAB HALL OF FAME</h2>
    <div class="bady">
      <HOFCard :key = "SSitem.name" v-for="(SSitem) in SSitems" :hof="SSitem"/>
      
    </div>

    <h2 class = "title2">CRAB CHALLENGE SCORE BOARD</h2>
    <div class="bady">
      <ScoreBoard/>

      
      
    </div>
  </div>
  </template>


<script>
import HOFCard from "@/components/HOFCard.vue"
import ScoreBoard from "@/components/ScoreBoard.vue"
  export default {
    name: 'CrabHOF',
    components: {
    HOFCard,
    ScoreBoard
},
    data () {
      return {
        SSitems: [
          {name: 'Domenic Betters', date: '03-01-2023', img: require('@/assets/dom.jpg')  }
        ]
      }
    }
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');
body{
  background-image: url('https://wallpapercave.com/wp/wp4115208.jpg');
  background-repeat: repeat;
  background-size: cover;
}
.darken{
  background-color: rgba(0, 0, 0, 0.658);
  width:100vw;
  height:100vh;
}
button {
  margin:10px;
}

.imgbox {
  display: none;
}
h1 {
  display: none;
}
.title{
   font-family: 'Bungee Inline';
   font-size: 5em;
   color: whitesmoke
}

.title2{
   font-family: 'Bungee Inline';
   font-size: 3em;
   color: whitesmoke
}
.bady {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>