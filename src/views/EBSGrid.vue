<template>
   <router-link :to = "{name: 'SAMenu'}"><button>Back to Solutions Architect Menu</button></router-link>
   <h2>EBS storage type Chart</h2>
  <div class = "main-body">
    <div class = "type-column">
      <h1>General Purpose SSD</h1>
    <FlashCard :key = "GPitem.name" v-for="(GPitem) in GPitems" :instance="GPitem"/>
    </div>
    <div class = "type-column">
      <h1>Provisioned IOPS SSD</h1>
    <FlashCard :key = "PIitem.name" v-for="(PIitem) in PIitems" :instance="PIitem"/>
    </div>
    <div class = "type-column">
      <h1>Throughput Optimized HDD</h1>
    <FlashCard :key = "TOitem.name" v-for="(TOitem) in TOitems" :instance="TOitem"/>
    </div>
    <div class = "type-column">
      <h1>Cold HDD</h1>
    <FlashCard :key = "CHitem.name" v-for="(CHitem) in CHitems" :instance="CHitem"/>
    </div>
   
   
  </div>
  </template>


<script>
import FlashCard from "@/components/FlashCard.vue"
  export default {
    name: 'EBSGrid',
    components: {
      FlashCard,
    },
    data () {
      return {
        GPitems: [
          {name: 'gp2', desc: 'Abbreviation' },
          {name: '1GB - 16TB, IOPS: 3000 to 20000 Max/Volume', desc: 'Details' },
          {name: 'Boot volumes, dev/test, low-latency apps, virtual desktops', desc: 'Best used for' },
        ],
        PIitems: [
          {name: 'io1', desc: 'Abbreviation' },
          {name: 'low latency or high throughput, consistent IOPS (16000+ IOPS), transactional workloads', desc: 'Details' },
          {name: 'MongoDB / NoSQL, mySQL / RDS, latency critical apps', desc: 'Best used for' },
        ],
        TOitems: [
          {name: 'st1', desc: 'Abbreviation' },
          {name: 'low cost - frequently accessed, throughput-intensive & large-sequential O/I --500 MB/s', desc: 'Details' },
          {name: 'stream processing, big data processing, data warehouse', desc: 'Best used for' },
        ],
        CHitems: [
          {name: 'sc1', desc: 'Abbreviation' },
          {name: 'lowest cost - less frequently accessed data, throughput: 250 MiB/s', desc: 'Details' },
          {name: 'Colder Data Requires fewer scans per day.', desc: 'Best used for' },
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