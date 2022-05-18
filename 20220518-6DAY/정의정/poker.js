document.addEventListener('DOMContentLoaded', ()=>{
    alert('포커 오픈');
   
    let doc=document.querySelector("#start");

    const poker = []; //포커배열생성
    const num = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"];
    const shape = ["spade","heart","diamond","clova"];

    for(let i=0; i<num.length; i++) {

        for(let j=0; j<shape.length; j++) {
            let pokerCard = num[i]+shape[j]; //i와j를 붙여주기 문자+문자라서 그냥 +로 붙음
            //얘를 push
            poker.push(pokerCard);

        }
    }
    

    console.log(poker.length);
    
    
    // 무작위로 배열을 섞어주는 함수
        function shuffle(x) {
            x.sort(() => Math.random() - 0.5);
        }
        
        shuffle(poker);
        console.log(poker);




    //포커를 화면에 뿌려주기
    doc.innerHTML = poker;
});