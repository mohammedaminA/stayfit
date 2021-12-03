const mongoose = require("mongoose");
const goalSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, "User Id is required for all goals"],
  },
  goals: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
