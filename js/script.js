// Temporary Storage For Todo
let todos = [];

// Function to Add Todo
function addToDo(){
    const toDoName = document.getElementById("todo-name");
    const toDoDate = document.getElementById("todo-date");

    if(toDoName.value === "" || toDoDate.value === ""){
        alert("Please fill in both fields.");
    } else {
        const newToDo = {
            task: toDoName.value,
            dueDate: toDoDate.value,
            status: "Not Completed"
        };
        // add to todos array
        todos.push(newToDo);
        renderTodos();
        alert("Todo added successfully!");

        // Clear input fields
        toDoName.value = "";
        toDoDate.value = "";
    }  
}

// Function To Render Todos
function renderTodos(){
    const todoList = document.getElementById("todo-list");

    // Clear existing todos
    todoList.innerHTML = "";

    // Render each todo
    todos.forEach((todo, index) => {
        const row = document.createElement("tr");  

        // Validate action icon based on status
         const actionIcon =
            todo.status === "Not Completed"
                ? `<i class="bi bi-check-circle cursor-pointer"
                      onclick="updateTodoStatus(${index}, 'Completed')"></i>`
                : `<i class="bi bi-x-circle cursor-pointer"
                      onclick="updateTodoStatus(${index}, 'Not Completed')"></i>`;
        
        row.innerHTML = `
            <td class="p-3 text-xs font-semibold">${todo.task}</td>
            <td class="p-3 text-xs font-semibold">${todo.dueDate}</td>
            <td class="p-3 text-xs font-semibold">${todo.status}</td>
            <td class="p-3 text-xs font-semibold">${actionIcon}</td>
        `;
        todoList.appendChild(row);
    });
}

// Function To Delete All Todo
function deleteAllTodos(){
    const todoList = document.getElementById("todo-list");

    // Clear existing todos
    todos = [];
    renderTodos();
    alert("All todos successfully deleted!");

    // Add no task found row
   todoList.innerHTML = `
   <td class="p-3 text-xs font-semibold" colspan="4">No task found</td>`;
}


// Function To Filter Todo
function filterTodos(){
    const filterStatus = document.getElementById("filter-status").value;
    const todoList = document.getElementById("todo-list"); 

    // Clear existing todos
    todoList.innerHTML = "";   
    let hasTodos = false;

    console.log(todos);

    // Filter and render todos
     todos.forEach((todo, index) => {
        console.log(filterStatus);
       if(filterStatus === "All Status" || todo.status === filterStatus){
            const row = document.createElement("tr");  
            hasTodos = true;

             // Validate action icon based on status
            const actionIcon =
                todo.status === "Not Completed"
                    ? `<i class="bi bi-check-circle cursor-pointer"
                        onclick="updateTodoStatus(${index}, 'Completed')"></i>`
                    : `<i class="bi bi-x-circle cursor-pointer"
                        onclick="updateTodoStatus(${index}, 'Not Completed')"></i>`;

            row.innerHTML = `
                <td class="p-3 text-xs font-semibold">${todo.task}</td>
                <td class="p-3 text-xs font-semibold">${todo.dueDate}</td>
                <td class="p-3 text-xs font-semibold">${todo.status}</td>
                <td class="p-3 text-xs font-semibold">${actionIcon}</td>
            `;
            todoList.appendChild(row);
        }
    }
);
    // Add no task found row
    if(hasTodos === false){
        todoList.innerHTML = `
        <td class="p-3 text-xs font-semibold" colspan="4">No task found</td>`;
    }

}

// Function To Update Todo Status
function updateTodoStatus(index, status){
    todos[index].status = status;
    alert("Todo status updated to " + status);
    renderTodos();
}