import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    assignTo: String,
    type: { type: String, default: "Graded Quiz" },
    questionNumbers: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    latestScore: { type: Number, default: 0 },
    group: { type: String, default: "Quizzes" },
    published: { type: Boolean, default: false },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    howManyAttempts: { type: Number, default: 1 },
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    gradeFormat: String,
    submissionType: String,
    dueDate: String,
    availableFrom: String,
    availableUntil: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "quizzes" }
);
export default schema;