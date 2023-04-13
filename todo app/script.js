// script.js
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task event listener
addBtn.addEventListener('click', addTask);

// Add task function
function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Delete task event listener
taskList.addEventListener('click', deleteTask);

// Delete task function
function deleteTask(event) {
    if (event.target.classList.contains('deleteBtn')) {
        const li = event.target.closest('li');
        li.remove();
    }
}
