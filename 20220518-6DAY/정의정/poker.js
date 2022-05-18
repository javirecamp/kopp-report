document.addEventListener('DOMContentLoaded', ()=>{
    alert('포커 오픈');
   
    let doc=document.querySelector("#start");

    const poker = []; //포커배열 생성
    const num = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]; //숫자배열 생성
    const shape = ["spade","heart","diamond","clova"]; //모양배열 생성

    //num배열의 길이만큼 for문을 돎
    for(let i=0; i<num.length; i++) {

        //shape배열의 길이만큼 for문을 돌며 num배열과 shape배열을 합쳐줌
        for(let j=0; j<shape.length; j++) {
            let pokerCard = num[i]+shape[j]; //i와j를 붙여주고 새 배열에 저장
                                             //문자+문자라서 그냥 +로 붙음
            
            poker.push(pokerCard); //얘를 push

        }
    }
    

    console.log(poker.length); //호출
    
    
    // 무작위로 배열을 섞어주는 함수
        function shuffle(x) {
            x.sort(() => Math.random() - 0.5); //정렬 시켜주고 정수화를 위해 -0.5
        }
        
        shuffle(poker);
        console.log(poker);




    //포커를 화면에 뿌려주기
    doc.innerHTML = poker;
});
