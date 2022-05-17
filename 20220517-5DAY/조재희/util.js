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

console.log(arr);

// let list = [];
// for(let i = 0; i< 6; i++){
//     let num = parseInt(Math.random * 45) + 1
//     if(list.includes(num)){
//         i--;
//     }else{
//         list.push(num);
//     }
// }


