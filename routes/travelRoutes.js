//CRUD
const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  DeleteTravelBook,
  UpdateTravelBook,
} = require("../controllers/travelController");

//get all travel
router.get("/", getAllTravels);

/// get one tavel book
router.get("/:id", getTravelById);

//add post
router.post("/add", addTravelBook);

//delete
router.delete("/:id", DeleteTravelBook);

//update
router.put("/:id", UpdateTravelBook);

module.exports = router;
