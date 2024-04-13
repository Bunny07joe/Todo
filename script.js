document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== '') {
            addTodoToList(todoText);
            input.value = '';
        }
    });

    function addTodoToList(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
    }
});
