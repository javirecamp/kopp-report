document.addEventListener('DOMContentLoaded', ()=> {
    alert("로또 번호 추첨!");
    function lotto() {
        let arr = []; 
        for(let i = 0; i < 6; i++) {
            arr[i] = Math.floor(Math.random() * 45) + 1;
            for(let j = 0; j < i; j++){
                if(arr[j] == arr[i]) {
                    i--;
                }
            }
        }
        return arr.sort((a , b) => a - b);
    };

    let doc = document.getElementById("start");
    doc.innerHTML = lotto(); 
});



// function lotto() {
//     let arr = []; 
//     for(i = 0; i < 6; i++) {
//         arr[i] = (int)(Math.random() * 45) + 1;
//     }
//     return arr;
// };

// console.log(lotto);

/*

*/