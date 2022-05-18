let shape=["H","S","D","C"];
let cardcase=[];
let realcardcase=[];


for (let i=0;i<shape.length;i++){
    for(let j=1;j<=13;j++){
        if(j==1){
            cardcase.push(shape[i]+"A");
        }else if(j==10){
            cardcase.push(shape[i]+"T");
        }else if(j==11){
            cardcase.push(shape[i]+"J");
        }else if(j==12){
            cardcase.push(shape[i]+"Q");
         }else if(j==13){
            cardcase.push(shape[i]+"K");
         }else{
            cardcase.push(shape[i]+j);
         }
    }
}

console.log(Math.random()*52+1);
const cardset=new Set();
const number=52;
console.log(cardset.size);
while(cardset.size<number){
    const randomNumber=parseInt(Math.random()*52);
    cardset.add(randomNumber);
}
let arr = Array.from(cardset);
for(let i=0;i<arr.length;i++){
    realcardcase.push(cardcase[arr[i]]);
}
console.log(realcardcase);

//여기서부터는 index.html이랑 연결해봄



document.addEventListener("DOMContentLoaded",()=>{
    
    alert("카드 게임을 시작합니다.");
    let doc = document.getElementById("start");
    let shape=["H","S","D","C"];
    let cardcase=[];
    let realcardcase=[];

    const startEle=document.querySelector(".start");



for (let i=0;i<shape.length;i++){
    for(let j=1;j<=13;j++){
        if(j==1){
            cardcase.push(shape[i]+"A");
        }else if(j==10){
            cardcase.push(shape[i]+"T");
        }else if(j==11){
            cardcase.push(shape[i]+"J");
        }else if(j==12){
            cardcase.push(shape[i]+"Q");
         }else if(j==13){
            cardcase.push(shape[i]+"K");
         }else{
            cardcase.push(shape[i]+j);
         }
    }
}

console.log(Math.random()*52+1);
const cardset=new Set();
const number=52;
console.log(cardset.size);
while(cardset.size<number){
    const randomNumber=parseInt(Math.random()*52);
    cardset.add(randomNumber);
}
let arr = Array.from(cardset);
for(let i=0;i<arr.length;i++){
    realcardcase.push(cardcase[arr[i]]);
}




console.log(realcardcase);
doc.innerHTML=realcardcase;




 
});