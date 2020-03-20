//import Todo from "./src/Todo";
import TodoApp from "./src/TodoApp";
import TodosManager from "./src/TodosManager";

//const studyTodo = new Todo("공부하기", false);
//console.log(studyTodo);

const todoApp = new TodoApp();
const todoManager = new TodosManager();

const addBtn = document.getElementById("addBtn");
const itemValue = document.getElementById("itemValue");

// 할일 체크 토글시 할일 카운터 업데이트
(function() {
  // 현재 년월일시 출력
  setInterval(function() {
    todoManager.getTime();
    todoApp.getItems();
  }, 1000);

  const item = document.querySelectorAll(".todo input[type='checkbox']");

  for (let i = 0; i < item.length; i++) {
    // 라디오 버튼 마다 클릭 이벤트 감시
    item[i].onclick = function() {
      // 카운터 업데이트
      todoApp.getItems();
      todoManager.setCount();
    };
  }
})();

// 할일 추가 버튼 이벤트
addBtn.onclick = () => {
  //console.log("헐 일 추가 버튼이 클릭됨");
  //console.log("itemValue = " + itemValue.value);

  // 할일 입력값이 유효한 경우에만 할일 추가
  if (itemValue.value.length > 0) {
    // TodoApp 클래스의 addItem 메소드를 이용하여 할일 추가
    todoApp.setTodo(itemValue.value);
    todoApp.getItems();

    // 할일 추가후 입력박스 초기화
    itemValue.value = "";
  }
};
