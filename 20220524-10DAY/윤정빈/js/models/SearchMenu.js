// 화면에 뿌려줄 데이터 -> 상수값(const)으로 지정
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
  
  // 데이터를 외부에서 가져갈 때 사용하는 메소드
  export default {
    list(query) {
      return new Promise(res => {
        setTimeout(()=> {
          res(data)
        }, 200);
      })
    }
  }