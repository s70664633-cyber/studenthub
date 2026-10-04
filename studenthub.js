// ===============================
// StudentHub JavaScript
// ===============================


// STUDENT LOGIN BUTTON
function showMessage() {
    alert("Welcome to StudentHub! Student login feature is coming soon.");
}


// SUBJECT BUTTON
function openSubject(subjectName) {

    alert(
        subjectName +
        " section selected.\n\nLearning materials will be available soon."
    );
}


// RESOURCE BUTTON
function openResource(resourceName) {

    alert(
        resourceName +
        " section selected.\n\nThis resource section is currently being developed."
    );
}


// ===============================
// STUDY PLANNER
// ===============================

function addTask() {

    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = input.value.trim();

    // Check empty task
    if (taskText === "") {
        alert("Please enter a study task.");
        return;
    }

    // Create list item
    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    // Click task to mark completed
    listItem.addEventListener("click", function () {

        if (listItem.style.textDecoration === "line-through") {

            listItem.style.textDecoration = "none";
            listItem.style.opacity = "1";

        } else {

            listItem.style.textDecoration = "line-through";
            listItem.style.opacity = "0.6";

        }

    });


    // Add task to list
    taskList.appendChild(listItem);


    // Clear input
    input.value = "";
}


// ===============================
// ENTER KEY SUPPORT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("taskInput");

    input.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            addTask();

        }

    });

});