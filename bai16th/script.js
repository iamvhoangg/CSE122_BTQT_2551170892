const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const remainingCount = document.getElementById('remainingCount');

function updateRemainingCount() {
    const tasks = taskList.getElementsByClassName('task-item');
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].classList.contains('completed')) {
            count++;
        }
    }
    remainingCount.textContent = `Còn ${count} việc chưa hoàn thành`;
}

addBtn.addEventListener('click', function() {
    const text = taskInput.value.trim();
    if (text === '') {
        alert('Vui lòng nhập nội dung công việc!');
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <div class="task-content">
            <span class="checkbox"></span>
            <span class="task-text">${text}</span>
        </div>
        <button class="delete-btn">Xoá</button>
    `;

    taskList.appendChild(li);

    taskInput.value = '';

    updateRemainingCount();
});

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

taskList.addEventListener('click', function(e) {
    const target = e.target;

    if (target.classList.contains('delete-btn')) {
        const taskItem = target.closest('.task-item');
        taskItem.remove();
        updateRemainingCount();
    } 
    else if (target.closest('.task-content')) {
        const taskItem = target.closest('.task-item');
        taskItem.classList.toggle('completed');
        updateRemainingCount();
    }
});

updateRemainingCount();