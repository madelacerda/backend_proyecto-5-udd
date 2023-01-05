const express = require("express");
const router = express.Router();
const {
  findAll,
  findOndByName,
  findOndByid,
  save,
  del,
  update,
} = require("../controllers/product.controller");

router.get("/", findAll);
router.get("/:slug", findOndByName);
router.get("/id/:_id", findOndByid);

router.post("/", save);
router.put("/:id", update);
router.delete("/:name", del);

module.exports = router;
