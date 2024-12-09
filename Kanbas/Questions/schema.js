import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    points: Number,
    question: String,
    type: {
      type: String,
      required: true,
      enum: ["MultipleChoice", "TrueFalse", "FillInTheBlank"], // Restrict to these values
    },

    answer: String,

    possibleAnswers: { type: [String] },

    choices: { type: [String] },

    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  },
  { collection: "questions" }
);
export default schema;