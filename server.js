const express = require('express');
const session = require('express-session');
const cors = require('cors');
const data = require('./src/fakeData/resturants');
const app = express();
const port = 8000;

app.use(cors({ origin: process.env.ORIGIN || 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET || 'SESSION_SECRET',
  })
);

const resturants = data.resturants;
const resturantsDetail = data.resturantsDetail;
const history = [];
const users = [];

app.get('/resturants', (req, res) => {
  res.send(resturants);
});

app.get('/resturants/:id', (req, res) => {
  let id = req.params.id;
  res.send(resturantsDetail.data.find(el => el.id == id));
});

app.get('/history', (req, res) => {
  res.send(history);
});

app.post('/order', (req, res) => {
  const order = req.body;
  history.push(order);
  res.send(order);
});

app.get('/account', (req, res) => {
  res.send(req.session.user);
});

app.post('/sign-up', (req, res) => {
  const user = req.body;
  req.session.user = user;
  users.push(user);
  res.send(user);
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.send();
});

app.listen(port, () => {
  console.log(`Starting server on port: ${port}`);
});
