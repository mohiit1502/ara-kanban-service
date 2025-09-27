
import { Router } from 'express';
import TaskController from '../controllers/task.controller';

const router = Router();

router.get('/board/:boardId', TaskController.getTasksByBoardId);
router.get('/board/:boardId/:taskId', TaskController.getTaskByBoardId);
router.post('/board/:boardId', TaskController.createTask);
router.put('/board/:boardId/:taskId', TaskController.updateTask);
router.delete('/board/:boardId/:taskId', TaskController.deleteTask);

export default router;
