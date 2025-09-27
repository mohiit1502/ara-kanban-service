"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_repo_1 = __importDefault(require("@src/repos/board.repo"));
class BoardController {
    constructor() {
        // Get all boards for a user
        this.getBoardsByUserId = async (req, res) => {
            if (!req.headers.authorization) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            const userId = +req.params.userId;
            const boards = await board_repo_1.default.getBoardsByUserId(userId);
            return res.json({ boards });
        };
        // Get single board by userId and boardId
        this.getBoardByUserId = async (req, res) => {
            if (!req.headers.authorization) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            const userId = +req.params.userId;
            const boardId = +req.params.boardId;
            const board = await board_repo_1.default.getBoardByUserId(userId, boardId);
            return res.json({ board });
        };
        // Create board for a user
        this.createBoard = async (req, res) => {
            if (!req.body.name) {
                return res.status(400).json({ error: 'Board name required' });
            }
            const userId = +req.params.userId;
            const boardData = req.body;
            const board = await board_repo_1.default.createBoard(userId, boardData);
            return res.status(201).json({ board });
        };
        // Update board for a user
        this.updateBoard = async (req, res) => {
            if (!req.body.name) {
                return res.status(400).json({ error: 'Board name required' });
            }
            const userId = +req.params.userId;
            const boardId = +req.params.boardId;
            const boardData = req.body;
            const board = await board_repo_1.default.updateBoard(userId, boardId, boardData);
            return res.json({ board });
        };
        // Delete board for a user
        this.deleteBoard = async (req, res) => {
            if (!req.headers.authorization) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            const userId = +req.params.userId;
            const boardId = +req.params.boardId;
            await board_repo_1.default.deleteBoard(userId, boardId);
            return res.status(204).end();
        };
    }
}
exports.default = new BoardController();
//# sourceMappingURL=board.controller.js.map