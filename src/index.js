
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const taskInput = document.getElementById('new-task-description');
    const taskText = taskInput.value;

    if (taskText === "") return; // Do nothing if the input is empty

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear the input field

    // Add event listener to the delete button
    li.querySelector('.delete-btn').addEventListener('click', function() {
      taskList.removeChild(li);
    });
  });
});
	