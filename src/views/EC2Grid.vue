<template>
   <router-link :to = "{name: 'SAMenu'}"><button>Back to Main Menu</button></router-link>
   <h2>Catagories of EC2 Instance Classes</h2>
  <div class = "main-body">
    <div class = "type-column">
      <h1>General Purpose</h1>
    <EC2Card :key = "gpitem.name" v-for="(gpitem) in gpitems" :instance="gpitem"/>
    </div>
    <div class = "type-column">
      <h1>Compute Optimized</h1>
    <EC2Card :key = "CPitem.name" v-for="(CPitem) in CPitems" :instance="CPitem"/>
    </div>
    <div class = "type-column">
      <h1>Memory Optimized</h1>
    <EC2Card :key = "MOitem.name" v-for="(MOitem) in MOitems" :instance="MOitem"/>
    </div>
    <div class = "type-column">
      <h1>Accelerated Computing</h1>
    <EC2Card :key = "ACitem.name" v-for="(ACitem) in ACitems" :instance="ACitem"/>
    </div>
    <div class = "type-column">
      <h1>Storage Optimized</h1>
    <EC2Card :key = "SOitem.name" v-for="(SOitem) in SOitems" :instance="SOitem"/>
    </div>
  </div>
  </template>


<script>
import EC2Card from "@/components/EC2Card.vue"
  export default {
    name: 'MainMenu',
    components: {
      EC2Card,
    },
    data () {
      return {
        gpitems: [
          {name: 'A1', desc: 'Suited for scale-out and Arm based workloads' },
          {name: 'T2', desc: 'Small web servers and DBs' },
          {name: 'M4', desc: 'Balance of compute, memory, and network resources' },
        ],
        CPitems: [
          {name: 'C4', desc: 'Optimized for compute-intensive workloads' },
          {name: 'C5', desc: 'Optimized for compute-intensive workloads with choice of processors' },
          {name: 'C5n', desc: 'High compute applications (including HPC workloads)' },
        ],
        MOitems: [
          {name: 'R4', desc: 'Optimized for memory-intensive application' },
          {name: 'X1', desc: 'Optimized for large-scale, enterprise-class and in-memory applications' },
          {name: 'z1d', desc: 'Offer both high compute capacity and high memory footprint' },
        ],
        ACitems: [
          {name: 'P2', desc: 'Intended for general-purpose GPU compute applications' },
          {name: 'G3', desc: 'Optimized for graphics-intensive applications' },
          {name: 'F1', desc: 'Customizable hardware acceleration with field programmable gate arrays' },
        ],
        SOitems: [
          {name: 'H1', desc: 'Up to 16 TB of HDD-based local storage, deliver high disk throughput' },
          {name: 'I3', desc: 'Non-volatile memory express SSD-backed storage optimized for low latency, very high random I/O performance' },
          {name: 'D2', desc: 'Up to 48 TB of HDD-based local storage, deliver high disk throughput' },
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
}

.main-body {
  display: flex;
  justify-content: space-between;

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