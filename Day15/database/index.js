const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "amit", {
  host: "localhost",
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
})();

module.exports = sequelize;