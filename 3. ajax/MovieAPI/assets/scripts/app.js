/*
1. 할 일 목록 렌더링 - db.sjon에 있는 todos를 
    get요청으로 fetch해서 가져와서 렌더링
2. 새로운 할일 추가 - 할일을 쓰고 더하기 누르면 
    post요청으로 db.json에 객체 추가, 렌더링
3. 할 일 삭제 - 엑스 버튼을 느르면 delete요청으로 
    db.json에서 객체 제거, 렌더링
4. 할일 체크기능 - 체크박스를 누르면 put, fetch요청으로 
    db.json에 done값을 반대값으로 수정
5. 할 일 수정 기능 - 초록색버튼을 누르면 
    수정모드로 진입(인풋창 활성화)
   인풋창에 새로운 텍스트를 쓰고 확인을 누르면 
   put,patch요청이 나가고db.json에서도 수정
*/

const URL = "http://localhost:3000/todos";

const $todoList = document.querySelector('.todo-list');

// step1. db.json에 있는 todos를 화면에 렌더링하기
const fetchTodos = (url, method='GET', payload=null) =>{
    const requestInit = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
    };
    if(payload) requestInit.body = JSON.stringify(payload);
    
    return fetch(url, requestInit);
    
};

// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) =>{
    //li 태그를 가져옴
    const $liTemplate = document.getElementById('single-todo');

    todoList.forEach(({ id, text, done}) => {
        // console.log('todo : ', todo);
        const $newLi = document.importNode($liTemplate.content, true);
        $newLi.querySelector('li').dataset.id = id; //data-id 속성 부여
        $newLi.querySelector('.text').textContent = text;

        // 체크박스 가져오기
        const $checkbox = $newLi.querySelector('.checkbox input[type=checkbox]');
        // console.dir($checkbox);
        $checkbox.checked = done;

        done && $checkbox.parentNode.classList.add('checked');

        $todoList.appendChild($newLi);
    });
};

//================== 이벤트 관련 함수 ===============//

const addTodoHandler = e =>{
    // 1. 클릭이벤트가 잘 일어나나?
    // console.log('클릭!');

    // 2. 클릭하면 일단 왼쪽에 인풋의 텍스트를 읽어야함
    // 2-1. 인풋부터 찾자
    const $textInput = document.getElementById('todo-text');
    // 2-2. 인풋 안에 텍스트를 꺼내자
    const inputText = $textInput.value;
    
    // 3. 그럼 서버에 이 데이터를 보내서 저장해야 하는데?
    // -> fetch가 필요하겠다. 저장이니까 POST해야겠다.
    // -> payload를 API 스펙에 맞게 만들어 보내야 함
    const payload = {
        text: inputText,
        done: false
    };
    fetchTodos(URL, 'POST', payload)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        console.log('등록 성공!');
      } else {
        console.log('등록 실패!');
      }
    });

}

// step2. 할 일 등록 기능
const $addBtn = document.getElementById('add');
$addBtn.addEventListener('click', addTodoHandler);


// step3. 할 일 삭제 기능
const deleteTodoHandler = e => {
    if(!e.target.matches('.remove span')) return;
    // 특정 할일을 지우기 위해 클릭한 할일의 id값을 알아야함
    const id = e.target.closest('.todo-list-item').dataset.id;
    // console.log(id);

    // 서버에 삭제 요청하기
    fetchTodos(`${URL}/${id}`, 'DELETE')
    .then(res=> {
        if (res.status === 200 || res.status === 201) {
            console.log('삭제 성공!');
          } else {
            console.log('삭제 실패!');
          }
    })
}

$todoList.addEventListener('click', deleteTodoHandler);


//=========앱 실행==========//
const init = () => {
    fetchTodos(URL)
    .then(res => res.json())
    .then(todos => {
        renderTodos(todos);
    });
};

init();