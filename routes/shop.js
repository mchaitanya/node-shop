const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop",
    path: "/",
    productCSS: true,
    products: adminData.products,
    activeShop: true,
  });
});

module.exports = router;
