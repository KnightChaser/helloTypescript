class TodoItem {
    // Build the constructor with the properties of the class
    constructor(public id : number, 
                public task : string, 
                public isCompleted : boolean = false) {
        this.id = id;
        this.task = task;
        this.isCompleted = isCompleted;
    }

    printDetails() : void {
        console.log(`${this.id}\t${this.task}\t${this.isCompleted ? '(completed)' : ''}`)
    }
}

export default TodoItem; // Export the class to be used in other files