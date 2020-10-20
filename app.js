const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
   app.send("<h1>Welcome to Express</h1>");
})

app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});