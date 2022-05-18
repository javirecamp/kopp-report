// A ~ 13까지 숫자 넣기
let numbers = ["A"];
for(let i=2; i<10; i++){
    numbers.push(i);
}
numbers.push("T");
numbers.push("J");
numbers.push("Q");
numbers.push("K");

// 모양 리스트
let shapes = ["H","D","C","S"]
// 결과 리스트
let result = [];
let str = "";
for(let shape of shapes){
    for(let num of numbers){
        result.push(shape+num);
        str+=(shape+num) +",";
    }
    str+="\n";
}
let here = document.querySelector("#here");
here.innerHTML="<h1>" + str + "</h1>";
console.log(result);