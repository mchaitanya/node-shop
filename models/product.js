const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

const filePath = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (callback) => {
  // https://stackoverflow.com/a/34811359
  // make sure the folder exists, node won't create the parent folder for you
  fs.readFile(filePath, (err, fileContents) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContents));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        if (err) console.error(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
