const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).render("page-not-found", { pageTitle: "Page Not Found" });
});

app.listen(3000);
