document.addEventListener('DOMContentLoaded',()=>{
    let doc=document.getElementById("start");

    let arr=Array();
    let sum=0;
    arr[0]=Math.floor(Math.random()*45)+1;
    
    for(let i=1;i<6;i++){
        num=Math.floor(Math.random()*45)+1;
        for(let j=0;j<i;j++){
            if(arr[j]==num){
                sum++;
            }    
        }
        if(sum==0){
            arr.push(num);
        }else{
            i--;
            sum=0;
        }
    }    
    //HTML에 뱉는거임. 
    doc.innerHTML=arr;

});

