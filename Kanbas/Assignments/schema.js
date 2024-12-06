import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    points: Number,
    group: String,
    gradeformat: String,
    submissiontype: String,
    assignto: String,
    duedate: String,
    availablefrom: String,
    availableuntil: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;