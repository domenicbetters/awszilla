<template>
   <router-link :to = "{name: 'CPMenu'}"><button>Back to Cloud Practitioner Menu</button></router-link>
   <h2>{{this.title}} Flash Cards</h2>
  <div class = "main-body">

    <FlashCard :key = "gpitem.name" v-for="(gpitem) in gpitems" :instance="gpitem"/>


  </div>
  </template>


<script>
import FlashCard from "@/components/FlashCard.vue"





  export default {
    name: `CPFlashCards`,
    components: {
      FlashCard,
    },
    data () {
      return {
        gpitems: "",
      }
    },
    props: {
     title: String
    },
    mounted() {
     import(`@/assets/CloudPrac/${this.$route.name}.json`).then((module) => {
      this.gpitems = module.default;})
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
  justify-content: space-evenly;
  flex-wrap: wrap;

}

</style>