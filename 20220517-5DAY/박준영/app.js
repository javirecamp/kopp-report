document.addEventListener('DOMContentLoaded', () => {
    alert('로!또!')
});

// 로또 번호를 담을 배열
let lottoArr = [];
for (let index = 0; index < 6; index++) {
    // 1~45번중 랜덤 숫자 생성
    let randomNumber = Math.floor(Math.random() * 45 + 1);
    // 중복확인 -> 포함되어있으면 index번호를 -1
    if (lottoArr.includes(randomNumber))
        index -= 1;
    // 미포함이면 배열에 넣기
    else
        lottoArr.push(randomNumber);
}

// 클릭하면 lotto id를 가지는 곳이 변경
document.addEventListener('click', () => {
    let doc = document.getElementById("lotto");
    doc.innerHTML = "로또번호 : " + lottoArr;
});