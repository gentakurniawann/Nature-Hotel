"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pemesanan, {
        foreignKey: "id_customer",
        as: "pemesanan",
      });
    }
  }
  customer.init(
    {
      id_customer: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama_customer: DataTypes.STRING,
      nik: DataTypes.INTEGER,
      jenis_kelamin: DataTypes.ENUM("L", "P"),
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "customer",
      tableName: "customer",
    }
  );
  return customer;
};
