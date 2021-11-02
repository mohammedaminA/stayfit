const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is required for all goals"],
    unique: true,
    trim: true,
  },
  dueDate: {
    type: Date,
    required: [true, "A tour must have a duration"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
  },
  description: {
    type: String,
    trim: true,
  },
  achievements: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
