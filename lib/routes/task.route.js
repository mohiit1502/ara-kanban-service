"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
const router = (0, express_1.Router)();
router.get('/board/:boardId', task_controller_1.default.getTasksByBoardId);
router.get('/board/:boardId/:taskId', task_controller_1.default.getTaskByBoardId);
router.post('/board/:boardId', task_controller_1.default.createTask);
router.put('/board/:boardId/:taskId', task_controller_1.default.updateTask);
router.delete('/board/:boardId/:taskId', task_controller_1.default.deleteTask);
exports.default = router;
//# sourceMappingURL=task.route.js.map