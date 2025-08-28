const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  DeleteTravelBook,
  UpdateTravelBook,
} = require("../controllers/travelController");

// GET all travels
router.get("/", getAllTravels);

// POST add travel (STATIC route first!)
router.post("/add", addTravelBook);

// GET travel by ID (DYNAMIC route after static)
router.get("/:id", getTravelById);

// DELETE travel
router.delete("/:id", DeleteTravelBook);

// UPDATE travel
router.put("/:id", UpdateTravelBook);

module.exports = router;
