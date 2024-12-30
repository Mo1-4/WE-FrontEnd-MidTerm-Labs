let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function createTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();
  if(taskValue){
    tasks.push({id: Date.now(), name: taskValue, done: false});
    taskInput.value = "";
    renderTask();
  }
}

function renderTask(){
  saveTasks();
  let taskLists = document.getElementById("taskLists")
  taskLists.innerHTML = "";
  
  tasks.forEach((task) =>{
    let listItem = document.createElement("li")
    let taskClass = task.done ? "done" : "";
    listItem.innerHTML = `
                <li>
                    <span class="${taskClass}">${task.name}</span>
                    <span>
                        <button class="btn btn-secondary mb-1" onclick="doneTask(${task.id})">Done</button>
                        <button class="btn btn-primary mb-1" onclick="editTask(${task.id})">Edit</button>
                        <button class="btn btn-danger mb-1" onclick="deleteTask(${task.id})">Delete</button>
                    </span>
                </li>
                `
    taskLists.appendChild(listItem)
  })
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editTask(id){
  let newTask = prompt("Edit Your Task:")
  if (newTask){
    tasks = tasks.map(
      task => task.id === id ?  { ...task, name: newTask } : task
    )
    renderTask()
  }
}

function doneTask(id){
  tasks = tasks.map(task => task.id === id ? {...task, done: !task.done} : task)
  renderTask()
}

function deleteTask(id){
  if(confirm('delete ?')){
    tasks = tasks.filter(task => task.id !== id)
  }
  renderTask()
}

document.addEventListener("DOMContentLoaded", renderTask);