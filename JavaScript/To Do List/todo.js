let tasks = [];
const tasksList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');
const deleteButton = document.getElementsByClassName("delete");

function addTaskToDOM(task){
    const li=document.createElement("li");

    li.innerHTML= `
            <input type="checkbox" id="${task.id}" ${task.done?"checked":""} class="custom-checkbox">
            <label for="${task.id}">${task.text}</label>
            <img src="bin.png" class="delete" data-id="${task.id}" />
        `;

    tasksList.append(li);
}


function renderList () {
    tasksList.innerHTML="";

    for (var i=0; i<tasks.length; i++){
        addTaskToDOM(tasks[i]);
    }
}

function toggleTask (taskId) {
    // tasks.forEach(function(task){
    //     if (task.id==taskId){
    //         task.done=!task.done;
    //         renderList();
    //         showNotification("Task Toggled Successfully");
    //         return;
    //     }
    // })

    let task=tasks.filter(tid=> tid.id===taskId);
    if (task.length>0){
        const custom=task[0];
        custom.done= !custom.done;
        renderList();
        showNotification("Task Toggled Successfully");
        return;
    }
    showNotification("Task not found");
}

function deleteTask (taskId) {
    const newTasks=tasks.filter(task=> task.id!==taskId);
    tasks=newTasks;
    renderList();
    showNotification("Task Deleted Successfully");
    tasksCounter.innerText=tasks.length;
}

function addTask (task) {
    if (task){
        tasks.push(task);
        renderList();
        showNotification("Task Added Succesfully");
        tasksCounter.innerText=tasks.length;
        return;
    }

    showNotification("Task can not be added");

    tasksCounter.innerText=tasks.length;
}

function showNotification(text) {
    alert(text);
}

function handleInputKeypress(e){
    if (e.key=="Enter"){
        const text=e.target.value;

        if (!text){
            showNotification("Task can't be empty");
            return;
        }

        const task={
            text,
            id: Date.now().toString(),
            done: false
        }

        e.target.value="";
        addTask(task);
    }
}

addTaskInput.addEventListener("keyup", handleInputKeypress);

function handleClickEvent(e){
    let target=e.target;
    
    if (target.className==="delete"){
        let taskId=target.dataset.id;
        deleteTask(taskId);
        return;
    }
    else if(target.className==="custom-checkbox"){
        let taskId=target.id;
        toggleTask(taskId);
        return;
    }
}


document.addEventListener("click", handleClickEvent);