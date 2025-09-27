"use strict";
// **** Variables **** //
Object.defineProperty(exports, "__esModule", { value: true });
const INVALID_CONSTRUCTOR_PARAM = 'titleOrObj arg must be a string or an object with the appropriate task keys.';
// **** Functions **** //
/**
 * Create new Task.
 */
function new_(boardId, title, status, description, createdAt, updatedAt, id) {
    const now = new Date().toISOString();
    return {
        id: (id !== null && id !== void 0 ? id : -1),
        boardId: (boardId !== null && boardId !== void 0 ? boardId : -1),
        title: (title !== null && title !== void 0 ? title : ''),
        status: (status !== null && status !== void 0 ? status : 'todo'),
        description,
        createdAt: (createdAt !== null && createdAt !== void 0 ? createdAt : now),
        updatedAt: (updatedAt !== null && updatedAt !== void 0 ? updatedAt : now),
    };
}
/**
 * Get task instance from object.
 */
function from(param) {
    if (!isTask(param)) {
        throw new Error(INVALID_CONSTRUCTOR_PARAM);
    }
    const p = param;
    return new_(p.boardId, p.title, p.status, p.description, p.createdAt, p.updatedAt, p.id);
}
/**
 * See if the param meets criteria to be a task.
 */
function isTask(arg) {
    return (!!arg &&
        typeof arg === 'object' &&
        'id' in arg &&
        'boardId' in arg &&
        'title' in arg &&
        'status' in arg &&
        'createdAt' in arg &&
        'updatedAt' in arg);
}
// **** Export default **** //
exports.default = {
    new: new_,
    from,
    isTask,
};
//# sourceMappingURL=task.model.js.map