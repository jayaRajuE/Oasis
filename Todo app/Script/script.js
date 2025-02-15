document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let task = {
        text: taskText,
        completed: false,
        id: Date.now()
    };

    let tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    taskInput.value = "";
    loadTasks();
}

function loadTasks() {
    let tasks = getTasks();
    let pendingTasks = document.getElementById("pendingTasks");
    let completedTasks = document.getElementById("completedTasks");

    pendingTasks.innerHTML = "";
    completedTasks.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                ${!task.completed ? `<button class="complete-btn" onclick="markComplete(${task.id})">Complete</button>` : ""}
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        if (task.completed) {
            completedTasks.appendChild(li);
        } else {
            pendingTasks.appendChild(li);
        }
    });
}

function markComplete(taskId) {
    let tasks = getTasks();
    tasks.forEach(task => {
        if (task.id === taskId) {
            task.completed = true;
        }
    });
    saveTasks(tasks);
    loadTasks();
}

function deleteTask(taskId) {
    let tasks = getTasks().filter(task => task.id !== taskId);
    saveTasks(tasks);
    loadTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
