import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    points: Number,
    group: String,
    gradeFormat: String,
    submissionType: String,
    assignTo: String,
    dueDate: String,
    availableFrom: String,
    availableUntil: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;