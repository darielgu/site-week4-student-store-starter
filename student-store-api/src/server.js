require("dotenv").config();
const express = require("express");
const app = express();
const itemRoutes = require("./routes/itemRoutes");
const orderRoutes = require("./routes/orderRoutes");
const orderItemRoutes = require("./routes/orderItemRoutes");
const cors = require("cors");
const morgan = require("morgan"); // verboses requests

const corsOption = {
  orgin: "http://localhost:5173/", // on deployment change to live server
};

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/items", itemRoutes);
app.use("/orders", orderRoutes);
app.use("/orderItem", orderItemRoutes);
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// import port and listen for request
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on ${port}`);
});
