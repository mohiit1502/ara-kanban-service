"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const board_controller_1 = __importDefault(require("../controllers/board.controller"));
const router = (0, express_1.Router)();
router.get('/user/:userId', board_controller_1.default.getBoardsByUserId);
router.get('/user/:userId/:boardId', board_controller_1.default.getBoardByUserId);
router.post('/user/:userId', board_controller_1.default.createBoard);
router.put('/user/:userId/:boardId', board_controller_1.default.updateBoard);
router.delete('/user/:userId/:boardId', board_controller_1.default.deleteBoard);
exports.default = router;
//# sourceMappingURL=board.route.js.map