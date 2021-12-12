const express = require("express");
const goalController = require("./../controllers/goalController");

const router = express.Router();

router.route("/").get(goalController.getAllGoals).post(goalController.addGoal);

router
  .route("/:id")
  .get(goalController.getGoal)
  .patch(goalController.updateGoal)
  .delete(goalController.deleteGoal);

module.exports = router;
