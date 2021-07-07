const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 300;

app.use(bodyParser.json());

app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
