import UpdateStorage from './Modules/updateStorage.js';
import { addTask } from './Modules/addRemove.js';

const createButton = (className, iconClass) => {
  const button = document.createElement('button');
  const icon = document.createElement('i');
  icon.classList.add(...iconClass.split(' '));
  button.appendChild(icon);
  button.classList.add(...className.split(' '));
  return button;
};

const displayTasks = (taskInject) => {
  const tasks = JSON.parse(localStorage.getItem('storedStTask')) || [];
  taskInject.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('li');
    li.setAttribute('id', task.index);
    taskInject.appendChild(li);
    const span = document.createElement('span');
    span.classList.add('task-wrapper');
    li.appendChild(span);
    const check = document.createElement('input');
    check.classList.add('task-check');
    check.type = 'checkbox';
    check.checked = task.completed;
    span.appendChild(check);
    const label = document.createElement('label');
    label.classList.add('dat-task');
    label.innerText = task.description;
    span.appendChild(label);
    const div = document.createElement('div');
    li.appendChild(div);
    const edtBtn = createButton('task-edit', 'far fa-edit');
    const dltBtn = createButton('task-delete', 'far fa-trash-alt');
    div.appendChild(edtBtn);
    div.appendChild(dltBtn);
  });
};

class Task {
  constructor(value) {
    this.description = value;
    this.completed = false;
    const list = JSON.parse(localStorage.getItem('storedStTask')) || [];
    this.index = list.length + 1;
  }
}

const add = (taskInput, taskInject) => {
  if (taskInput.value.trim() !== '') {
    const list = JSON.parse(localStorage.getItem('storedStTask')) || [];
    const newTask = new Task(taskInput.value);
    addTask(list, newTask);
    UpdateStorage(list);
    displayTasks(taskInject);
    taskInput.value = '';
    taskInput.placeholder = 'Add another Task!';
  } else { taskInput.placeholder = 'Please enter a valid Task!'; }
};

const deleteTask = (e, taskInject) => {
  if (e.target.classList.contains('task-delete')) {
    let list = JSON.parse(localStorage.getItem('storedStTask')) || [];
    const eLi = e.target.parentNode.parentNode.parentNode;
    list = list.filter((item) => item.index !== Number(eLi.id));
    list.forEach((item, i) => {
      item.index = i + 1;
    });
    UpdateStorage(list);
    displayTasks(taskInject);
  }
};

const gameChange = (e) => {
  if (e.target.classList.contains('task-check')) {
    const list = JSON.parse(localStorage.getItem('storedStTask')) || [];
    const changer = e.target.parentNode.parentNode;
    list.forEach((item) => {
      if (item.index === Number(changer.id)) {
        item.completed = !item.completed;
      }
    });
    UpdateStorage(list);
  }
};

const demolishAll = (taskInject) => {
  const allTasks = JSON.parse(localStorage.getItem('storedStTask')) || [];
  const UncompeledTasks = allTasks.filter((task) => !task.completed);
  UncompeledTasks.forEach((task, i) => { task.index = i + 1; });
  UpdateStorage(UncompeledTasks);
  displayTasks(taskInject);
};

export {
  displayTasks, deleteTask, add, gameChange, demolishAll,
};
