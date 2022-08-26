const express = require("express");

const homeController = require("../../controller/home");

const router = express.Router();

router.get("/", homeController.getHomes);
router.get("/filter", homeController.filterHome);
router.get("/:id", homeController.getHome);

module.exports = router;
