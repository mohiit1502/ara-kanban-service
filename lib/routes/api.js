"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jet_validator_1 = __importDefault(require("jet-validator"));
const Paths_1 = __importDefault(require("./constants/Paths"));
const user_model_1 = __importDefault(require("@src/models/user.model"));
const user_controller_1 = __importDefault(require("@src/controllers/user.controller"));
// **** Variables **** //
const apiRouter = (0, express_1.Router)(), validate = (0, jet_validator_1.default)();
// ** Add UserRouter ** //
const userRouter = (0, express_1.Router)();
// Get all users
userRouter.get(Paths_1.default.Users.Get, user_controller_1.default.getAll.bind(user_controller_1.default));
userRouter.post(Paths_1.default.Users.Add, validate(['user', user_model_1.default.isUser]), user_controller_1.default.add.bind(user_controller_1.default));
userRouter.put(Paths_1.default.Users.Update, validate(['user', user_model_1.default.isUser]), user_controller_1.default.update.bind(user_controller_1.default));
userRouter.delete(Paths_1.default.Users.Delete, validate(['id', 'number', 'params']), user_controller_1.default.delete.bind(user_controller_1.default));
// Add UserRouter
apiRouter.use(Paths_1.default.Users.Base, userRouter);
// **** Export default **** //
exports.default = apiRouter;
//# sourceMappingURL=api.js.map