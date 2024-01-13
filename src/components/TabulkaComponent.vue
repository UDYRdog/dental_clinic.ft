<template>
    <div class="dental-table-container">
      <h2>Cenník zubných procedúr</h2>
      <table>
        <thead>
          <tr>
            <th class="table-header">Typická zubná procedúra</th>
            <th class="table-header">Cena (v EUR)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(price, procedure) in dentalPrices" :key="procedure">
            <td>{{ procedure }}</td>
            <td>{{ price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dentalPrices: {
        'Očistenie a kontrola': '20 - 40',
        'Plombovanie (kompozitná plomba)': '40 - 80',
        'Štandardná dentálna röntgenová vyšetrenie': '20 - 40',
        'Vytrhnutie zuba': '30 - 80',
        'Odstránenie zubného kameňa': '40 - 60',
        'Bielenie zubov': '150 - 300',
        'Fixná protéza (korunka)': '300 - 600',
        'Odbúranie zubného kazu': '30 - 70',
        'Orálna hygiena (profesionálne čistenie)': '40 - 80',
        'Ortodoncia (bez chirurgických zákrokov)': '1000 - 3000'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .dental-table-container {
    margin: 20px auto;
    max-width: 800px;
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse; 
  }
  
  .table-header {
    text-align: left; 
  }
   
  </style>
  