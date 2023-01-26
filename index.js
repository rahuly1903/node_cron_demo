const express = require("express");
const app = express();
const router = require("./Routers/Routers");
const bodyParser = require("body-parser");

require("dotenv").config();

const port = process.env.PORT || 3001;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// router config
app.use("/", router);

app.listen(port, (err) => {
  console.log(`Server is running on port ${port}`);
});
