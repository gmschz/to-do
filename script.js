// Select DOM elements
const addBtn = document.getElementById("add-btn");
const inputField = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const checkAllBtn = document.getElementById("check-all-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");

// Function to create a new todo item
function addTodo() {
  const todoText = inputField.value.trim();

  if (todoText !== '') {
    // Create list item
    const li = document.createElement('li');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check-btn');

    // Create task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = todoText;

    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '✏️';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
      const newText = prompt("Edit your task:", taskSpan.textContent);
      if (newText !== null && newText.trim() !== '') {
        taskSpan.textContent = newText.trim();
      }
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      todoList.removeChild(li);
    });

    // Create action container
    const actions = document.createElement('div');
    actions.classList.add('todo-actions');
    actions.appendChild(checkbox);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    // Append task and actions to li
    li.appendChild(taskSpan);
    li.appendChild(actions);

    // Add to the list
    todoList.appendChild(li);

    // Clear input
    inputField.value = '';
  } else {
    alert("Please enter a task!");
  }
}

// Event listener for Enter key
inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

// Event listener for Add button
addBtn.addEventListener('click', addTodo);

// Check All functionality
checkAllBtn.addEventListener('click', () => {
  const checkboxes = todoList.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = true);
});

// Delete All functionality
deleteAllBtn.addEventListener('click', () => {
  todoList.innerHTML = '';
});