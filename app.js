const express = require('express');
// MySQLを使うためのコードを貼り付けてください
// const mysql = require('mysql');
const jquery = require('jquery');
const hogan = require("hogan.js");

const app = express();

app.use(express.static('public'));
// const dbconnection = require('./public/json/dbcon.json');
// // 定数connectionを定義して接続情報の書かれたコードを代入してください
// const connection = mysql.createConnection({
//   host: dbconnection.host,
//   user: dbconnection.user,
//   password: dbconnection.password,
//   database: dbconnection.database
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

// connection.query('SELECT COUNT(*) AS count FROM m_user', (err, rows) => {
//   if(err) throw err;
//   console.log('Data received from Db:\n');
//   console.log(rows);
// });

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

app.get('/header', (req, res) => {
  res.render('header.ejs');
});

app.listen(3000);
