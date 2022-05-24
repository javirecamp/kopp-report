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
  // export default {
  //   list(query) {
  //     return new Promise(res => {
  //       setTimeout(()=> {
  //         res(data)
  //       }, 200);
  //     })
  //   }
  // }

  export default {
    list(query) {
      return new Promise(res => {
        setTimeout(()=> {
          // query를 name에 포함한 data만 배열에 push하고 해당 배열을 반환한다.
          const arr = [];
          for(let i = 0; i < data.length; i++){
            if(data[i].name.includes(query)){
              arr.push(data[i]);
            }
          }
          res(arr)
        }, 200);
      })
    }
  }