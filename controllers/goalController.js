const Goal = require("../models/goalModel");

//IMPLEMENT GET ALL GOALS
exports.getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
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
exports.getGoal = async (req, res) => {
  try {
    const goal = await Goal.find({ user_id: req.params.id });
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
    const goal = await Goal.findOne({ user_id: req.body.user_id });
    if (goal == null) {
      // const newGoal = await Goal.create({user_id: req.body.user_id, goals: req.body.goals});
      const goal = new Goal(req.body);
      const newGoal = await goal.save();
      res.status(201).json({
        status: "success",
        data: {
          goal: newGoal,
        },
      });
    } else {
      const newGoal = await Goal.updateOne(
        { user_id: req.body.user_id },
        req.body
      );
      res.status(201).json({
        status: "success",
        data: {
          goal: newGoal,
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
    console.log(err);
  }
};

//IMPLEMENT updateGOAL
exports.updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.params.body, {
      runValidators: true,
      new: true,
    });
    res.status(201).json({
      status: "succesfully updated",
      data: goal,
    });
  } catch (err) {
    res.status(204).json({
      status: "fail",
      message: err,
    });
  }
};

//implement route Aliasing on goals

exports.deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
