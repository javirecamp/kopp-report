const body = document.querySelector("body");
const title = document.querySelector(".title");
const input=document.querySelector(".input");
const changebtn = document.querySelector(".changebtn");
const ul = document.querySelector(".todo");
const addbtn = document.querySelector(".addbtn");
const clearbtn = document.querySelector("#clear");

changebtn.addEventListener("click", changeMod);     // 주,야간 바꾸기
addbtn.addEventListener("click", addList);          // 리스트 추가하기
clearbtn.addEventListener("click", clearall);       // 리스트 모두 지우기


// cnt는 리스트를 추가 할 때마다 각 리스트를 구별 해주기 위해 존재
let cnt = 0;

// + 버튼 클릭시 적은 내용을 리스트로 추가하기
function addList(){
    // li와 button을 넣을 div태그 만들고 id를 'div+cnt' 로 주기
    const div = document.createElement("div");
    div.setAttribute("id","div"+cnt);

    // 할 일을 넣을 li태그 만들기
    const li = document.createElement("li");
    // div태그 밑에 li태그 넣어주기
    div.appendChild(li);
    // li태그에 input 값 넣어주기
    li.innerHTML = input.value;

    // 야간모드일 경우 리스트 내용 색을 바꿔주기
    if(changebtn.value === "day"){
        li.style.color = "bisque";

        // div 밑에 버튼 태그 추가해주기
        // 리스트를 만들 때 마다 cnt로 구별 해주기
        div.innerHTML += `<button class="textbtn" style="color : bisque" onclick="deleteTodoList(`
                         + cnt + `)"><i class="fa-solid fa-trash-can"></i></button>`;
    }else{
        div.innerHTML += `<button class="textbtn" onclick="deleteTodoList(` 
                        + cnt + `)"><i class="fa-solid fa-trash-can"></i></button>`;
    }
    
    // ul태그에 div태그 추가해주기
    ul.appendChild(div);
    
    // input태그의 값을 다시 공백으로 만들어 주고 커서가 생기도록 해주기
    input.value="";
    input.focus();
    cnt++;
}


// 리스트에서 휴지통 버튼 누르면 하나씩 삭제하기
function deleteTodoList(cnt){
    const div = document.getElementById("div" + cnt);
    ul.removeChild(div);
    cnt--;
}


// 리스트에 있는 모든 할 일을 삭제하기
function clearall(){
    // const div = document.getElementById("div" + i); 로 했을 때 먼저 입력한 것을 지우고 clearall을 하면
    // 모두 지워지지 않는 문제가 발생해서 모든 div태그를 배열로 만든 후 처음과 마지막의 div태그는 해당이 안되므로 다음과 같이 작성
    const divall = document.querySelectorAll("div");
    for(let i = 1; i < divall.length-1 ; i++){
        ul.removeChild(divall[i]);
    }
    cnt = 0;
}


// 주,야간 모드로 변경하기
function changeMod(){
    if(changebtn.value === "night"){
        changebtn.value = "day";
        
        body.style.backgroundColor = "black";
        title.style.color = "bisque";
        
        let lists = document.querySelectorAll("li");
        let trash = document.querySelectorAll(".fa-trash-can");
        let i = 0;
        while(i<lists.length){
            lists[i].style.color = "bisque";
            trash[i].style.color = "bisque";
            i++;
        }

    } else{
        changebtn.value = "night";

        body.style.backgroundColor = "bisque";
        title.style.color = "black";
        
        let lists = document.querySelectorAll("li");
        let trash = document.querySelectorAll(".fa-trash-can");
        let i = 0;
        while(i<lists.length){
            lists[i].style.color = "black";
            trash[i].style.color = "black";
            i++;
        }
    }
}