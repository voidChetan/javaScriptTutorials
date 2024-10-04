var taskListArray = [];
var isLocalDataPresent  = localStorage.getItem("todoTaskList");
if(isLocalDataPresent !== null) {
    taskListArray = JSON.parse(isLocalDataPresent);
    renderTaskList()
}

function saveTask() {
    debugger;
    var taskName = document.getElementById("txtItem").value;
    var todoObject = {
        taskId: taskListArray.length + 1,
        taskName:  taskName
    };
    taskListArray.push(todoObject); 
    localStorage.setItem("todoTaskList", JSON.stringify(taskListArray));
    renderTaskList()
}

function renderTaskList() {
    debugger;
    document.getElementById("myTaskList").innerHTML = "";
    for(var index= 0;index< taskListArray.length;index++) {
        var dynamicLi =  document.createElement("li");
        dynamicLi.classList.add("task");
        var myLable = document.createElement("label");
        var myPara = document.createElement("p");
        myPara.textContent = taskListArray[index].taskName;
        myLable.appendChild(myPara);
        dynamicLi.appendChild(myLable);

        var myDiv =  document.createElement("div");
        myDiv.classList.add("settings");
        var editIcon = document.createElement("i");
        editIcon.classList.add("fa");
        editIcon.classList.add("fa-pencil-square");

        editIcon.addEventListener("click", editTask);
        editIcon.taskId = taskListArray[index].taskId;
        var deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa");
        deleteIcon.classList.add("fa-trash"); 
        deleteIcon.addEventListener("click", deleteTask);
        deleteIcon.taskId = taskListArray[index].taskId;
        myDiv.appendChild(editIcon);
        myDiv.appendChild(deleteIcon);
        dynamicLi.appendChild(myDiv);

        document.getElementById("myTaskList").appendChild(dynamicLi);

    } 
}
function deleteTask(event) {
    debugger;
    var index =  taskListArray.findIndex(m=>m.taskId == event.target.taskId);
    taskListArray.splice(index,1);
    localStorage.setItem("todoTaskList", JSON.stringify(taskListArray));
    renderTaskList() 
}
function editTask(event) {
    debugger;
    var obj =  taskListArray.find(m=>m.taskId == event.target.taskId);
    document.getElementById("txtItem").value = obj.taskName;
}
function removeAll() {
    taskListArray.splice(0);
    renderTaskList() 
}