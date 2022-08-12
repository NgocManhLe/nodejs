//  require là cú pháp để đi thẳng vào node_modules để gọi ra thằng express
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;
// xử lý file static để hiển thị file ra html khi trỏ tới đường dẫn
// app.use(express.static(path.join(__dirname, 'resources/public')));
app.use(express.static(__dirname + '/public'));

// HTTP logger
app.use(morgan('combined'));
// Template engine
app.engine('hbs', engine(
  {
    extname: '.hbs'
  }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('path:',path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});