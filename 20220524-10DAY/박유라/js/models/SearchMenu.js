// 출력 데이터 배열
const data = [
    {
      id: 1,
      name: '[스타벅스] 아이스 카페 아메리카노',
      image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100205.jpg'
    },
    {
      id: 2,
      name: '[스타벅스] 카푸치노',
      image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[38]_20150821164230205.jpg'
    }
  ]
  
  // 데이터를 외부에서 가져갈때 사용하는 메소드
  export default {
    list(query) {
      // new Promise라는 새로운 객체에 파라미터로 res를 파라미터를 갖는 함수 
      return new Promise(res => { 
        // 그 함수는 setTimeout을 0.2초마다 실시
        setTimeout(()=> {
          res(data) // 실시하는 함수 
        }, 200);
      })
    }
  }