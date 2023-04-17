<template>
   <router-link :to = "{name: 'SAMenu'}"><button>Back to Solutions Architect Menu</button></router-link>
   <h2>S3 Storage Class Chart</h2>
  <div class = "main-body">
    <div class = "type-column">
      <h1>S3 Standard</h1>
    <FlashCard :key = "SSitem.name" v-for="(SSitem) in SSitems" :instance="SSitem"/>
    </div>
    <div class = "type-column">
      <h1>S3 Standard IA</h1>
    <FlashCard :key = "SIAitem.name" v-for="(SIAitem) in SIAitems" :instance="SIAitem"/>
    </div>
    <div class = "type-column">
      <h1>S3 Intelligent Tiering</h1>
    <FlashCard :key = "SINTitem.name" v-for="(SINTitem) in SINTitems" :instance="SINTitem"/>
    </div>
    <div class = "type-column">
      <h1>S3 One Zone-IA</h1>
    <FlashCard :key = "S1Zitem.name" v-for="(S1Zitem) in S1Zitems" :instance="S1Zitem"/>
    </div>
    <div class = "type-column">
      <h1>S3 Glacier</h1>
    <FlashCard :key = "SGitem.name" v-for="(SGitem) in SGitems" :instance="SGitem"/>
    </div>
    <div class = "type-column">
      <h1>S3 Glacier Deep Archive</h1>
    <FlashCard :key = "SGDAitem.name" v-for="(SGDAitem) in SGDAitems" :instance="SGDAitem"/>
    </div>
    <div class = "type-column">
      <h1>Reduced redundancy Storage</h1>
    <FlashCard :key = "RRSitem.name" v-for="(RRSitem) in RRSitems" :instance="RRSitem"/>
    </div>
   
  </div>
  </template>


<script>
import FlashCard from "@/components/FlashCard.vue"
  export default {
    name: 'S3Grid',
    components: {
      FlashCard,
    },
    data () {
      return {
        SSitems: [
          {name: 'Frequently Accessed Data', desc: 'Suitable For' },
          {name: '100%', desc: 'Durability' },
          {name: '99.99%', desc: 'Availability' },
          {name: '>= 3', desc: 'Availability Zones' },
          {name: 'None', desc: 'Minimum Storage Days' },
        ],
        SIAitems: [
          {name: 'Infrequently Accessed Data', desc: 'Suitable For' },
          {name: '100%', desc: 'Durability' },
          {name: '99.90%', desc: 'Availability' },
          {name: '>= 3', desc: 'Availability Zones' },
          {name: '30 days', desc: 'Minimum Storage Days' },
        ],
        SINTitems: [
          {name: 'Storage for unknown access patterns', desc: 'Suitable For' },
          {name: '100%', desc: 'Durability' },
          {name: '99.90%', desc: 'Availability' },
          {name: '>= 3', desc: 'Availability Zones' },
          {name: '30 days', desc: 'Minimum Storage Days' },
        ],
        S1Zitems: [
          {name: 'Non-critical Data', desc: 'Suitable For' },
          {name: '100%', desc: 'Durability' },
          {name: '99.50%', desc: 'Availability' },
          {name: '1', desc: 'Availability Zones' },
          {name: '30 days', desc: 'Minimum Storage Days' },
        ],
        SGitems: [
          {name: 'For long term Data Archival. e.g., 3 years – 5 years', desc: 'Suitable For' },
          {name: '100%', desc: 'Durability' },
          {name: '99.99%', desc: 'Availability' },
          {name: '>= 3', desc: 'Availability Zones' },
          {name: '90 days', desc: 'Minimum Storage Days' },
        ],
        SGDAitems: [
          {name: 'For long term Data Archival. e.g., 3 years – 5 years', desc: 'Suitable For' },
          {name: '100%', desc: 'Durability' },
          {name: '99.99%', desc: 'Availability' },
          {name: '>= 3', desc: 'Availability Zones' },
          {name: '180 days', desc: 'Minimum Storage Days' },
        ],
        RRSitems: [
          {name: 'Frequently accessed for non-critical data but not recommended', desc: 'Suitable For' },
          {name: '99%', desc: 'Durability' },
          {name: '99.99%', desc: 'Availability' },
          {name: '>= 3', desc: 'Availability Zones' },
          {name: 'N/A', desc: 'Minimum Storage Days' },
        ],
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
  Margin: 10px;
}

.main-body {
  display: flex;
  justify-content: space-evenly;

}

@media (max-width: 1342.5px) {
  .main-body {
    flex-direction:column ;
    align-items: center;
    width: 100vw;
  }
  .type-column {
    width: 90% !important;
    max-width: 90% !important;
  }
}

</style>