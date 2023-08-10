const { DataTypes } = require("sequelize");
const { db } = require("../config/dbconnection");

const Users = db.define(
  "users",
  {
    id_user: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notEmpty: true,
      },
    },
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    telephone: DataTypes.STRING,
    gender: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Users;
