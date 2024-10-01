// script.js

document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value;

    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskList = document.getElementById('task-list');

    // Create list item
    const li = document.createElement('li');
    li.textContent = task;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(removeBtn);

    // Toggle completion
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
}
