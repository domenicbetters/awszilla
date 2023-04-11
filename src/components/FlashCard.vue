<template>

<!-- <input type="checkbox" :id="instance.desc" class="hidden-check" /> -->
  <div class="flip-card" >  
    <!-- <label :for="instance.desc"> -->
      <div class="flip-card-inner">
      <div class="flip-card-front">
          <h4>{{ instance.desc }}</h4>
      </div>
      <div class="flip-card-back">
          <h4>{{instance.name}}</h4>
      </div>
      </div>
    <!-- </label> -->
  </div>
</template>

<script>
  export default {
      name: 'EC2Card',
      props: {
        instance: Object,
      },
      data() {
        return {
          // guvna: "flip-card"
        }
      }
  }
</script>

<style scoped>
.flip-card {
background-color: transparent;
width: 85%;
max-width: 200px;
height: 200px;
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
background-color: #bbb;
color: black;
}

/* Style the back side */
.flip-card-back {
background-color: rgb(10, 10, 10);
color: white;
display: flex;
justify-content: center;
align-items: center;
transform: rotateY(180deg);
}

.about-image {
object-fit: cover;
object-position: center;
width: 100%;
height: 100%;
}

@media (max-width: 991.5px) {
.flip-card {
  width: 100%;
  max-width: 400px;
}
}





</style>