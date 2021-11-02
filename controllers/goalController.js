const Goal = require("../models/goalModel");

//IMPLEMENT GET ALL GOALS
exports.getGoals = async (req, res) => {
  try {
    const goals = Goal.find();
    res.status(200).json({
      status: "success",
      data: {
        goals,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//IMPLEMENT GET A GOAL

//IMPLEMENT ADD A GOAL

//IMPLEMENT updateGOAL

//IMPLEMENT deleteGoal
