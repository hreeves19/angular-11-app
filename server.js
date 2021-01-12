const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require("helmet");
const port = 3000;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.set('json spaces', 2);

app.get('/api', (req, res) => {
  res.send({msg: 'Express API is running!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});