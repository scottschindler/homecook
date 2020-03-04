const express = require('express')
const request = require('request');

const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

server.get('/', (req, res) => {
    request(
      { url: 'https://api.edamam.com/search?q=chicken&app_id=90c3baa8&app_key=e6e29c33582a6cabfe56dbf6d4528477' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
});


const PORT = process.env.PORT || 5859;
server.listen(PORT, () => console.log(`listening on ${PORT}`));