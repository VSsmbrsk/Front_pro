addBtn.addEventListener("click", () => {
    const textTask = taskInput.value.trim()
    if (taskInput !== '') {
        const newTask = document.createElement('li');
        const btnTask = document.createElement('button');
        btnTask.textContent = 'Delete';
        newTask.textContent = textTask;
        btnTask.style.marginLeft = '15px';
        newTask.appendChild(btnTask);
        list.appendChild(newTask);
        taskInput.value = '';
    }
})

list.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});