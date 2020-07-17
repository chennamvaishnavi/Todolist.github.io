const todoInput=Document.queryselector("todo-input");
const todoButtom=Document.queryselector("todo-button");
const todoList=Document.queryselector("todo-list");
todoButton.addElementlistner('click',addition);

function addTodo(event)
{

 event.preventDefault();
 const todoDiv=document.createElment("div");
 todoDiv.classList.add('todo');

 const newTodo=document.createElment('li');
 newTodo.innerText='hey';
 newTodo.classList.add('todo-item')
 todoDiv.appendChild(newTodo);
 //check mark button
 const completedButton=document.createElment('button');
 completedButton.innerHTML='<i class="fas fa-check"></i>';
 completedButton.classList.add("complete-btn");
 todoDiv.appendChild(completedButton);
 //check trash button
 const trashButton=document.createElment('button');
 trashButton.innerHTML='<i class="fas fa-trash"></i>';
 trashButton.classList.add("complete-btn");
 todoDiv.appendChild(trashButton);
 //append To do list
 todoList.appendChild(todoDiv);

}