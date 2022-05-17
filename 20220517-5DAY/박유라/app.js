  
    function getLotto() {
        let lotto = [];
    
    for(let i=0; i<7; i++) {
        let num = Math.floor(Math.random() * 45) + 1;
        
        for(let j in lotto){
            if(num == lotto[j]) {
                num = Math.floor(Math.random() * 45) + 1;
            }
        }

        lotto.push(num);
    }

    lotto.sort(function(a,b){
        return a-b;
    });
        lotto
        return lotto;
    };


function lottoList(){
    alert('로또 추첨');
    let arr = getLotto();
    let str = ``;
    str += `<div class='ball ball1'>${arr[0]}</div>\n`
    str += `<div class='ball ball2'>${arr[1]}</div>\n`
    str += `<div class='ball ball3'>${arr[2]}</div>\n`
    str += `<div class='ball ball4'>${arr[3]}</div>\n`
    str += `<div class='ball ball5'>${arr[4]}</div>\n`
    str += `<div class='ball ball6'>${arr[5]}</div>\n`
    str += `<div class='ball img'><img src="plus.png"></div>\n`
    str += `<div class='ball ball7'>${arr[6]}</div>\n`
    
   
    return str;
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("lotto").innerHTML = lottoList();
});