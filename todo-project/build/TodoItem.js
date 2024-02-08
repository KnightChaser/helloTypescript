"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    // Build the constructor with the properties of the class
    constructor(id, task, isCompleted) {
        this.id = id;
        this.task = task;
        this.isCompleted = isCompleted;
        this.id = id;
        this.task = task;
        this.isCompleted = isCompleted;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.isCompleted ? '(completed)' : ''}`);
    }
}
exports.default = TodoItem; // Export the class to be used in other files
