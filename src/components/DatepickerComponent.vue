<template>
  <div class="center-container">
    <div class="reservation-container">
      <p class="datetimepickertext">Objednať sa na prehliadku:</p>
      <input class="reservation-cal" type="datetime-local" id="datetimepicker" v-model="selectedDateTime" @input="updateDateTime">
    </div>
    <div class="reservation-container1">
      <p class="selected-info"> {{ formattedDateTime }}</p>
      <button @click="saveReservation" class="reservation-btn">Objednať sa</button>
    </div>
  </div>

  <div class="dateslist">
    <div v-for="(reservation, index) in reservations" :key="index" class="date-item">
      <p class = "bold1">{{ reservation }}</p>
      <button @click="deleteReservation(index)" class="delete-btn">Vymazať</button>
    </div>
  </div>
</template>

<script>
import { useReservationStore } from '@/stores/counter';

export default {
  data() {
    return {
      selectedDateTime: null,
    };
  },
  computed: {
    formattedDateTime() {
      if (!this.selectedDateTime) return "Dátum a čas";

      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return new Date(this.selectedDateTime).toLocaleDateString('sk-SK', options);
    },
    reservations() {
      return useReservationStore().reservations;
    },
  },
  methods: {
    saveReservation() {
      if (this.selectedDateTime) {
        useReservationStore().addReservation(this.formattedDateTime);
        this.selectedDateTime = null;
      }
    },
    deleteReservation(index) {
      useReservationStore().deleteReservation(index);
    },
  },
};
</script>





















<style scoped>
.center-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50vh;
  width: 100%;
  max-width: 800px; /* Adjust the max-width as needed */
  margin: 0 auto; /* Center the container horizontally */
}

.reservation-container,
.reservation-container1 {
  max-width: 300px;
  text-align: center;
  height: 100%; /* Set a fixed height for both containers */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.selected-info {
  margin: 15px 0;
  font-weight: bold;
}

.reservation-btn {
  background-color: white;
  padding: 10px 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reservation-cal {
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reservation-btn:hover {
  background-color: whitesmoke;
}

.datetimepickertext {
  font-weight: bold;
}
.dateslist {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date-item {
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  background-color: lightblue;
  color: black;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 3cm;
}

.delete-btn:hover {
  background-color:lightskyblue;
}

.bold1{
  font-weight: bold;
}
</style>
