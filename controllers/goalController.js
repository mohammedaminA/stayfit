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
exports.getGoals = async (req, res) => {
  try {
    const goal = Goal.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        goal,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//IMPLEMENT ADD A GOAL

//IMPLEMENT updateGOAL

//IMPLEMENT deleteGoal
