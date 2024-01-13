import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const reviews = [];

// GET endpoint to fetch existing reviews
app.get('/reviews', (req, res) => {
  res.status(200).send(reviews);
});

// POST endpoint to submit a new review
app.post('/reviews', (req, res) => {
  const { reviewText } = req.body;

  // Create a new review object and add it to the reviews array
  const newReview = { id: reviews.length + 1, reviewText };
  reviews.push(newReview);

  // Send a response with the newly created review
  res.status(201).send(newReview);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
