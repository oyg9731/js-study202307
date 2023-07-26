
// 사칙연산 게임 시작

// alert('[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요]');
// // 난수 1번
// let a = Math.floor(Math.random() * 50) + 1;
// // 난수 2번
// let b = Math.floor(Math.random() * 50) + 1;
// // 4칙
// let c = Math.floor(Math.random() * 4) + 1;
// let cnt = 0;
// let cnt1 = 0;
// alert('~~~~~~~~~~난이도를 설정합니다~~~~~~~~~~~');
// let y = +prompt('1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20)');

// if(y === 1){
//     for(i = 99; i >= 0; i--){
//         if(c === 1){
//             let x = +prompt(`${a} + ${b} = ??`)
//             if (a + b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         } else if(c === 2){
//             let x = +prompt(`${a} - ${b} = ??`)
//             if (a - b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         } else if(c === 3){
//             let x = +prompt(`${a} * ${b} = ??`)
//             if (a * b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         } else if(c === 4){
//             let x = +prompt(`${a} / ${b} = ??`)
//             if (a / b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         }
//         if(i === 0){
//             alert('end');
//             alert(`맞춘개수 : ${cnt}, 틀린개수 : ${cnt1}`)
//         }
//     }
// }
// else if(y === 2){
//     for(i = 49; i >= 0; i--){
//         if(c === 1){
//             let x = +prompt(`${a} + ${b} = ??`)
//             if (a + b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         } else if(c === 2){
//             let x = +prompt(`${a} - ${b} = ??`)
//             if (a - b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         } else if(c === 3){
//             let x = +prompt(`${a} * ${b} = ??`)
//             if (a * b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         } else if(c === 4){
//             let x = +prompt(`${a} / ${b} = ??`)
//             if (a / b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         }
//         if(i === 0){
//             alert('end');
//             alert(`맞춘개수 : ${cnt}, 틀린개수 : ${cnt1}`)
//         }
//     }
// }
// else if(y === 3){
//     for(i = 19; i >= 0; i--){
//         if(c === 1){
//             let x = +prompt(`${a} + ${b} = ??`)
//             if (a + b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         } else if(c === 2){
//             let x = +prompt(`${a} - ${b} = ??`)
//             if (a - b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         } else if(c === 3){
//             let x = +prompt(`${a} * ${b} = ??`)
//             if (a * b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         } else if(c === 4){
//             let x = +prompt(`${a} / ${b} = ??`)
//             if (a / b === x){
//                 alert('정답')
//                 cnt++;
//             }
//             else if(x === 0){
//                 break;
//             }else{
//                 alert('오답')
//                 cnt1++;
//             }
//         }
//         if(i === 0){
//             alert('end');
//             alert(`맞춘개수 : ${cnt}, 틀린개수 : ${cnt1}`)
//         }
//     }
// }

// =================================================================
let qNum = 1; // 문제 넘버링

// 정답, 오답 횟수
let correctCount = 0;
let wrongCount = 0;

let maxNumber;

while (true) {
  let message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
  let level = +prompt(message);

  if (level === 1) {
    maxNumber = 100;
  } else if (level === 2) {
    maxNumber = 50;
  } else if (level === 3) {
    maxNumber = 20;
  } else {
    alert('난이도를 숫자로 다시 입력하세요!');
    continue;
  }
  break;
} // end while

while (true) {
  // 랜덤 정수 2개를 생성
  let firstNumber = Math.floor(Math.random() * maxNumber) + 1;
  let secondNumber = Math.floor(Math.random() * maxNumber) + 1;

  // 부호를 만들 랜덤 정수 생성
  let markNum = Math.floor(Math.random() * 3);

  let mark;
  let realAnswer; // 실제 정답
  if (markNum === 0) {
    mark = "+";
    realAnswer = firstNumber + secondNumber;
  } else if (markNum === 1) {
    if (firstNumber === secondNumber) continue;
    else if (firstNumber < secondNumber) {
      let t = firstNumber;
      firstNumber = secondNumber;
      secondNumber = t;
    }
    mark = "-";
    realAnswer = firstNumber - secondNumber;
  } else {
    mark = "x";
    realAnswer = firstNumber * secondNumber;
  }

  let userAnswer = +prompt(
    `Q${qNum++}. ${firstNumber} ${mark} ${secondNumber} = ??`
  );

  if (userAnswer === 0) {
    alert("게임을 종료합니다!");
    break;
  }

  // 정답 확인
  if (userAnswer === realAnswer) {
    alert("정답입니다!");
    correctCount++;
  } else {
    alert("틀렸습니다!");
    wrongCount++;
  }
} // end while

alert(`정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`);
