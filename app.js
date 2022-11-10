const express = require("express");
const app = express();
const port = 3000;
const m1 = require('./modules/m1')

// app.get("/", function (req, res) {
//   res.send("Hello World!" + m1.sum1(1 , 2));
// });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;

app.use("/", router);