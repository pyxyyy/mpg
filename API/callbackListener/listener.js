const express = require('express'); //node.js web application framework that provides a robust set of features to develop web applications
const bodyParser = require('body-parser'); //node.js middleware for handling JSON, Raw, Text and URL encoded form data.

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/event', (req, res) => {

  res.send('OK');

  const theData = req.body;
  console.log(theData);
});

const portToListenOn = 8888;

app.listen(portToListenOn, () => {
  console.log(`Listening for eSignLive notifications on port ${portToListenOn}. Started ${new Date().toString()}`);
});