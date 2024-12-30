const express = require('express');
const cors = require('cors');
const path = require('path');



const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));
const xRate = require('express-rate-limit');
const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  return forwarded ? forwarded.split(',')[0].trim() : req.connection.remoteAddress;
};

const xRater = xRate({
  windowMs: 30000,
  max: 6,
  keyGenerator: (req) => getClientIp(req),
  handler: (req, res) => {
    res.status(403).send(null);
  },
});
app.set('trust proxy', true);
app.use(xRater);
app.set("json spaces", 2);
// Middleware CORS
app.use(cors());

// Import AI
require('./ai/Blackbox')(app);
require('./ai/LuminAI')(app);
require('./ai/Thinkai')(app);

// Import Berita
require('./berita/liputan6')(app);

// Import Search
require('./search/goodread')(app);
require('./search/ypia')(app);
require('./search/rumaysho')(app);
require('./search/surah')(app);
require('./search/jadwalsholat')(app);



// Endpoint untuk halaman HTML utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle 404 error
app.use((req, res, next) => {
  res.status(404).send("Üzgünüm hata oluştu!");
});

// Handle error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
