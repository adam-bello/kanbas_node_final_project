import * as dao from "./dao.js";

export default function QuizRoutes(app) {

    const findAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    };

    const createQuiz = async (req, res) => {
        const { cid } = req.params;
        const { quizId } = req.body;
        const newQuiz = await dao.createQuiz(quizId, cid, req.body);
        res.json(newQuiz);
    }

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };

    const findAllQuizzesByCourseId = async (req, res) => {
        const { cid } = req.params;
        const quizzes = await dao.findAllQuizzesByCourseId(cid);
        res.json(quizzes);
    };

    const findQuizById = async (req, res) => {
        const { quizId } = req.params;
        const quizzes = await dao.findQuizById(quizId);
        res.json(quizzes);
    };

    const updateQuiz = async (req, res) => {
        const status = await dao.updateQuiz(req.params.quizId, req.body);
        res.json(status);
    };

    app.get("/api/quizzes", findAllQuizzes);
    app.post("/api/courses/:cid/quizzes", createQuiz);
    app.get("/api/courses/:cid/quizzes", findAllQuizzesByCourseId);
    app.get("/api/quizzes/:quizId", findQuizById);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
}