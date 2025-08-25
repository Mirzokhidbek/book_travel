//CRUD
const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
} = require("../controllers/travelController");

//get all travel
router.get("/", getAllTravels);

/// get one tavel book
router.get("/:id", getTravelById);

module.exports = router;
