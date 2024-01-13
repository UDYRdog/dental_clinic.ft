<template>
  <div>
    <h2>Ohodnoťte naše služby</h2>
    
    <div class="jako">
      <textarea v-model="newReviewText" rows="5" placeholder="Write your review"></textarea>
      <button @click="submitReview">Pridať hodnotetie</button>
    </div>

    <div class="review-container">
      <div v-if="reviews.length > 0">
        <h2>Naše hodnotenia:</h2>
        <ul>
          <li v-for="review in reviews" :key="review.id">{{ review.reviewText }}</li>
        </ul>
      </div>
      <div v-else>
        <p>Žiadne hodnotenia</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newReviewText: '',
      reviews: [],
    };
  },
  mounted() {
    
    this.fetchReviews();
  },
  methods: {
    fetchReviews() {
    
      axios.get('http://localhost:3000/reviews')
        .then(response => {
         
          this.reviews = response.data;
        })
        .catch(error => {
          console.error('Error fetching reviews:', error);
        });
    },
    submitReview() {
      
      axios.post('http://localhost:3000/reviews', { reviewText: this.newReviewText })
        .then(response => {
          this.newReviewText = '';
          this.fetchReviews();
        })
        .catch(error => {
          console.error('Error submitting review:', error);
        });
    },
  },
};
</script>





















<style scoped>
  h2 {
    margin-top: 3cm;
    text-align: center;
  }

  .jako {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }

  textarea {
    width: 50%;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid black;
    border-radius: 4px;
    resize: vertical;
  }

  button {
    background-color: #fff;
    color: #000;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #f2f2f2;
  }

  .review-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 25%;
  }
</style>
