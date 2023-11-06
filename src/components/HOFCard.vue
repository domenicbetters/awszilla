<template>

  <div class="flip-card" >  
      <div class="flip-card-inner">
      <div class="flip-card-front">
          <img :src="hof.img" />
      </div>
      <div class="flip-card-back">
          <h2>{{hof.name}}</h2>
          <h4>Inducted into the Hall of Fame on:</h4>
          <h3>{{hof.date}}</h3>
      </div>
      </div>
  </div>
</template>

<script>
  export default {
      name: 'HOFCard',
      props: {
        hof: Object,
      },
      data() {
        return {
        }
      }
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');
.flip-card {
background-color: transparent;
width: 85%;
max-width: 200px;
height: 300px;
perspective: 1000px; /* Remove this if you don't want the 3D effect */
margin: 15px;
border-radius: 15px;
border: 2px solid black;
box-shadow: 5px 5px 10px 1px;
overflow: hidden;
}




/* This container is needed to position the front and back side */
.flip-card-inner {
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.8s;
transform-style: preserve-3d;

}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:active .flip-card-inner {
transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden; /* Safari */
backface-visibility: hidden;
}



/* Style the front side (fallback if image is missing) */
.flip-card-front {
background-image: url('../assets/OIP.jpg');
color: black;
display:flex;
align-items: center;
justify-content: center;
}

/* Style the back side */
.flip-card-back {
background-color: rgb(10, 10, 10);
color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
transform: rotateY(180deg);
font-family: 'Bungee Inline';
}

.about-image {
object-fit: cover;
object-position: center;
width: 100%;
height: 100%;
}

@media (max-width: 991.5px) {
.flip-card {
  width: 985;
  max-width: 400px;
}

.flip-card:hover .flip-card-inner {
transform: rotateY(180deg);
}
}

img {
  width:90%;
  height: 90%;
  border: 5px inset rgba(33, 33, 33, 0.666);
  border-radius: 10px;
}





</style>