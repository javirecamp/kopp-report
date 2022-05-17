
   document.addEventListener('DOMContentLoaded',()=>{
   let doc = document.getElementById("start");
    
   let lotto=[];
   while(lotto.length<6){
    //1~45 사이의 정수 난수 출력
    let lotto_num=parseInt(Math.random()*45)+1;
    if(lotto.indexOf(lotto_num)<0){  //해당 숫자가 존재하지 않으면 -1이 출력된다
        lotto.push(lotto_num); //존재하지 않으면 해당 숫자를 lotto에 넣는다.
    }
   }
   
   doc.innerHTML= (`이번주 로또 예상 번호는 ${lotto}입니다`);
});