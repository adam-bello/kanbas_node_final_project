import model from "./model.js";
export const createQuiz = (quizId, courseId, quizData)  => {
    delete quizData._id;
    delete quizData.course;
    const newQuiz = {
        _id: quizId, 
        course: courseId, 
        ...quizData
    };
    return model.create(newQuiz);
}
export const findAllQuizzes = () => model.find();
export const findAllQuizzesByCourseId = (courseId) => model.find({course: courseId});
export const findQuizById = (quizId) => model.findById(quizId);
export const findQuizByName = (name) =>  model.findOne({ name: name });
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });