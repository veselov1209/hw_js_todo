const btn = document.querySelector('#btn');
const task = document.querySelector('#task');
const taskList = document.querySelector('.taskList');
const totalTasks = document.querySelector('.totalTasks');
const deleteAllTasks = document.querySelector('.deleteBtn')
let taskCounter = 0;


function createTask() {
    if (task.value) {
    taskCounter++;
    const item = document.createElement('li');    
    item.setAttribute('class', 'taskItem');
    item.innerText = task.value;
    taskList.append(item);
    task.value = '';
    totalTasks.innerText = `Total tasks: ${taskCounter}`;
    item.addEventListener('click', () => item.classList.toggle('active'));
    const delBtn = document.createElement('div');
    delBtn.classList = 'delBtn';
    delBtn.innerText = 'X';
    item.append(delBtn);
    const delItem = document.querySelectorAll('.delBtn');
    delItem.forEach(el => el.addEventListener('click', delItemBtn));
    }
}

function deleteAll() {
    taskCounter = 0;
    const allTasks = document.querySelectorAll('li');
    allTasks.forEach(el => taskList.removeChild(el));
    totalTasks.innerText = `Total tasks: ${taskCounter}`;
}

function delItemBtn() {
    taskCounter--;
    totalTasks.innerText = `Total tasks: ${taskCounter}`;
    taskList.removeChild(this.parentNode);
    
}

btn.addEventListener('click', createTask);
deleteAllTasks.addEventListener('click', deleteAll);




