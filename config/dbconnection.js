const { Sequelize } = require("sequelize");

const db = new Sequelize("reservasi2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const dbconnection = async () => {
  try {
    await db.authenticate();
    console.log("koneksi berhasil");
  } catch (error) {
    console.log("koneksi gagal");
  }
};

module.exports = { db, dbconnection };
