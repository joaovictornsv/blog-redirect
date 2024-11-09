import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.redirect('https://app.simplenote.com/p/C9jSk5');
});

const posts = {
  "writing-the-skill-that-will-boost-your-career": "https://app.simplenote.com/p/GFXrGP"
}

Object.keys(posts).forEach(key => {
  app.get(`/${key}`, (req, res) => {
    res.redirect(posts[key]);
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
