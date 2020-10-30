//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')
const getAim = document.querySelector('.a')

//Event listeners
document.addEventListener('DOMContentLoaded', getTodos); 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);
getAim.addEventListener('click', aimTodo);





//functions 
function addTodo(event){
    event.preventDefault();
//todo div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//create li
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

//save to local storage
saveLocalTodos(todoInput.value);

//check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//append to list
todoList.appendChild(todoDiv);


// clear input value
todoInput.value = "";
   


}



function deleteCheck(e){
    const item = e.target;
    //delete todo
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        // todo.remove();
    }
//checkmark
if (item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
} 
//AIM todo

    const inImgs = document.getElementsByClassName('img-1');
    const count = document.getElementsByClassName("completed").length;
    out_arr.innerHTML = (count + " completed");

    if (count >= 2){
    inImgs[5].style.cssText = 'opacity: 90%; color:white; text-align: center;';
} else if (count <= 2){
    inImgs[5].style.cssText = 'opacity: 10%; color:transperent;';  
}
if (count >= 5){
    inImgs[4].style.cssText = 'opacity: 90%; color:white; text-align: center;';
} else if (count <= 5){
    inImgs[4].style.cssText = 'opacity: 10%; color:transperent; ';  

} 
if (count >= 10){
    inImgs[3].style.cssText = 'opacity: 90%; color:white; text-align: center;';
} else if (count <= 10){
    inImgs[3].style.cssText = 'opacity: 10%; color:transperent; ';  
} 
if (count >= 15){
    inImgs[2].style.cssText = 'opacity: 90%; color:white; text-align: center;';
} else if (count <= 15){
    inImgs[2].style.cssText = 'opacity: 10%; color:transperent; ';  

} 
if (count >= 20){
    inImgs[1].style.cssText = 'opacity: 90%; color:white; text-align: center;';
} else if (count <= 20){
    inImgs[1].style.cssText = 'opacity: 10%; color:transperent; ';  

} 
if (count >= 25){
    inImgs[0].style.cssText = 'opacity: 90%; color:white; text-align: center;';
} else if (count <= 25){
    inImgs[0].style.cssText = 'opacity: 10%; color:transperent; ';  

} 
}



//filter
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all": 
            todo.style.display = "flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";

                } else { 
                    todo.style.display = "none";

                } break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    } else { 
                        todo.style.display = "none";
        } break; 
    }
    });

}

//local storage
function saveLocalTodos(todo){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); 
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    
}

function getTodos (){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); 
    }
    todos.forEach(function(todo){
//todo div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//create li
const newTodo = document.createElement('li');
newTodo.innerText = todo;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
 

//check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); 
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}






      



// if (item.classList[0] === "complete-btn"){
//     const todo = item.parentElement;
//     todo.classList.toggle("completed");
// }
