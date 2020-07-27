const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

const list = {
  item1: 'Maça',
  item2: 'banana',
  item3: 'morango',
};

const list2 = {
  item1: 'martelo',
  item2: 'chave de fenda',
  // item3: 'marreta',
};

const list3 = {
  item1: 'ouro',
  item2: 'prata',
  item3: 'bronze',
};

const arr = [list, list2, list3];

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about', { listas: arr });
});

app.get('/about/contact', (req, res) => {
  const name = req.query.user;
  res.render('contact', { name });
});

// app.get('/about/:user', (request, res) => {
//   const name = request.params.user;
//   res.render('about', { name });
// });


app.get('/about/:banana', (request, res) => {
  const { banana } = request.params;
  res.render('about', { banana });
});

app.listen(3000);
