import { Sequelize } from "sequelize";

const sequelize = new Sequelize("psacc_db", "root", "rootUser@12", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
