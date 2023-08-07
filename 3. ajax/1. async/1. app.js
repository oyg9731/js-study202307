const $btn = document.querySelector('button');

function trackKandler(){
    console.log('Click');
}

$btn.addEventListener('click', trackKandler);

setTimeout(() => {
    console.log('1번 코드!');
}, 1000);
setTimeout(() => {
    console.log('2번 코드!');
}, 3000);
setTimeout(() => {
    console.log('3번 코드!');
}, 5000);

// let total = 0;
// for(let i = 0; i < 1000000000; i++){
//     total += i;
// }
// console.log(total);
