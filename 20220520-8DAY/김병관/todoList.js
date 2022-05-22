const button = document.getElementById('button');
const input = document.getElementById('input');
const list = document.getElementById('list');
const clearButton = document.getElementById('clearButton');

let count = 0;

button.addEventListener('click', addTodoList);
clearButton.addEventListener('click',clearAll);

function addTodoList() {
    if(input.value === null){
        return;
    }

    let element = document.createElement('li');
    element.setAttribute("class","item");
    element.setAttribute("id","li" + count);

    element.innerHTML = input.value;
    element.innerHTML += "<button style='float:right;' class='removeButton' type='button' onclick='removeTodoList(" +count+ ")'>Remove</button>";

    list.appendChild(element);
    count++
    input.value = null;
}

function removeTodoList(count) {
    let element = document.getElementById('li' + count);
    list.removeChild(element);
    count--;
}

function clearAll(){
    for(let i = 0; i < count; i++){
        let element = document.getElementById('li' + i);
        list.removeChild(element);
    }
    count = 0;
}