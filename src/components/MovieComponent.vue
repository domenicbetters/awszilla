<template>
    
  <td>{{movie.name}}</td>
  <td>{{movie.cl2}}</td>
  <td>{{movie.cl31}}</td>
  <td>{{movie.cl32}}</td>
  <td>{{movie.cl33}}</td>
  <td>{{movie.cl41}}</td>
  <td>{{movie.cl42}}</td>
  <td>{{movie.cl43}}</td>
  <td>{{movie.cl51}}</td>
  <td>{{movie.cl52}}</td>
  <td>{{movie.cl53}}</td>
  <td>{{movie.cl61}}</td>
  <td>{{movie.cl62}}</td>
  <td>{{movie.cl63}}</td>
  <td>{{movie.cl71}}</td>
  <td>{{movie.cl72}}</td>
  <td>{{movie.cl73}}</td>

</template>

<script>
  export default {
      name: 'MovieComponent',

      props: {
          movie: Object
      },

      data() {
          return {
            
          }
      },

      

     
  }
</script>

<style scope>



</style>