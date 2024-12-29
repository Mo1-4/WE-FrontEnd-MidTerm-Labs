let addListBtn = document.getElementById("addListBtn");
let listInput = document.getElementById("listInput");
let lists = document.getElementById("lists");

addListBtn.addEventListener("click", () => {
    let list = document.createElement("div");
    list.innerHTML = `
        <div class="list">
            <p class="task">${listInput.value}</p>
            <button id="doneList">Done</button>
            <button id="deleteList">Delete</button>
        </div>
    `;
    if(listInput.value == "" || listInput.value.length < 5 || listInput.value == null){
        alert("Please Enter A Task");
    } else {
        lists.appendChild(list);
        listInput.value = "";
    }
});

let list = document.querySelectorAll(".list");


listInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        addListBtn.click();
    }
});

lists.addEventListener("click", (e) => {
    let task = e.target.parentElement.querySelector(".task");
    if (e.target.id == "doneList") {
        task.style.textDecoration = "line-through";
    }
});

lists.addEventListener("click", (e) => {
    if (e.target.id == "deleteList") {
        e.target.parentElement.remove();
    }
});


