"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MockOrm_1 = __importDefault(require("./MockOrm"));
async function getBoardsByUserId(userId) {
    const db = await MockOrm_1.default.openDb();
    return db.boards.filter((board) => board.userId === userId);
}
async function getBoardByUserId(userId, boardId) {
    const db = await MockOrm_1.default.openDb();
    return db.boards.find((board) => board.userId === userId && board.id === boardId) || null;
}
async function createBoard(userId, board) {
    const db = await MockOrm_1.default.openDb();
    board.id = Date.now();
    board.userId = userId;
    board.createdAt = new Date().toISOString();
    board.updatedAt = board.createdAt;
    db.boards.push(board);
    await MockOrm_1.default.saveDb(db);
    return board;
}
async function updateBoard(userId, boardId, boardData) {
    const db = await MockOrm_1.default.openDb();
    const board = db.boards.find((b) => b.userId === userId && b.id === boardId);
    if (board) {
        Object.assign(board, boardData, { updatedAt: new Date().toISOString() });
        await MockOrm_1.default.saveDb(db);
        return board;
    }
    return null;
}
async function deleteBoard(userId, boardId) {
    const db = await MockOrm_1.default.openDb();
    const idx = db.boards.findIndex((b) => b.userId === userId && b.id === boardId);
    if (idx !== -1) {
        db.boards.splice(idx, 1);
        await MockOrm_1.default.saveDb(db);
        return true;
    }
    return false;
}
exports.default = {
    getBoardsByUserId,
    getBoardByUserId,
    createBoard,
    updateBoard,
    deleteBoard,
};
//# sourceMappingURL=BoardRepo.js.map