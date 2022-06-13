document.addEventListener("DOMContentLoaded", () => {
  // your code here
  typeTaskInput()
});
document.addEventListener("submit",function(e){
  
  clickSubmit()
});

function typeTaskInput(){
  let input=document.getElementById("new-task-description").textContent
}

function clickSubmit(){
  e.preventDefault()
  let newTaskDescription=document.getElementById("new-task-description");
  let newTask=document.createElement("li");
  newTask.textContent=newTaskDescription.value;
  appendNewTask(newTask);
  e.target.reset();

};

const appendNewTask=task=>{
  document.getElementById("tasks").appendChild(task);
}
