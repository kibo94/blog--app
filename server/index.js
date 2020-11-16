
var express = require("express");


let http = require("http")
let env = require("dotenv");
env.config();
let path = require("path");
var app = express();
app.use(express.json());

let server = http.createServer(app)
const isProduction = process.env.NODE_ENV === "production";


if (isProduction) {
    console.log("workss")
  // Set static folder
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {

    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    ); // index is in /server/src so 2 folders up
  });
;
  server.listen(process.env.PORT || 80);

} else {
  server.listen(process.env.PORT || 3000);
}