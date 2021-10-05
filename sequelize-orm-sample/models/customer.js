import { Sequelize } from "sequelize";
import db from "../utils/database.js";

const { DataTypes, Model } = Sequelize;

const Customer = db.define("customer", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  nicNumber: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING(10),
  },
}, {
  freezeTableName: true
});

export default Customer;
