import model from "./model.js";

export const createModule = (moduleId, courseId, moduleData) => {
    delete moduleData._id;
    delete moduleData.course;
    const newModule = {
        _id: moduleId, 
        course: courseId, 
        ...moduleData
    };
    return model.create(newModule);
}
export const findAllModulesByCourseId = (courseId) => model.find({course: courseId});
export const findAllModules = () => model.find();
export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });