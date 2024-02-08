import TodoItem from "./TodoItem";

const data = [
    {id : 1, task : 'Buy Milk', isCompleted : true},
    {id : 2, task : 'Pay Bills', isCompleted : false},
]

console.log('My Todo List');
for (let i = 0; i < data.length; i++) {
    let todoItem = new TodoItem(data[i].id, data[i].task, data[i].isCompleted);
    todoItem.printDetails();
}