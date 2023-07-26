// up down 게임 시작
// alert('난이도를 설정하세요~!')
// let x = +prompt('1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)');

// let a = Math.floor(Math.random() * 50) + 1;
// alert(`${a}`)
// if(x === 1){
//     alert('1 ~ 50사이의 무작위 숫자를 3번 안에 맞춰 보세요')
//     for(i = 2; i >= 0; i--){
//         let num = +prompt('숫자를 입력하세요')
//         if(num === a){
//             alert(`딩동댕 정답은~ ${a}였습니다!!!`);
//             break;
//         }
//         else if(num < a){
//             alert('UP!!!');
//             alert(`기회가 ${i}번 남았습니다.`);
//         }
//         else if(num > a){
//             alert('DOWN!!!');
//             alert(`기회가 ${i}번 남았습니다.`);
//         }
//         if(i === 0){
//             alert('기회를 모두 사용했어 ㅋㅋ');
//         }
//     }
// }else if(x === 2){
//     alert('1 ~ 50사이의 무작위 숫자를 6번 안에 맞춰 보세요')
//     for(i = 5; i >= 0; i--){
//         let num = +prompt('숫자를 입력하세요')
//         if(num === a){
//             alert(`딩동댕 정답은~ ${a}였습니다!!!`);
//             break;
//         }
//         else if(num < a){
//             alert('UP!!!');
//             alert(`기회가 ${i}번 남았습니다.`);
//         }
//         else if(num > a){
//             alert('DOWN!!!');
//             alert(`기회가 ${i}번 남았습니다.`);
//         }
//         if(i === 0){
//             alert('기회를 모두 사용했어 ㅋㅋ');
//         }
//     }
// }else{
//     alert('1 ~ 50사이의 무작위 숫자를 10번 안에 맞춰 보세요')
//     for(i = 9; i >= 0; i--){
//         let num = +prompt('숫자를 입력하세요')
//         if(num === a){
//             alert(`딩동댕 정답은~ ${a}였습니다!!!`);
//             break;
//         }
//         else if(num < a){
//             alert('UP!!!');
//             alert(`기회가 ${i}번 남았습니다.`);
//         }
//         else if(num > a){
//             alert('DOWN!!!');
//             alert(`기회가 ${i}번 남았습니다.`);
//         }
//         if(i === 0){
//             alert('기회를 모두 사용했어 ㅋㅋ');
//         }

//     }
// }   
// up down 게임 끝
//=============================================================================
// up down 강의버전 시작
// 초기 카운트 수
let initCount = 5;


// 난이도 상수
const HIGH = 1;
const MIDDLE = 2;
const LOW = 3;

// 초기 난이도 설정 선택창 띄우기
let level = prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

if(level === LOW){
    initCount = 3;
}else if(level === MIDDLE){
    initCount = 6;
}else if(level === HIGH){
    initCount = 10;
}else{
    alert(`잘못 입력했으니깐 난이도 상으로 자동 시작합니다`);
    initCount = 3;
}
// 카운트다운 변수
let countDown= initCount;

let secret = Math.floor(Math.random()* 100)+ 1;
console.log(secret);
let min = 1, max = 100;

while(true){


    // 사용자의정답 입력값
    let answer = +prompt(`숫자를 입력! [${min} ~ ${max}]`);

    
    // 입력값 유효성 검사
    // 지금 입력범위 안의 값인가??
    if(answer < min || answer > max){
        alert(`범위 안의 값을 입력하세요!!!`);
        continue; //다시 위로 올려보내기
    }
    countDown--; // 카운트 감소

    // 업 다운 판단
    // 정답일경우
    if(secret === answer){
        alert(`정답입니다! ${initCount - countDown}번 만에 맞췄습니다!`);
        break;
    } else if(secret > answer){
        alert(`UP!`);
        min = answer + 1;
    }else{
        alert(`DOWN!`);
        max = answer -1
    }

    if(countDown === 0){
        alert(`TT 패배하셨습니다! 정답은 ${secret}였습니다!`);
        break;
    }else{
        alert(`${countDown}번의 기회가 남았습니다.`)
    }

} // end while loop
alert(`수고하셨습니다!`);

// ===========================================================
