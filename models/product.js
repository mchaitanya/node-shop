const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const filePath = path.join(rootDir, "data", "products.json");
    // https://stackoverflow.com/a/34811359
    // make sure the folder exists, node won't create the parent folder for you
    fs.readFile(filePath, (err, fileContents) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContents);
      }

      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  }

  static fetchAll() {
    // do something here ...
    return [];
  }
};
