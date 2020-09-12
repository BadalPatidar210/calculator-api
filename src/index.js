const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/add", (req, res) => {
  const x = req.body.x;
  const y = req.body.y;

  if (typeof x === "string" || typeof y === "string") {
    res.json({ status: "failure", message: "invalid data types" });
  } else if (x > 1000000) {
    res.json({ status: "error", message: "Overflow" });
  } else if (y > 1000000) {
    res.json({ status: "error", message: "Overflow" });
  }
  //const z=x+y;
  res.json({
    status: "success",
    message: "the sum of given two number",
    sum: x + y,
  });
});

app.post("/sub", (req, res) => {
  const x = req.body.x;
  const y = req.body.y;

  if (typeof x === "string" || typeof y === "string") {
    res.json({ status: "failure", message: "invalid data types" });
  } else if (x < 1000000) {
    res.json({ status: "error", message: "Underflow" });
  } else if (y < 1000000) {
    res.json({ status: "error", message: "Underflow" });
  }
  //const z=x+y;
  res.json({
    status: "success",
    message: "the subtraction of given two number",
    sub: x - y,
  });
});

app.post("/multiply", (req, res) => {
  const x = req.body.x;
  const y = req.body.y;

  if (typeof x === "string" || typeof y === "string") {
    res.json({ status: "failure", message: "invalid data types" });
  } else if (x > 1000000) {
    res.json({ status: "error", message: "Overflow" });
  } else if (y > 1000000) {
    res.json({ status: "error", message: "Overflow" });
  }
  //const z=x+y;
  res.json({
    status: "success",
    message: "the multiplication of given two number",
    sum: x * y,
  });
});

app.post("/divide", (req, res) => {
  const x = req.body.x;
  const y = req.body.y;
  if (typeof x === "string" || typeof y === "string") {
    res.json({ status: "failure", message: "invalid data types" });
  } else if (y == 0) {
    res.send("Cannot divide by 0");
  }
  res.send({
    status: "success",
    message: "the division of given two number",
    sum: x / y,
  });
});

// your code goes here
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/add", (req, res) => {
//   var num1 = req.body.num1;
//   var num2 = req.body.num2;

//   if (typeof num1 == "string" && typeof num2 == "string") {
//     return res.json({
//       status: "failure",
//       message: "Invalid data types",
//     });
//   }
//   if (num1 + num2 > 1000000) {
//     return res.json({
//       status: "error",
//       message: "Overflow",
//     });
//   }
//   var result = num1 + num2;
//   return res.json({
//     status: "success",
//     message: "the sum of given two number",
//     sum: result,
//   });
// });

// app.post("/sub", (req, res) => {
//   var num1 = req.body.num1;
//   var num2 = req.body.num2;

//   if (typeof num1 == "string" && typeof num2 == "string") {
//     return res.json({
//       status: "failure",
//       message: "Invalid data types",
//     });
//   }
//   if (num1 - num2 > 1000000) {
//     return res.json({
//       status: "error",
//       message: "Underflow",
//     });
//   }
//   var result = num1 - num2;
//   return res.json({
//     status: "success",
//     message: "the difference of given two number",
//     difference: result,
//   });
// });

// app.post("/multiply", (req, res) => {
//   var num1 = req.body.num1;
//   var num2 = req.body.num2;

//   if (typeof num1 == "string" && typeof num2 == "string") {
//     return res.json({
//       status: "failure",
//       message: "Invalid data types",
//     });
//   }
//   if (num1 * num2 > 1000000) {
//     return res.json({
//       status: "error",
//       message: "Overflow",
//     });
//   }
//   var reslt = num1 * num2;
//   return res.json({
//     status: "success",
//     message: "The product of given numbers",
//     result: reslt,
//   });
// });

// app.post("/division", (req, res) => {
//   var num1 = req.body.num1;
//   var num2 = req.body.num2;

//   if (num2 === 0) {
//     return res.json({
//       message: "Cannot divide by zero",
//     });
//   }
//   var reslt = num1 / num2;
//   return res.json({
//     status: "success",
//     message: "The division of given numbers",
//     result: reslt,
//   });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
