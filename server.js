const express = require("express");
const hbs = require("express-handlebars");
// const bodyParser = require('body-parser')

const routes = require("./routes/users");

const server = express();

// Middleware

server.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main"
  })
);
server.set("view engine", "hbs");
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

// Routes

server.use("/", routes);

module.exports = server;
