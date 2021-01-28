const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const advertisementRoutes = require("./routes/advertisementRoutes");
const orderRoutes = require("./routes/orderRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api/users", userRoutes);
server.use("/api/products", productRoutes);
server.use("/api/advertisements", advertisementRoutes);
server.use("/api/orders", orderRoutes);
server.use("/api/cart", cartRoutes);
server.get("/", (req, res) => {
  res.send("GoSaveMore is running....");
});

server.use(notFound);
server.use(errorHandler);

module.exports = server;
