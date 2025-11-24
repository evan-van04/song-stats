const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 8080;

// 🔹 Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// 🔹 Root route: send index.html
app.get('/', (req, res) => {
  console.log('GET / -> serving index.html');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🔹 Health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 🔹 Stub Song Stats endpoint
app.get('/song-stats', async (req, res) => {
  const trackId = req.query.trackId;

  if (!trackId) {
    return res.status(400).json({ error: 'trackId query parameter is required' });
  }

  // TODO: replace this with real Spotify API call later
  res.json({
    trackId,
    tempo: 120,
    valence: 0.8,
    energy: 0.9,
    danceability: 0.75,
    acousticness: 0.1,
    moodLabel: 'happy, energetic'
  });
});

app.listen(PORT, () => {
  console.log(`Song Stats service listening on port ${PORT}`);
});
