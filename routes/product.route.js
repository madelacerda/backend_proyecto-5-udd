const express = require("express");
const router = express.Router();
const {
  findAll,
  findOndByName,
  save,
  del,
  update,
} = require("../controllers/product.controller");

router.get("/", findAll);
router.get("/:name", findOndByName);

router.post("/", save);
router.put("/:id", update);
router.delete("/:name", del);

module.exports = router;
