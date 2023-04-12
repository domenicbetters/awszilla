<template>
   <router-link :to = "{name: 'MainMenu'}"><button>Back to Main Menu</button></router-link>
   <h1>AWS Lambda Flash Cards</h1>
  <div class = "main-body">

    <FlashCard :key = "gpitem.name" v-for="(gpitem) in gpitems" :instance="gpitem"/>


  </div>
  </template>


<script>
import FlashCard from "@/components/FlashCard.vue"
import lambdaflash from "@/assets/LambdaFlash.json"
  export default {
    name: 'LambdaFlash',
    components: {
      FlashCard,
    },
    data () {
      return {
        gpitems: lambdaflash
   
      }
    }
  }

</script>

<style>

h1 {
  padding: 5px;
}

.type-column {
  border: 7px inset rgb(197, 186, 171);
  width: 18vw;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: rgb(235, 222, 205);
}

.main-body {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

</style>