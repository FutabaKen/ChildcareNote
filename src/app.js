const express = require('express');
// MySQLを使うためのコードを貼り付けてください
const mysql = require('mysql');
const jquery = require('jquery');
const hogan = require("hogan.js");


const app = express();

app.use(express.static('public'));
// 定数connectionを定義して接続情報の書かれたコードを代入してください
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/menu', (req, res) => {
  res.render('menu.ejs');
});

app.get('/noteList', (req, res) => {
  res.render('noteList.ejs');
});

app.get('/noteDaily', (req, res) => {
  res.render('noteDaily.ejs');
});

app.listen(3000);
