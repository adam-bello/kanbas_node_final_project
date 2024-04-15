import * as dao from "./dao.js";
import db from "../Database/index.js"

export default function ModuleRoutes(app) {

    const findAllModules = async (req, res) => {
        const modules = await dao.findAllModules();
        res.json(modules);
    };

    const findAllModulesByCourseId = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findAllModulesByCourseId(cid);
        res.json(modules);
    };

    const createModule = async (req, res) => {
        const { cid } = req.params;
        const { moduleId } = req.body;
        const newModule = await dao.createModule(moduleId, cid, req.body);
        res.json(newModule);
    }

    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.mid);
        res.json(status);
    };

    const updateModule = async (req, res) => {
        const status = await dao.updateModule(req.params.mid, req.body);
        res.json(status);
    }; 
    
    app.get("/api/modules", findAllModules);
    app.get("/api/courses/:cid/modules", findAllModulesByCourseId);
    app.post("/api/courses/:cid/modules", createModule);
    app.put("/api/modules/:mid", updateModule);
    app.delete("/api/modules/:mid", deleteModule);
}