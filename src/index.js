const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add", (req, res) => {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  if (typeof num1 == "string" && typeof num2 == "string") {
    return res.json({
      status: "failure",
      message: "Invalid data types",
    });
  }
  if (num1 + num2 > 1000000) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  var result = num1 + num2;
  return res.json({
    status: "success",
    message: "the sum of given two number",
    sum: result,
  });
});

app.post("/sub", (req, res) => {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  if (typeof num1 == "string" && typeof num2 == "string") {
    return res.json({
      status: "failure",
      message: "Invalid data types",
    });
  }
  if (num1 - num2 > 1000000) {
    return res.json({
      status: "error",
      message: "Underflow",
    });
  }
  var result = num1 - num2;
  return res.json({
    status: "success",
    message: "the difference of given two number",
    sum: result,
  });
});

app.post("/multiply", (req, res) => {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  if (typeof num1 == "string" && typeof num2 == "string") {
    return res.json({
      status: "failure",
      message: "Invalid data types",
    });
  }
  if (num1 * num2 > 1000000) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  var reslt = num1 * num2;
  return res.json({
    status: "success",
    message: "The product of given numbers",
    result: reslt,
  });
});

app.post("/division", (req, res) => {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  if (num2 == 0) {
    return res.json({
      status: "error",
      message: "Cannot divide by zero",
    });
  }
  var reslt = num1 / num2;
  return res.json({
    status: "success",
    message: "The division of given numbers",
    result: reslt,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
