
// index.html에서 활용할 이벤트처리, 핸들러...

let currentResult = 0;



// 더하기 버튼 이벤트 핸들러
const addHandler = () =>{
    console.log('+ button click!');
    // 입력창에 입력한 숫자를 읽기
    const enteredNumber = +$userInput.value;
    
    // 로그 생성 : 0 + 11
    const calcDescriptionLog = `${currentResult} + ${enteredNumber}`;
    // 실제 계산 결과 반영
    currentResult += enteredNumber;

    // 화면에 렌더링
    outputResult(currentResult, calcDescriptionLog);
};

// subStractHandler
const subStractHandler = () =>{
    console.log('- button click!');
    const enteredNumber = +$userInput.value;
    const calcDescriptionLog = `${currentResult} - ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDescriptionLog);
};

// multiplayHandler
const multiplayHandler = () =>{
    console.log('* button click!');
    const enteredNumber = +$userInput.value;
    const calcDescriptionLog = `${currentResult} * ${enteredNumber}`;
    currentResult *= enteredNumber;
    outputResult(currentResult, calcDescriptionLog);
};

// dividHandler
const dividHandler = () =>{
    console.log('/ button click!');
    const enteredNumber = +$userInput.value;
    const calcDescriptionLog = `${currentResult} / ${enteredNumber}`;
    currentResult /= enteredNumber;
    outputResult(currentResult, calcDescriptionLog);
};

//======================= 이벤트 핸들러 바인딩 ============================//
$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', subStractHandler);
$multiplyBtn.addEventListener('click', multiplayHandler);
$divideBtn.addEventListener('click', dividHandler);