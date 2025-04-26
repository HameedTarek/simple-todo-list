// تحديد العناصر
const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const completedList = document.getElementById('completedList');

// وظيفة لإضافة مهمة جديدة
addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();

  if (taskText !== '') {
    createTask(taskText);
    todoInput.value = '';
  }
});

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

function createTask(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginRight = '10px';

  const taskSpan = document.createElement('span');
  taskSpan.textContent = text;

  const editBtn = document.createElement('button');

  editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  editBtn.style.marginLeft = '10px';

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  deleteBtn.style.marginLeft = '5px';

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      taskSpan.style.textDecoration = 'line-through';
      taskSpan.style.opacity = '0.6';
      completedList.appendChild(li);
    } else {
      taskSpan.style.textDecoration = 'none';
      taskSpan.style.opacity = '1';
      todoList.appendChild(li);
    }
  });

  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit your task:', taskSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
      taskSpan.textContent = newText.trim();
    }
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
}
