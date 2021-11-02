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

exports.addGoal = async (req, res) => {
  try {
    const newGoal = await Goal.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newGoal,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//IMPLEMENT updateGOAL
exports.updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(204).json({
      status: "successfully updated",
      data: {
        goal,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed. please check message below",
      message: err,
    });
  }
};

//IMPLEMENT deleteGoal
