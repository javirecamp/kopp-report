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
    list(query) { //list에 뭔가가 들어가면
      return new Promise(res => { //시간 간격을 두고 화면이 출력된 상태에서 데이터가 떨어지기 때문에 promise라는 비동기 객체로 데이터를 던진 것. 
        setTimeout(()=> {
          res(data) //data가 처리가 되서 나온다. 
        }, 200);
      })
    }
  }