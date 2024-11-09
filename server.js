import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.redirect('https://simp.ly/p/C9jSk5');
});

const posts = {
  "writing-the-skill-that-will-boost-your-career": "https://simp.ly/p/GFXrGP",
  "how-not-to-make-mistakes-twice": "https://simp.ly/p/SY1zz7",
  "event-loop-basics-this-time-you-understand": "https://simp.ly/p/MY9R3L",
  "what-is-valuable-for-you": "https://simp.ly/p/L6rwV0",
  "techocalypse-now-extreme-hypotheticals-for-developers": "https://simp.ly/p/cysN0B",
  "bun-node-js-a-load-testing-experiment": "https://docs.quave.cloud/blog/2024-03-04-bun-node-js-a-load-testing-experiment"
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
