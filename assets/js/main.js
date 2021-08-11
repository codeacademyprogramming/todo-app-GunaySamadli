// ATTRIBUTES

// const heading = document.querySelector('.heading');
// heading.setAttribute('id', '5555');
// const headingIdAttributeValue = heading.getAttribute('id');


// const headings = Array.from(document.querySelectorAll('.heading-2'));
// headings.forEach(heading => {
//     const color = heading.getAttribute('data-color');
//     heading.style.color = color;
// })

// const tabNavigations = Array.from(document.querySelectorAll('.tabs-navigation li'));
// const tabContents = Array.from(document.querySelectorAll('.tabs-contents .tab-content'));
// const clearActives = () => {
//     tabNavigations.forEach(tabNavigation => {
//         tabNavigation.classList.remove('active');
//     });
//     tabContents.forEach(tabContent => {
//         tabContent.classList.remove('active');
//     });
// }
// tabNavigations.forEach(tabNavigation => {
//     tabNavigation.onclick = function () {
//         clearActives();
//         const targetId = tabNavigation.getAttribute('data-target') //home
//         const targetContent = document.getElementById(targetId);
//         tabNavigation.classList.add('active');
//         targetContent.classList.add('active');
//     }
// });

// EVENTS
// Selected elements
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const addTodoButton = document.querySelector('#add-todo-button');


// Helper functions
const clearInput = () => {
    todoInput.value = "";
}

const createListItem = todoObject => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center'
    listItem.innerHTML = `
        ${todoObject.text}
        <div>
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-success">Done</button>
            <button class="btn btn-warning">Edit</button>
        </div>
    `
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
            clearInput();
            break;
        default:
            break;
    }
});

addTodoButton.addEventListener('click', function () {
    createListItem(todoInput.value);
    clearInput();
});
