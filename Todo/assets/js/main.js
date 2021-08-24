
// EVENTS
// Selected elements
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const addTodoButton = document.querySelector('#add-todo-button');



// eventListeners();

// function eventListeners() {
//     // submit event
//     form.addEventListener('submit',createListItem);

//     // delete event
//     taskList.addEventListener('click',deleteItem)
// }



// Helper functions

// const clearInput = (e) => {
//     if (e.target.className==='btn btn-success') {
//         e.target.parentElement.remove();
//     }
//     e.preventDefault();
//     todoInput.value = "";
// }


const editInput = (e) => {
    if (e.target.className === 'btn btn-warning') {
        let values = e.target.parentElement.previousElementSibling.innerText;
        todoInput.value = values;
        addTodoButton.innerText = "Update"
        addTodoButton.style.backgroundColor = "#ffcd39"
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();

}

const clearInput = (e) => {
    if (e.target.className === 'btn btn-danger') {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}


const doneInput = (e) => {
    if (e.target.className === 'btn btn-success') {
        const todo = e.target.parentElement.parentElement;
        todo.classList.toggle("completed");
        e.target.innerText = "Undone"
    }
    e.preventDefault();
}

todoList.addEventListener('click', clearInput);
todoList.addEventListener('click', editInput);
todoList.addEventListener('click', doneInput);

const createListItem = todoObject => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center'
    listItem.innerHTML = `
        <p>${todoObject.text}</p>
        <div>
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-success">Done</button>
            <button class="btn btn-warning">Edit</button>
        </div>
    `
    todoInput.value = "";
    listItem.setAttribute('data-id', todoObject.id)
    todoList.append(listItem);
}

// Data
const todos = [
    {
        id: 0,
        text: 'first todo',
        status: 'NOT_COMPLETED'
    },
    {
        id: 1,
        text: 'second todo',
        status: 'NOT_COMPLETED'
    }
];
let initialId = 2;


todos.forEach((todo) => {
    createListItem(todo);
})

// Listeners
todoInput.addEventListener('keydown', function (e) {
    this.style.border = '1px solid green';
    switch (e.key) {
        case 'Enter':
            const todoObject = {
                id: ++initialId,
                text: this.value,
                status: 'NOT_COMPLETED'
            }
            todos.push(todoObject);
            createListItem(todoObject);
            break;
        default:
            break;
    }
});

addTodoButton.addEventListener('click', function () {
    const todoObject = {
        id: ++initialId,
        text: todoInput.value,
        status: 'NOT_COMPLETED'
    }
    addTodoButton.innerText = "Add"
    addTodoButton.style.backgroundColor = "#0d6efd"
    todos.push(todoObject);
    createListItem(todoObject);
});


// editde text gelir inputa dolacaq input.value=text 

// add yox update yazilacaq