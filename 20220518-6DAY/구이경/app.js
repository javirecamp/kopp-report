//click하면 event가 실행되도록 설정
document.addEventListener('click',()=>{ //'DOMContentLoaded'는 실행하면 바로 값이 나오게 하는 것
//id인 card 받기
let doc=document.querySelector("#card");
    
//포커 카드 값(숫자/문자) 13개를 담고 있는 배열 생성
const values=['A','2','3','4','5','6','7','8','9','T','J','K','Q'];
//포커 카드 모양 4개를 담고 있는 배열 생성
const shapes=['C','D','S','H'];

// 모든 조합(숫자/문자+모양)의 포커 카드를 생성하는 함수 선언
function makeCard(){
    //모든 조합의 카드를 배열로 저장할 배열 선언
    const cards=[];

   for(let s=0; s<shapes.length; s++){ //values 배열의 개수만큼 반복
    for( v=0; v<values.length; v++){ //shapes 배열의 개수만큼 반복
        const value = values[v]; //0~12번째의 values 배열의 값을 value에 저장
        const shape=shapes[s]; //0~3번째의 shapes 배열의 값을 shape에 저장
        cards.push({shape,value}); //value,shaple을 cards 배열에 저장
    }
   }

    return cards; //makeCard 함수 return 값
    //console.log(cards.length);  //총 13*4=52개의 배열 값이 생성된다.
}

//카드 섞기 함수
function random(cards){
    let cnt = 0;
    const randomCard = []; //랜덤으로 섞은 카드 조합이 저장될 배열
    do{   //일단 한번은 무조건 실행하기
    //0~52사이의 정수 뽑아내기
    const random=Math.floor(Math.random()*cards.length);
    //cards의 shape과 value에서 랜덤 위치의 값 추출
    const cardShape = cards[random].shape;
    const cardValue = cards[random].value;
    // 두 값을 더해서 하나의 새로운 값을 생성한다.
    const combination = (`${cardShape}`+`${cardValue}`);


    //만약 randomCard 배열에 combination 값이 존재하지 않으면 배열에 추가하고 cnt 숫자를 하나 증가시킨다
    if(randomCard.indexOf(`${combination}`)<0){
    randomCard.push(`${combination}`);
    cnt++;
    if(cnt%2==0){
        console.log('\n');
    }
    }
}while (cnt<52); // 배열에 52개의 값이 들어올 때 까지 반복

return randomCard; // 섞인 카드 배열을 리턴
}

const cards=makeCard(); //카드 생성 함수 호출
const result1 = random(cards); // 카드 섞기 함수 호출

doc.innerHTML=result1; //카드 섞기 함수를 통해 얻은 카드 배열을 html에 출력

 });