"use strict";
/**
 * Miscellaneous shared functions go here.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = getRandomInt;
exports.tick = tick;
/**
 * Get a random number between 1 and 1,000,000,000,000
 */
function getRandomInt() {
    return Math.floor(Math.random() * 1000000000000);
}
/**
 * Wait for a certain number of milliseconds.
 */
function tick(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
//# sourceMappingURL=misc.js.map