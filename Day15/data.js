const { Sequelize } = require("sequelize");
const product = require("./models/Product");
const sequelize = new Sequelize("postgres", "postgres", "nitin", {
  host: "localhost",
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    const now = Date.now();

    for (let i = 1; i <= 100; i++) {
      const productId = now + i;
      await product.create({
        id: i,
        title: `product titlte ${productId}`,
        price: Math.floor(100 + Math.random() + 100000),
        description: `product description ${productId}`,
        image: `https://picsum.photos/100?product=${productId}`,
      });
    }
  } catch (err) {
    console.log(err);
  }
})();