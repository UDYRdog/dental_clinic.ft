import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useReservationStore = defineStore('reservation', () => {
  const reservations = ref([]);

  function addReservation(date) {
    reservations.value.push(date);
  }

  function deleteReservation(index) {
    reservations.value.splice(index, 1);
  }



  return { reservations, addReservation, deleteReservation  };
});
