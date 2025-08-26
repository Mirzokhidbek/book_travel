//CRUD
const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
} = require("../controllers/travelController");

//get all travel
router.get("/", getAllTravels);

/// get one tavel book
router.get("/:id", getTravelById);

//add post
router.post("add", addTravelBook);

module.exports = router;
