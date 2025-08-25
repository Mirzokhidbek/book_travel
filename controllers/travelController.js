const Travel = require("../models/travel.model");

//Method: GET
//Descr: Get all travels
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json({
      message: "succes",
      travels,
    });
  } catch (error) {
    res.send(err);
  }
};

//Method: GET
//Descr: Get one travell book by id

const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!Travel) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "succes",
      travel,
    });
  } catch (error) {
    res.send(error);
  }
};
//Method: POST
//Descr: add new travel book

const addTravelBook = async (req, res) => {
  try {
    const { title, image, description } = req.body;
    const newTravel = await Travel.create({
      title,
      image,
      description,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getAllTravels, getTravelById };
