import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    assignTo: String,
    type: String,
    points: Number,
    group: String,
    published: Boolean,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Number,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
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