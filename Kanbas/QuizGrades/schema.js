import mongoose from "mongoose";

const QuestionGradeSchema = new mongoose.Schema({
  question: { type: String, required: true },
  grade: { type: Number, required: true }
});

const schema = new mongoose.Schema(
  {
    user:   { type: mongoose.Schema.Types.ObjectId, ref: "UserModel"   },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },

    questionGrades: { type: [QuestionGradeSchema], default: [] },
    
    lastTakenTime: String,
    attempts: String,
    grade: String,
  },
  { collection: "quizgrades" }
);
export default schema;