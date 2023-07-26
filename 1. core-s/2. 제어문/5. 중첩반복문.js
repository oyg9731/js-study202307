// 구구단 출력
// 2단

// console.log(`==== 구구단 2단 ====`);
// console.log(`2 x 1 = 2`);
// console.log(`2 x 2 = 4`);
// console.log(`2 x 3 = 6`);
// console.log(`2 x 4 = 8`);
// console.log(`2 x 5 = 10`);
// console.log(`2 x 6 = 12`);
// console.log(`2 x 7 = 14`);
// console.log(`2 x 8 = 16`);
// console.log(`2 x 9 = 18`);
// console.log('=====================');

let cnt=0;
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 7; j++){
        // console.log(`${i}, ${j}`); //3X2 = 6회 반복
        for(let k = 0; k < 4; k++){
            cnt++;
        }
    }
}
// console.log(`총 반복횟수: ${cnt}회`);

// for(level = 2; level <= 9; level++){
//     console.log(`==== 구구단 ${level}단 ====`);
//     for(let line = 1; line <= 9; line++){
//         console.log(`${level} X ${line} = ${level * line}`);
//     }
// }

