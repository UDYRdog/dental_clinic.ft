<template>
  <div class="dentist-info-container">
    <h2>{{ dentistInfo.name }}</h2>
    <img :src="dentistInfo.image" :alt="dentistInfo.name" class="dentist-image" />
    <p>{{ dentistInfo.description }}</p>
    <button class="spatbutton" @click="$router.push('/')">&#8592</button>
  </div>
</template>

<script>
import dataDentist from '@/data.json';

export default {
  data() {
    return {
      dentistInfo: {},
      
    };
  },
  props: {
    name: String,
  },
  watch: {
    name(newName) {
      
      this.dentistInfo = dataDentist.find(function(dentist) {
  return dentist.name === newName;
});

    },
  },
  created() {
    
    this.dentistInfo = dataDentist.find(dentist => dentist.name === this.name);
  },
};
</script>









<style scoped>
.dentist-info-container {
  border-radius: 10px;
  border: 4px solid white;
  padding: 15px;
  width: 400px; /* Set a specific width */
  height: auto; /* Let the height adjust automatically to maintain aspect ratio */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

/* Additional styles for the image and other elements */
.dentist-image {
  max-width: 100%;
  border-radius: 5px;
}

.specialization {
  font-weight: bold;
}

p {
  margin-top: 10px;
}


.spatbutton{
  padding: 10px 15px;
  background-color: white;
  color: black; 
  font-size: 1.5em;
  border: none; 
  border-radius: 5px;
  cursor: pointer;}
</style>
