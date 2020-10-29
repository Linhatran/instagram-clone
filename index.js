const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.send('get/ login');
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.render('login');
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
