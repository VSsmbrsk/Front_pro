const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const list = document.getElementById('todos__wrapper');

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();

    list.innerHTML = "";
    data.forEach(todo => addTaskToList(todo));
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = input.value.trim();
    if (!title) return;

    const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    });

    const newTodo = await response.json();

    addTaskToList(newTodo);
    form.reset();
});

function addTaskToList(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.dataset.id = todo.id;

    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.checked = todo.completed || false;

    inputCheckbox.addEventListener("click", async () => {
        const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: todo.title,
                completed: inputCheckbox.checked
            }),
        });

        if (inputCheckbox.checked) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = 'none';
        }
    });

    const span = document.createElement('span');
    span.textContent = todo.title;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.classList.add('todo-item__delete');

    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "DELETE",
        });

        li.remove();
    });

    li.appendChild(inputCheckbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}
