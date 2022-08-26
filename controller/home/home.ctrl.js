const homes = require("../../mock/homes.json");
const utils = require("../../utils");

/**
 * @route get: /api/homes/
 * @desc get the all home data
 */
const getHomes = (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      data: homes.map((home) => utils.getGridData(home)),
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ status: "failed" });
  }
};

/**
 * @route get: /api/homes/filter
 * @desc filter the homes by city, price, and numberBedrooms
 */
const filterHome = (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      data: homes
        .filter((home) => utils.filter(home, req.query))
        .map((home) => utils.getGridData(home)),
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ status: "failed" });
  }
};

/**
 * @route get: /api/homes/:id
 * @desc get one home by id
 */
const getHome = (req, res) => {
  try {
    return res.status(200).send({
      status: "success",
      data: homes.filter((home) => home.id == req.params.id)[0],
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ status: "failed" });
  }
};

module.exports = {
  getHomes,
  getHome,
  filterHome,
};
