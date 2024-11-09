import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.redirect('http://simp.ly/p/C9jSk5');
});

const posts = {
  "writing-the-skill-that-will-boost-your-career": "http://simp.ly/p/GFXrGP"
  "how-not-to-make-mistakes-twice": "http://simp.ly/p/SY1zz7"
  "event-loop-basics-this-time-you-understand": "http://simp.ly/p/MY9R3L"
  "what-is-valuable-for-you": "http://simp.ly/p/L6rwV0"
  "techocalypse-now-extreme-hypotheticals-for-developers": "http://simp.ly/p/cysN0B"
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
