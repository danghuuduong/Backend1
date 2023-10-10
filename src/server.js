const express = require("express");
const app = express();
const path = require("path"); // thư viện tìm kiếm đường dẫn trên 1 file trên máy tính của các bạn
require("dotenv").config();
const port = process.env.PORT;
const configViewEngine = require("./configs/viewEngine");
const webRoutes = require("./router/router");

configViewEngine(app);
app.use(webRoutes);

app.listen(port, () => {
  console.log(`Duong app listening on port ${port}`);
});
