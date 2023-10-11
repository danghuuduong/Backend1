const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const configViewEngine = require("./configs/viewEngine");
const webRoutes = require("./router/web");
// ______________________________________________________________________________________________________
configViewEngine(app);

// khai báo router cho app
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Duong app listening on port ${port}`);
});
