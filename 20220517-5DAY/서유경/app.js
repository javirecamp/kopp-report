function getRandomNum() {
    return Math.floor(Math.random() * 45) + 1;
}
// console.log(getRandomNum());

function getLottoNumbers(){
    let lotto = [];
    while(lotto.length < 6){
        let num = getRandomNum();
        if(!lotto.includes(num)) {
            lotto.push(num);
        }
    }
    return lotto;
}
// console.log(getLottoNumbers());

function makeList(){
    let arr = getLottoNumbers();
    let str = ``;
    for(let i=0; i<arr.length; i++){
        str += `<li>${arr[i]}</li>\n`;
    }
    return str;
}
// console.log(makeList());

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("lotto-list").innerHTML = makeList();
});