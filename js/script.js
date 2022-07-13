const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('#todoBtn');
const todoList = document.querySelector('.list');

const todoApp = () =>{
    const li = document.createElement('li');
    li.innerHTML = todoInput.value;
    todoList.appendChild(li);
    todoInput.value = "";
    li.addEventListener('click',()=>{
        li.style.textDecoration = 'line-through'
    })
    li.ondblclick = () =>{
        li.remove();
    }
}

todoBtn.onclick = todoApp;