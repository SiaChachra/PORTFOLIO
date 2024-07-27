const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
