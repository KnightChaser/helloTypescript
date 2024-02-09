import TodoItem from "./TodoItem";

class TodoCollection {
    private nextId : number = 1;
    private itemMap : Map<number, TodoItem>; 

    constructor(public userName : string, 
                public todoItems : TodoItem[] = []) {
                    this.itemMap = new Map<number, TodoItem>();
                    todoItems.forEach((item) => this.itemMap.set(item.id, item));
                }

    // Find the TodoItem object by its id and return the TodoItem object if found
    getTodoById(id : number) : TodoItem | undefined {
        return this.itemMap.get(id);
    }

    // Add a new TodoItem to the end of todoItems array
    addTodo(task : string) : number { 
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }

        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    // Return every TodoItem in the collection if includeComplete is true, otherwise return only the incompleted TodoItem
    getTodoItems(includeComplete : boolean): TodoItem[] {
        return [...this.itemMap.values()]
                .filter((item) => includeComplete || !item.isCompleted);
    }

    // Remove completed TodoItem from the collection
    removeComplete() : void {
        this.itemMap.forEach((item) => {
            if (item.isCompleted) {
                this.itemMap.delete(item.id);
            }
        })
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