require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/itemRoutes");

app.use(express.json());
app.use("/items", routes);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// import port and listen for request
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on ${port}`);
});
