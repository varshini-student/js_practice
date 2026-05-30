const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    // Check empty input
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create span for task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Toggle completed
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add span and button to li
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});