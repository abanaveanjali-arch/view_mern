const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, resp) => {
  const data = 10 + 20;
  resp.render("add", { data });
});
app.get("/product", (req, resp) => {
  const data = [
    { id: 1, name: "TV", price: 56000 },
    { id: 2, name: "mobile", price: 45000 },
    { id: 3, name: "watch", price: 12000 },
    { id: 4, name: "AC", price: 55000 },
    { id: 5, name: "mouse", price: 6000 },
  ];
  resp.render("product", { data });
});

app.listen(4000, () => {
  console.log("runningg...");
});
