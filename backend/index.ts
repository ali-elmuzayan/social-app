import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Social App API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;