import * as inquirer from "inquirer";
import TodoCollection from "../service/TodoCollection";
import TodoItem from "../model/TodoItem";
import { data } from "../data";
import { Commands } from "../model/Commands";

class TodoConsole {
    private todoCollection : TodoCollection;

    constructor() {
        const sampleTodos: TodoItem[] = data.map(
            (item) => new TodoItem(item.id, item.task, item.isCompleted)
        );
        this.todoCollection = new TodoCollection("My Todo List", sampleTodos);
    }
    

    // Display the TodoItem in the console
    displayTodoList() : void {
        console.log(
            `=====${this.todoCollection.userName}=====` +
            `(${this.todoCollection.getItemCounts().incompleted} items to do)`
        )
        this.todoCollection.getTodoItems(true).forEach((item) => item.printDetails());
    }

    promptUser(): void {
        console.clear();
        this.displayTodoList();
        inquirer.prompt({
            type: "list",
            name: "command",
            message: "Choose option",
            choices: Object.values(Commands),
        }).then((answers) => {
            if (answers["command"] !== Commands.Quit) {
                this.promptUser();
            }
        })
    }
}

export default TodoConsole;