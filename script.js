document.getElementById("add-btn").addEventListener("click", function () {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();
  
    if (todoText === "") {
      alert("Please enter a todo item.");
      return;
    }
  
    addTodo(todoText);
    todoInput.value = "";
  });
  
  function addTodo(text) {
    const todoList = document.getElementById("todo-list");
  
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
  
    const todoText = document.createElement("span");
    todoText.textContent = text;
  
    const actions = document.createElement("div");
    actions.className = "actions";
  
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => editTodo(todoText));
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => listItem.remove());
  
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
  
    listItem.appendChild(todoText);
    listItem.appendChild(actions);
    todoList.appendChild(listItem);
  }
  
  function editTodo(todoText) {
    const newText = prompt("Edit your todo:", todoText.textContent);
    if (newText !== null && newText.trim() !== "") {
      todoText.textContent = newText.trim();
    }
  }
  