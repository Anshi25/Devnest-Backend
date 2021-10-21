const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const product = require("./models/Product");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Heya!!");
});

app.get("/products", async (req, res) => {
  try {
    // Filters
    const query = req.query;
    const count = parseInt(query.count) || 10;
    const page = parseInt(query.page) || 1;
    const after = parseInt(query.after);

    if (after) {
      sql = {
        where: {
          id: {
            [Op.gt]: after,
          },
        },
      };
    } else {
      sql = {
        offset: count * (page - 1),
      };
    }

    const products = await product.findAll({
      ...sql,
      attributes: ["id", "title", "price", "description", "image"],
      limit: count,
    });

    res.status(200).send({
      count: products.length,
      items: products,
    });
  } catch (err) {
    res.status(400).send({
      error: err,
      message: "Could not process your request",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});