import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    points: { type: Number, default: 0 },
    description: String,
    type: {
      type: String,
      required: true,
      enum: ["MultipleChoice", "TrueFalse", "FillInTheBlank"], // Restrict to these values
    },

    answer: { type: String, default: "" },

    possibleAnswers: { type: [String], default: [] },

    choices: { type: [String], default: [] },

    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  },
  { collection: "questions" }
);
export default schema;