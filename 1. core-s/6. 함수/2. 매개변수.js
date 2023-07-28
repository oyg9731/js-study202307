// 매개변수(parameter)
// 함수를 정의할 때 함수 바깥쪽에서 안쪽으로 들어오는
// 데이터를 저장하는 변수

/*
    discription : x ~ y까지의 누적합을 구하는 함수 정의
    parameter :
        - begin: 누적합을 구할 시작값
        - end : 누적합을 구할 끝값
    return: begin과 end사이의 정수의 총합

    example:
        calcRangeSum(1, 10) -> 55 return
*/
function calcRangSum(begin, end){
    console.log(`begin : ${begin}, end : ${end}`);
    let total = 0;
    for(let i = begin; i <= end; i++){
        total += i;
    }
    return total;
}

let r1 = calcRangSum(1, 100);
console.log(`r1 : ${r1}`);

let r2 = calcRangSum(1, 100);
console.log(`r2 : ${r2}`);

// 매개변수의 기본값
function sayHello(lang ='한국어'){ //ES6 방법

    // ES5 - 고전 자바스크립트
    // lang = lang || '한국어';

    if (lang === '한국어') {
        console.log('안녕하세요!');
    }else if (lang === '영어') {
        console.log('Hello!');
    }else if (lang === '일본어') {
        console.log('곤니찌와!');
    }else{
        console.log('ㅁㄴㅇㅁㄴㅇ');
    }
}
console.log('-------------------------------');

sayHello();