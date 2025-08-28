const Travel = require("../models/travel.model");

// GET all travels
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json({
      message: "success",
      travels,
    });
  } catch (error) {
    console.error("Error fetching travels:", error);
    res.status(500).json({ error: error.message });
  }
};

// GET travel by ID
const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      return res.status(404).json({ message: "Travel not found" });
    }
    res.status(200).json({ message: "success", travel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST add new travel
const addTravelBook = async (req, res) => {
  try {
    const { title, description, img } = req.body; // match schema field
    if (!title || !description || !img) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTravel = await Travel.create({ title, description, img });
    res.status(201).json({ message: "success", newTravel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT update travel
const UpdateTravelBook = async (req, res) => {
  try {
    const { title, description, img } = req.body;
    const updatedTravel = await Travel.findByIdAndUpdate(
      req.params.id,
      { title, description, img },
      { new: true } // return updated document
    );

    if (!updatedTravel) {
      return res.status(404).json({ message: "Travel not found" });
    }

    res.status(200).json({ message: "success", updatedTravel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE travel
const DeleteTravelBook = async (req, res) => {
  try {
    const deleted = await Travel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Travel not found" });
    }
    res.status(200).json({ message: "Travel deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  UpdateTravelBook,
  DeleteTravelBook,
};
