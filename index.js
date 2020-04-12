require("dotenv").config();
const express = require("express");
const request = require("request");

const server = express();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

server.get("/", (req, res) => {
  request(
    {
      url: `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return (
          res
            .status(500)
            // @hey! error can be undefined here, need to null check it to prevent crash ("TypeError, cannot read message of undefined")
            .json({ type: "error", message: error && error.message })
        );
      }

      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 5859;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
