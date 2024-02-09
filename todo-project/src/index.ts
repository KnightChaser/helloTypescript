import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";
import { data } from "./data";

const sampleTodos : TodoItem[] = data.map(
    (item) => new TodoItem(item.id, item.task, item.isCompleted)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);
myTodoCollection.addTodo("Learn TypeScript");
myTodoCollection.addTodo("Hack CIA Database");
myTodoCollection.markCompleted(4, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.removeComplete();
console.log("====================================");
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("===================================="); 
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());