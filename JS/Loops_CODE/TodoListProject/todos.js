const todoList = ['Collect Chicken Eggs', 'Clear Litter Box'];
let user = ''

while (user !== 'quit' && user !=='q') {
    user = prompt('What would you want to do')
    if (user) {
        user = user.trim().toLowerCase();

        if (user === 'new') {
            let newTodo = prompt('Enter new todo');
            todoList.push(newTodo);
            console.log(`${newTodo} added to list`);
        }
        else if (user === 'delete') {
            let index = parseInt(prompt('Ok, enter the index to delete'));
            if (!Number.isNaN(index)) {
                todoDeleted = todoList.splice(index, 1);
                console.log(`Todo removed: ${todoDeleted}`);
            }
            else {
                console.log('Unknown index')
            }
        }
        else if (user === 'list') {
            console.log('*************');
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i}: ${todoList[i]}`);
            }
            console.log('*************');
        }
    }
}
console.log('OK, YOU QUIT THE APP');