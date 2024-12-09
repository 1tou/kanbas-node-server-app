import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("QuizGradeModel", schema);
export default model;