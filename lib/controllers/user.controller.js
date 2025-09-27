"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repo_1 = __importDefault(require("@src/repos/user.repo"));
class UserController {
    constructor() {
        this.getAll = async (_, res) => {
            const users = await user_repo_1.default.getAll();
            return res.status(200).json({ users });
        };
        this.add = async (req, res) => {
            const user = req.body.user;
            await user_repo_1.default.add(user);
            return res.status(201).end();
        };
        this.update = async (req, res) => {
            const user = req.body.user;
            await user_repo_1.default.update(user);
            return res.status(200).end();
        };
        this.delete = async (req, res) => {
            const id = +req.params.id;
            await user_repo_1.default.delete(id);
            return res.status(200).end();
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map