import model from "./model.js";
export function findQuizGradeForUser(userId, quizId) {
  return model.findOne({ user: userId, quiz: quizId });
}
export function createQuizGrade(quizGrade) {
  delete quizGrade._id
  return model.create(quizGrade);
}

export function deleteQuizGrades(userId, quizId) {
  return model.deleteMany({ user: userId, quiz: quizId });
}