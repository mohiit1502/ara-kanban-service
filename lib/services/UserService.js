"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_NOT_FOUND_ERR = void 0;
const user_repo_1 = __importDefault(require("@src/repos/user.repo"));
const classes_1 = require("@src/other/classes");
const HttpStatusCodes_1 = __importDefault(require("@src/constants/HttpStatusCodes"));
// **** Variables **** //
exports.USER_NOT_FOUND_ERR = 'User not found';
// **** Functions **** //
/**
 * Get all users.
 */
function getAll() {
    return user_repo_1.default.getAll();
}
/**
 * Add one user.
 */
function addOne(user) {
    return user_repo_1.default.add(user);
}
/**
 * Update one user.
 */
async function updateOne(user) {
    const persists = await user_repo_1.default.persists(user.id);
    if (!persists) {
        throw new classes_1.RouteError(HttpStatusCodes_1.default.NOT_FOUND, exports.USER_NOT_FOUND_ERR);
    }
    // Return user
    return user_repo_1.default.update(user);
}
/**
 * Delete a user by their id.
 */
async function _delete(id) {
    const persists = await user_repo_1.default.persists(id);
    if (!persists) {
        throw new classes_1.RouteError(HttpStatusCodes_1.default.NOT_FOUND, exports.USER_NOT_FOUND_ERR);
    }
    // Delete user
    return user_repo_1.default.delete(id);
}
// **** Export default **** //
exports.default = {
    getAll,
    addOne,
    updateOne,
    delete: _delete,
};
//# sourceMappingURL=UserService.js.map