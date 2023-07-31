const traders = [
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2023,
      value: 500000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2022,
      value: 600000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 1200000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2023,
      value: 650000,
    },
    {
      trader: {
        name: "뽀로로",
        city: "부산",
      },
      year: 2023,
      value: 800000,
    },
    {
      trader: {
        name: "루피",
        city: "대전",
      },
      year: 2022,
      value: 780000,
    },
  ];
  
  // 연습 1: 2022년에 발생한 모든 거래를 찾아 
  //   거래자 정보(이름, 도시)를 배열에 매핑해주세요 

  traders
    .filter(a => a.year === 2022)
    .map(a => {
    return{
        city: a.trader.city,
        name: a.trader.name
    };
})
.forEach(b => console.log(`2022년에 거래한사람 이름 : ${b.name}, 도시 : ${b.city}`));
console.log('---------------------------------------------------------');
  // 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
  const cityBoy = traders.map(a => a.trader.city);
console.log(cityBoy);
  console.log('---------------------------------------------------------');
  
  // 연습 3: 대전에 근무하는 
  // 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.
  traders
    .filter(a => a.trader.city === '대전')
    .map(a => a.trader)
    .forEach(a => console.log(a));
    console.log('---------------------------------------------------------');
  
  // 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
  const a = traders.map(a => {
    return{
        name : a.trader.name
    };
  })
  console.log(a);
  
  // 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
  
  const ddr = traders
  .filter(a => a.trader.city === '서울')
  .map(a => a.value)
  .reduce((sum, value) => sum + value, 0);
  console.log(`${ddr}원`);