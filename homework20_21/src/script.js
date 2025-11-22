import './main.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

$(document).ready(function () {
    loadTodos();

    $('.js--form').on('submit', function (event) {
        event.preventDefault();

        const taskText = $('.js--form__input').val().trim();
        if (!taskText) return;

        const task = { text: taskText, completed: false };

        addTaskToList(task);
        saveTask(task);

        this.reset();
    });

    function addTaskToList(task) {
        const $li = $('<li>').addClass('todo-item');

        const $checkbox = $('<input type="checkbox">')
            .prop("checked", task.completed)
            .on("click", function () {
                task.completed = $(this).is(":checked");
                $li.css("text-decoration", task.completed ? "line-through" : "none");
                updateTask(task);
            });

        const $span = $('<span>')
            .addClass('todo-item__description')
            .text(task.text);

        const $deleteBtn = $('<button>')
            .addClass('todo-item__delete')
            .text('Видалити')
            .on('click', () => {
                $li.remove();
                removeTask(task.text);
            });

        $li.on('click', function () {
            $('#modalText').text(task.text);

            const modal = new bootstrap.Modal($('#taskModal')[0]);
            modal.show();
        });

        if (task.completed) {
            $li.css("text-decoration", "line-through");
        }

        $li.append($checkbox, $span, $deleteBtn);
        $('#todos__wrapper').append($li);
    }

    function saveTask(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTodos() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(addTaskToList);
    }

    function updateTask(updatedTask) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.map(t => t.text === updatedTask.text ? updatedTask : t);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function removeTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(t => t.text !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
