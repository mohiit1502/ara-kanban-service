"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
const user_repo_1 = __importDefault(require("@src/repos/user.repo"));
const PwdUtil_1 = __importDefault(require("@src/util/PwdUtil"));
const misc_1 = require("@src/util/misc");
const HttpStatusCodes_1 = __importDefault(require("@src/constants/HttpStatusCodes"));
const classes_1 = require("@src/other/classes");
// **** Variables **** //
// Errors
exports.Errors = {
    Unauth: 'Unauthorized',
    EmailNotFound(email) {
        return `User with email "${email}" not found`;
    },
};
// **** Functions **** //
/**
 * Login a user.
 */
async function login(email, password) {
    var _a;
    // Fetch user
    const user = await user_repo_1.default.getOne(email);
    if (!user) {
        throw new classes_1.RouteError(HttpStatusCodes_1.default.UNAUTHORIZED, exports.Errors.EmailNotFound(email));
    }
    // Check password
    const hash = ((_a = user.pwdHash) !== null && _a !== void 0 ? _a : ''), pwdPassed = await PwdUtil_1.default.compare(password, hash);
    if (!pwdPassed) {
        // If password failed, wait 500ms this will increase security
        await (0, misc_1.tick)(500);
        throw new classes_1.RouteError(HttpStatusCodes_1.default.UNAUTHORIZED, exports.Errors.Unauth);
    }
    // Return
    return user;
}
// **** Export default **** //
exports.default = {
    login,
};
//# sourceMappingURL=AuthService.js.map