const express = require("express");
const app = express();
const port = 3000;

const Router = require("./routes/index.js");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(Router);

const { db, dbconnection } = require("./config/dbconnection.js");
const Users = require("./models/Users.js");
// (async () => {
//   await db.sync();
// })();

// dbconnection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
