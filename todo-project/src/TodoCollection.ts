import TodoItem from "./TodoItem";

class TodoCollection {
    private nextId: number = 1;
    constructor(public userName : string, 
                public todoItems : TodoItem[] = []) {}

    // Find the TodoItem object by its id and return the TodoItem object if found
    getTodoById(id : number) : TodoItem | undefined {
        return this.todoItems.find((item) => item.id === id)
    }

    // Add a new TodoItem to the end of todoItems array
    addTodo(task : string) : number { 
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }

        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId;
    }

    // Mark the TodoItem as completed
    markCompleted(id : number, isCompleted : boolean) : void {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.isCompleted = isCompleted;
        }
    }
}

export default TodoCollection;