"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_repo_1 = __importDefault(require("@src/repos/task.repo"));
class TaskController {
    constructor() {
        // Get all tasks for a board
        this.getTasksByBoardId = async (req, res) => {
            if (!req.headers.authorization) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            const boardId = +req.params.boardId;
            const tasks = await task_repo_1.default.getTasksByBoardId(boardId);
            return res.json({ tasks });
        };
        // Get single task by boardId and taskId
        this.getTaskByBoardId = async (req, res) => {
            if (!req.headers.authorization) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            const boardId = +req.params.boardId;
            const taskId = +req.params.taskId;
            const task = await task_repo_1.default.getTaskByBoardId(boardId, taskId);
            return res.json({ task });
        };
        // Create task for a board
        this.createTask = async (req, res) => {
            // Dummy form validation
            if (!req.body.title) {
                return res.status(400).json({ error: 'Task title required' });
            }
            const boardId = +req.params.boardId;
            const taskData = req.body;
            const task = await task_repo_1.default.createTask(boardId, taskData);
            return res.status(201).json({ task });
        };
        // Update task for a board
        this.updateTask = async (req, res) => {
            // Dummy form validation
            if (!req.body.title) {
                return res.status(400).json({ error: 'Task title required' });
            }
            const boardId = +req.params.boardId;
            const taskId = +req.params.taskId;
            const taskData = req.body;
            const task = await task_repo_1.default.updateTask(boardId, taskId, taskData);
            return res.json({ task });
        };
        // Delete task for a board
        this.deleteTask = async (req, res) => {
            if (!req.headers.authorization) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            const boardId = +req.params.boardId;
            const taskId = +req.params.taskId;
            await task_repo_1.default.deleteTask(boardId, taskId);
            return res.status(204).end();
        };
    }
}
exports.default = new TaskController();
//# sourceMappingURL=task.controller.js.map