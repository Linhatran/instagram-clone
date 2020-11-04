const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const jsonContent = fs.readFileSync('login.json');
const users = JSON.parse(jsonContent);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const allUsernames = [];
  const allPasswords = [];

  for (let user of users) {
    allUsernames.push(user.username);
    allPasswords.push(user.password);
  }

  if (allUsernames.includes(username) && allPasswords.includes(password)) {
    res.render('page');
  } else {
    res.send('Incorrect username or password. Please try again!');
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
