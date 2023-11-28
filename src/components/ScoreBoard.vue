<template>
    
  <table>
      <tr>
          <th>Name</th>
          <th>CL2</th>
          <th>CL3-1</th>
          <th>CL3-2</th>
          <th>CL3-3</th>
          
          <th>CL4-1</th>
          <th>CL4-2</th>
          <th>CL4-3</th>

          <th>CL5-1</th>
          <th>CL5-2</th>
          <th>CL5-3</th>
          
          
          <th>CL6-1</th>
          <th>CL6-2</th>
          <th>CL6-3</th>
          
          <th>CL7-1</th>
          <th>CL7-2</th>
          <th>CL7-3</th>
        

      
      </tr>

      <tr :key="movie.name" v-for="(movie) in movies">
          <MovieComponent :movie="movie" />
      </tr>

  </table>

</template>

<script>
import MovieComponent from "./MovieComponent.vue"
  export default {
    name: 'ScoreBoard',
    props: {
    },
    data() {
        return {
          movies: [
            {name: 'Domenic Betters', cl2: 'X', cl31: 'X', cl32: 'X', cl33: 'X', cl41: 'X', cl42: 'X', cl43: 'X', cl51: 'X', cl52: 'X', cl53: 'X', cl61: 'X', cl62: 'X', cl63: 'X', cl71: 'X', cl72: 'X', cl73: 'X'},
            {name: 'Gavin Galovich', cl2: 'X', cl31: ' ', cl32: ' ', cl33: ' ', cl41: ' ', cl42: ' ', cl43: ' ', cl51: 'X', cl52: ' ', cl53: ' ', cl61: 'X', cl62: ' ', cl63: 'X', cl71: 'X', cl72: 'X', cl73: ' '},
            {name: 'Brand Bakowski', cl2: 'X', cl31: ' ', cl32: 'X', cl33: ' ', cl41: ' ', cl42: ' ', cl43: ' ', cl51: 'X', cl52: ' ', cl53: ' ', cl61: 'X', cl62: ' ', cl63: ' ', cl71: 'X', cl72: 'X', cl73: ' '},
            {name: 'Scott Rogers', cl2: 'X', cl31: ' ', cl32: ' ', cl33: ' ', cl41: ' ', cl42: ' ', cl43: ' ', cl51: ' ', cl52: ' ', cl53: ' ', cl61: ' ', cl62: ' ', cl63: ' ', cl71: ' ', cl72: ' ', cl73: ' '},
            {name: 'Aaron Bonifacio', cl2: 'X', cl31: ' ', cl32: ' ', cl33: ' ', cl41: ' ', cl42: ' ', cl43: ' ', cl51: ' ', cl52: ' ', cl53: ' ', cl61: ' ', cl62: ' ', cl63: ' ', cl71: ' ', cl72: ' ', cl73: ' '},
            {name: 'Carlo Finotti', cl2: ' ', cl31: ' ', cl32: ' ', cl33: ' ', cl41: ' ', cl42: ' ', cl43: ' ', cl51: ' ', cl52: ' ', cl53: ' ', cl61: ' ', cl62: ' ', cl63: ' ', cl71: ' ', cl72: ' ', cl73: ' '}
            // {temp: 'Aaron Bonifacio', cl2: 'X', cl31: ' ', cl32: ' ', cl33: ' ', cl41: ' ', cl42: ' ', cl43: ' ', cl51: ' ', cl52: ' ', cl53: ' ', cl61: ' ', cl62: ' ', cl63: ' ', cl71: ' ', cl72: ' ', cl73: ' '}
          ]
        };
    },
    components: { MovieComponent }
}
</script>

<style>

table {
        border: 5px solid #120f1c;
        border-spacing: 50px 0;
        border-collapse: collapse;
    }

    th {
        background-color: #120f1c;
        color: whitesmoke;
        margin: 10px 10px;
        padding: 10px 15px;
        border: 4px outset #1f1a30;
        box-sizing: border-box;
    }

    td {
        border-bottom: 1px solid black;
        padding: 10px 15px;
        color: black;
    }

    table tr:nth-child(odd) td {
        background: #a59fbd;
    }

    table tr:nth-child(even) td {
        background: #635f70;
    }

    .clickableHeader:active {
        background-color: #0A080F;
        border: 4px inset #151120;
    }

    .clickableHeader {
        cursor: pointer;
    }

</style>