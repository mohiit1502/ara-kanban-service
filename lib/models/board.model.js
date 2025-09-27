"use strict";
// **** Variables **** //
Object.defineProperty(exports, "__esModule", { value: true });
const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must be a string or an object with the appropriate board keys.';
// **** Functions **** //
/**
 * Create new Board.
 */
function new_(userId, name, description, createdAt, updatedAt, id) {
    const now = new Date().toISOString();
    return {
        id: (id !== null && id !== void 0 ? id : -1),
        userId: (userId !== null && userId !== void 0 ? userId : -1),
        name: (name !== null && name !== void 0 ? name : ''),
        description,
        createdAt: (createdAt !== null && createdAt !== void 0 ? createdAt : now),
        updatedAt: (updatedAt !== null && updatedAt !== void 0 ? updatedAt : now),
    };
}
/**
 * Get board instance from object.
 */
function from(param) {
    if (!isBoard(param)) {
        throw new Error(INVALID_CONSTRUCTOR_PARAM);
    }
    const p = param;
    return new_(p.userId, p.name, p.description, p.createdAt, p.updatedAt, p.id);
}
/**
 * See if the param meets criteria to be a board.
 */
function isBoard(arg) {
    return (!!arg &&
        typeof arg === 'object' &&
        'id' in arg &&
        'userId' in arg &&
        'name' in arg &&
        'createdAt' in arg &&
        'updatedAt' in arg);
}
// **** Export default **** //
exports.default = {
    new: new_,
    from,
    isBoard,
};
//# sourceMappingURL=board.model.js.map