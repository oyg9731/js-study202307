
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

let qNum = 1;
while(true){
    // 랜덤 정수 2개를생성
    let firstNumber = Math.floor(Math.random() * 20) + 1;
    let secondNumber = Math.floor(Math.random() * 20) + 1;

    let userAnswer = +prompt(`Q${qNum++}. ${firstNumber} + ${secondNumber} = ??`);

    if(userAnswer === 0){
        alert(`게임을 종료합니다!!`);
        break;
    }
}


// 정답확인
if(userAnswer === firstNumber + secondNumber){
    alert(`정답입니다!`);
}else{
    alert(`틀렸습니다ㅠㅠ`)
}