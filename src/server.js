
const express = require('express')
const app = express()
const port = 3000
const path = require('path'); // thư viện tìm kiếm đường dẫn trên 1 file trên máy tính của các bạn

//config template engine --------------------------------------
// app.set('views','./views/') // khai báo với experss
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs') // app.set('view engine', 'pug')

 //------------------------------------------------------------

 app.get('/', (req, res) => {
  // res.send('Hello World!', req, res)
  res.render('sample.ejs')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})