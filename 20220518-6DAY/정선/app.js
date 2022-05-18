// 시작시 화면에 출력
window.onload = function(e){
    let shape = ['S', 'H', 'D', 'C'];
    let num = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
    // 트럼프카드 조합을 저장하는 배열 
    let result = [];
    // 새롭게 생성한 랜덤 조합을 저장하는 배열
    let cardList = [];
    let str = " ";

    // querySelector 구문으로 element 가져오기
    let card = document.querySelector("#card");
    
    // forEach문을 사용하여 트럼프 카드 조합 생성하기
    shape.forEach(function(sh){
        num.forEach(function(n){
            result.push(sh+n);
        })
    })

    // 랜덤한 조합을 저장할 배열
    for(let i=0; i<result.length; i++){
        // 랜덤으로 인덱스 생성
        let newIndex = Math.floor(Math.random()*result.length);
        // 새로 만든 배열에 기존의 값이 없을 경우 새롭게 생성한 인덱스를 가지는 값을 배열에 push함
        if(!cardList.includes(result[newIndex])){
            cardList.push(result[newIndex]);
        } else {
            i--;
        }
            
    }

    // 랜덤 조합을 화면에 출력, 13개
    cardList.forEach((c, i)=>{
        str += `${c} `;
        if(i!=0 && (i+1)%13==0){
            str = str + `<br>`;
        } 
        console.log(str);
    })
    card.innerHTML = str;

    // 카드 개수를 화면에 출력
    document.querySelector("#num").innerHTML = `<br> 총 ${cardList.length}개`;
}