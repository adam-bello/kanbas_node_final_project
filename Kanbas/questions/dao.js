import model from "./model.js";
export const createQuestion = (questionId, quizId, questionData)  => {
  delete questionData._id;
  delete questionData.quiz;
  const newQuestion = {
      _id: questionId, 
      quiz: quizId, 
      ...questionData
  };
  return model.create(newQuestion);
}
export const findAllQuestionsByQuizId = (quizId) => model.find({quiz: quizId});
export const findQuestionById = (questionId) => model.findById(questionId);
export const updateQuestion = (questionId, question) =>  model.updateOne({ _id: questionId }, { $set: question });
export const deleteQuestion = (questionId) => model.deleteOne({ _id: questionId });