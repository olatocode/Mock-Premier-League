/** @format */
const app = require("./src/app");
const DB = require("./src/db/connection");

DB.connectDB();


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`MPL is listening ${port}`);
});
