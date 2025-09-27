
import { Router } from 'express';
import BoardController from '../controllers/board.controller';

const router = Router();

router.get('/user/:userId', BoardController.getBoardsByUserId);
router.get('/user/:userId/:boardId', BoardController.getBoardByUserId);
router.post('/user/:userId', BoardController.createBoard);
router.put('/user/:userId/:boardId', BoardController.updateBoard);
router.delete('/user/:userId/:boardId', BoardController.deleteBoard);

export default router;
