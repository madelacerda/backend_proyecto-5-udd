const express = require("express");
const router = express.Router();

const productRouter = require("./product.route");
const usuarioRouter = require("./user.route");

router.use("/product", productRouter);
router.use("/user", usuarioRouter)

module.exports = router;
