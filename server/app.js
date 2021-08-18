const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./cofig.env" });
require(`./db/conn`);
//const User=require(`./model/userSchema`)
app.use(express.json());
//we link our router file
app.use("/api", require("./router/auth"));
app.use(require("cors"));

//const DB = `mongodb+srv://thapa:12345@cluster0.oumfl.mongodb.net/stack?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

// Middleware
const middleware = (req, res, next) => {
  console.log(`hello my middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send(`hello  world from the server app js `);
});
// app.get('/about', middleware, (req, res) =>
// {
//     res.send(`hello about world from the express`);
// });
app.get("/about", middleware, (req, res) => {
  res.send(`hello about world from the `);
});
app.get("/contact", middleware, (req, res) => {
  res.send(`hello contact world from the `);
});
app.get("/signin", (req, res) => {
  res.send(`hello signin world from the `);
});
app.get("/signup", (req, res) => {
  res.send(`hello signup world from the `);
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
