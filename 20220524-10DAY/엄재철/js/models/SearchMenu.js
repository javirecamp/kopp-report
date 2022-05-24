// 검색 기능을 하기 위해 필요한 데이터들을 정의
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
  
 // 모델에서 list를 호출하면 프로미스 값을 반환
  export default {
    list(query) {
      return new Promise(res => {
        setTimeout(()=> {
          res(data)
        }, 200);
      })
    }
  }