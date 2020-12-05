'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

const todoData = [JSON.parse(todoData)];

const render = function() {

    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item){
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

        // const btnTodoRemove = li.querySelector('.todo-remove');
        // btnTodoRemove.addEventListener('click', function(){
        //     item.remove();
        //     render();
        // });
        
        // li.innerHTML = localStorage.getItem('memory');

        // newToDo2 = JSON.parse(newToDo);
    });    
    
};

// const showText = function(){
//     li.textContent = localStorage.myText;
// }

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    if(headerInput.value){
        const newToDo = {
            value: headerInput.value,
            completed: false
        }

        todoData.push(newToDo);

        let json = JSON.stringify(todoData);

        localStorage.setItem('memory', json);
        // showText();

        headerInput.value = '';

        render();
    };
});

render();