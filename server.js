const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 8080;

// health endpoint (good for IBM health checks & registry)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// very basic Song Stats endpoint (no Spotify yet, just a stub)
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
