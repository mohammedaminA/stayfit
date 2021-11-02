const express = require("express");
const goalController = require("./../controllers/goalController");
const router = express.Router();

router.route("/").get(goalController.getGoals).post(goalController.addGoals);
router
  .route("/:id")
  .get(goalController.getGoal)
  .patch(goalController.updateGoal)
  .delete(goalController.deleteGoal);
