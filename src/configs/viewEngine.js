const path = require("path"); // thư viện tìm kiếm đường dẫn trên 1 file trên máy tính của các bạn
const express = require("express");

//config template engine and public--------------------------------------
const configViewEngine = (app) => {
  // app tức là express
  // const currentDirectory = __dirname;
  // const parentDirectory = path.dirname(currentDirectory);

  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs"); // app.set('view engine', 'pug')

  //config static file-------------------------------------------
  app.use(express.static(path.join("./src", "public")));
  // sài static file , khai báo nó truy cập vào
  //public sẵn, chỉ cần sài img nó tự hiểu vào đây và /images là được
};

module.exports = configViewEngine;
