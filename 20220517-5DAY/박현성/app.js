function lotto(){
	var s = document.getElementById("start")
	s.value = "";
	var numberArray = new Array(6); // 6자리 배열 생성
	var i;
	var k="N";
	for(i=0; i<numberArray.length; i++){
		// 1부터 까지의랜덤 번호 생성 
		numberArray[i]=Math.floor((Math.random()*45)+1);
		// 중복체크구문
		for(j=0; j<i; j++){
			// 중복이 있다면 처리
			if(numberArray[i]==numberArray[j]){
				// i를 -1을 하고
				i--;
				// j for문 탈출
				break;
			}
		}
	}
	// 정렬
	numberArray.sort(function(a,b){
		return a-b
	});
	// 배열을 document 객체에 담기
	s.value = numberArray;

    document.getElementById("start").innerHTML = s.value;
}
