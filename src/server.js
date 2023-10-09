
const express = require('express')
const app = express()
const path = require('path'); // thư viện tìm kiếm đường dẫn trên 1 file trên máy tính của các bạn
require('dotenv').config();
const port = process.env.PORT 


//config template engine --------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')  // app.set('view engine', 'pug')


//config static file-------------------------------------------
app.use(express.static(path.join(__dirname, 'public'))) // sài static file , khai báo nó truy cập vào 
//public sẵn, chỉ cần sài img nó tự hiểu vào đây và /images là được

 app.get('/', (req, res) => {
  res.render('sample.ejs')
})


app.listen(port, () => {
  console.log(`Duong app listening on port ${port}`)
})