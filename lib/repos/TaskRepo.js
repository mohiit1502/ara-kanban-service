"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MockOrm_1 = __importDefault(require("./MockOrm"));
async function getTasksByBoardId(boardId) {
    const db = await MockOrm_1.default.openDb();
    return db.tasks.filter((task) => task.boardId === boardId);
}
async function getTaskByBoardId(boardId, taskId) {
    const db = await MockOrm_1.default.openDb();
    return db.tasks.find((task) => task.boardId === boardId && task.id === taskId) || null;
}
async function createTask(boardId, task) {
    const db = await MockOrm_1.default.openDb();
    task.id = Date.now();
    task.boardId = boardId;
    task.createdAt = new Date().toISOString();
    task.updatedAt = task.createdAt;
    db.tasks.push(task);
    await MockOrm_1.default.saveDb(db);
    return task;
}
async function updateTask(boardId, taskId, taskData) {
    const db = await MockOrm_1.default.openDb();
    const task = db.tasks.find((t) => t.boardId === boardId && t.id === taskId);
    if (task) {
        Object.assign(task, taskData, { updatedAt: new Date().toISOString() });
        await MockOrm_1.default.saveDb(db);
        return task;
    }
    return null;
}
async function deleteTask(boardId, taskId) {
    const db = await MockOrm_1.default.openDb();
    const idx = db.tasks.findIndex((t) => t.boardId === boardId && t.id === taskId);
    if (idx !== -1) {
        db.tasks.splice(idx, 1);
        await MockOrm_1.default.saveDb(db);
        return true;
    }
    return false;
}
exports.default = {
    getTasksByBoardId,
    getTaskByBoardId,
    createTask,
    updateTask,
    deleteTask,
};
//# sourceMappingURL=TaskRepo.js.map