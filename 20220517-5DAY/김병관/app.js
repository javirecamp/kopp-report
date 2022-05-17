function lotto(){

    let result = [];
    
    let count = 0;

    while(count<6){
        let num = Math.floor((Math.random()*(45-1))+1)

        if(!result.includes(num)){
            result.push(num);
            count += 1;
        }
    }

    document.getElementById("lottoNum").innerHTML = result;
}



