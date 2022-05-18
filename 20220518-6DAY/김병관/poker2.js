document.addEventListener('DOMContentLoaded', () => {

    let number = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    let shape = ['clova', 'dia', 'heart', 'spade'];

    let namePoker = '';

    let resultList = [];

    for (let i = 0; i < number.length; i++){
        for (let j = 0; j < shape.length; j++){
            namePoker = number[i] + shape[j];
            resultList.push(namePoker);
            namePoker = '';
        }
    }

    let randomSet = new Set();

    while(randomSet.size < 52){
        let value = parseInt(Math.random()*52, 10);
        randomSet.add(value);
    }

    const arr = Array.from(randomSet);
    console.log(arr);


    let finalResult_1 = [];
    let finalResult_2 = [];
    let finalResult_3 = [];
    let finalResult_4 = [];

    for (let i = 0; i < arr.length; i++){
        if (i < 13){
            finalResult_1.push(resultList[arr[i]])
        } else if (i < 26){
            finalResult_2.push(resultList[arr[i]])
        } else if (i < 39){
            finalResult_3.push(resultList[arr[i]])
        } else{
            finalResult_4.push(resultList[arr[i]])
        }
    }
    finalResult_4.push('Joker')

    document.getElementById("poker1").innerHTML = finalResult_1;
    document.getElementById("poker2").innerHTML = finalResult_2;
    document.getElementById("poker3").innerHTML = finalResult_3;
    document.getElementById("poker4").innerHTML = finalResult_4;

})






