import * as dao from "./dao.js";

export default function QuestionRoutes(app) {

  const findAllQuestionsByQuizId = async (req, res) => {
    const { quizId } = req.params;
    const questions = await dao.findAllQuestionsByQuizId(quizId);
    res.json(questions);
  }
  
  const createQuestion = async (req, res) => {
    const { quizId } = req.params;
    const { questionId } = req.body;
    const newQuestion = await dao.createQuestion(questionId, quizId, req.body);
    res.json(newQuestion);
  };

  const deleteQuestion = async (req, res) => {
    const status = await dao.deleteQuestion(req.params.questionId);
    res.json(status);
};

const findQuestionById = async (req, res) => {
  const { questionId } = req.params;
  const question = await dao.findQuestionById(questionId);
  res.json(question);
};

  const updateQuestion = async (req, res) => {
    const status = await dao.updateQuestion(req.params.questionId, req.body);
    res.json(status);
};

  app.post("/api/courses/:cid/quizzes/:quizId/questions", createQuestion);
  app.get("/api/questions/:questionId", findQuestionById);
  app.get("/api/courses/:cid/quizzes/:quizId/questions", findAllQuestionsByQuizId);
  app.put("/api/questions/:questionId", updateQuestion);
  app.delete("/api/questions/:questionId", deleteQuestion);
}
