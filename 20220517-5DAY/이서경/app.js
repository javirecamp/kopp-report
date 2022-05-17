document.addEventListener('DOMContentLoaded', ()=>{
    function lotto(){
        //  랜덤하게 자리 바꿈 후에 앞에 6자리 추출
        let lottoArr = [];
        for(let i = 0; i < 45; i++){
            lottoArr[i]= i+1;
        }
        
        
        let tmp = 0;
        let j = 0;
        // 1~45의 값을 랜덤하게 자리 바꿈
        for(let i = 0; i < lottoArr.length; i++){
            j=Math.floor((Math.random()*44))+1;
            tmp=lottoArr[i];
            lottoArr[i]=lottoArr[j];
            lottoArr[j]=tmp;
        }
        
        // 6개만 추출
        let printLotto = [];
        for(let i = 0; i < 6; i++){
            printLotto[i]=lottoArr[i]
        }
        
        return printLotto
        }
    
    let doc = document.getElementById("start")
  doc.innerHTML=lotto()
});

