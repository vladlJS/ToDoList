'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

const todoData = [];


    todoData = JSON.parse(localStorage.getItem('memory'));

const render = function() {

    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item, i){
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
                '<button class="todo-remove"></button>' +
                '<button class="todo-complete"></button>' +
            '</div>';

        if(item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoComplete = li.querySelector('.todo-complete');

        btnTodoComplete.addEventListener('click', function(){
            item.completed = !item.completed;
            render();
        });

        const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', function(){
            todoData.splice(i, 1);
            localStorage.setItem('memory', JSON.stringify(todoData));
            render();
        });
        
    }); 
       
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    if(headerInput.value){
        const newToDo = {
            value: headerInput.value,
            completed: false
        }

        todoData.push(newToDo);
        localStorage.setItem('memory', JSON.stringify(todoData));
        headerInput.value = '';
        render();
    };
});

render();