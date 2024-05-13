function addTask(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        const todoTasks = document.getElementById('todo-tasks');
        const taskElement = document.createElement('div');
        taskElement.textContent = taskName;
        todoTasks.appendChild(taskElement);
        taskInput.value = '';

        // Move task through columns
        moveTaskThroughColumns(taskElement);
    }
}

function moveTaskThroughColumns(taskElement) {
    moveTaskToProgress(taskElement);
}


function moveTaskToProgress(taskElement) {
    const progressTasks = document.getElementById('progress-tasks');
    progressTasks.appendChild(taskElement);

    // Simulate time taken for progress
    setTimeout(() => {
        moveTaskToTesting(taskElement);
    }, 2000);
}

function moveTaskToTesting(taskElement) {
    const testingTasks = document.getElementById('testing-tasks');
    testingTasks.appendChild(taskElement);

    // Simulate testing
    setTimeout(() => {
        const taskName = taskElement.textContent.toLowerCase();
        // Check if task name contains specified keywords
        if (taskName.includes('sans') || taskName.includes('nayan') || taskName.includes('mern')) {
            moveTaskToDone(taskElement);
            taskElement.style.backgroundColor='green'  ;
        } else {
            // If condition not met, move back to To Do and display in the admin panel
            const todoTasks = document.getElementById('todo-tasks');
            todoTasks.appendChild(taskElement);
            console.log(taskElement)

            // Change task color to red
            taskElement.style.backgroundColor='red'  ;
            // Add mouseover event to show message
            taskElement.addEventListener('mouseover', () => {
                alert("Rejected");
            });
            
            alert("Condition not met. Task moved back to To Do.");
        }
    }, 400);
}

function moveTaskToDone(taskElement) {
    const doneTasks = document.getElementById('done-tasks');
    doneTasks.appendChild(taskElement);
}
