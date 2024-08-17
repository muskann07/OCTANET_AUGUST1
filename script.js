// script.js

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Function to add a task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div class="task-actions">
                <button class="complete-btn"><i class="fas fa-check"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        taskList.appendChild(li);

        // Mark task as complete
        li.querySelector('.complete-btn').addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        // Delete task
        li.querySelector('.delete-btn').addEventListener('click', function () {
            li.remove();
        });
    }

    // Add task on button click
    addTaskButton.addEventListener('click', function () {
        if (taskInput.value.trim() !== '') {
            addTask(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    // Filter tasks
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            const tasks = taskList.querySelectorAll('li');

            tasks.forEach(task => {
                switch (filter) {
                    case 'all':
                        task.style.display = 'flex';
                        break;
                    case 'completed':
                        task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                        break;
                    case 'pending':
                        task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                        break;
                }
            });
        });
    });
});
