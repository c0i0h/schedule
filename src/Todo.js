class Todo {
  constructor(contents, done) {
    this.contents = contents;
    this.done = done;
    this.leftTodoCount = 0;
    this.getList();
  }
  toggle() {
    this.done = !this.done;
    this.setCount();
  }
  getDate() {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜

    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds(); // 초

    let dd =
      year +
      "년 " +
      month +
      "월 " +
      date +
      "일 " +
      hours +
      "시 " +
      minutes +
      "분 " +
      seconds +
      "초";

    return dd;
  }
  addTodo(contents, done = false) {
    let node = document.getElementsByClassName("todo-container");

    let item = '<input type="checkbox" /> <label>' + contents + "</label>";

    let el = document.createElement("div");
    el.className = "todo";
    el.innerHTML = item;

    node[0].appendChild(el);

    //console.log(this.getList());
    //할일 추가할때 마다 카운터 설정
    this.setCount();
    //console.log(this.leftTodoCount)
  }
  setCount() {
    // 체크 박스 기준으로 목록 산출
    let chklist = document.querySelectorAll(".todo input");

    // 카운터 초기화
    this.leftTodoCount = 0;
    for (let i = 0; i < chklist.length; i++) {
      //console.log(node.item(i).type === 'checkbox');
      // 현재 남은 할일 수 증가
      if (chklist.item(i).type === "checkbox" && !chklist.item(i).checked) {
        this.leftTodoCount++;
      }
    }
    //console.log(this.leftTodoCount);
  }
  getCount() {
    return this.leftTodoCount;
  }
  getList() {
    this.setCount();
    //todo-cnt
    let todo_cnt = document.getElementById("todo-cnt");
    todo_cnt.innerText = this.getCount() + "건";

    let chklist = document.querySelectorAll(".todo input");
    //console.log(chklist.length);

    let itemList = [];
    for (let i = 0; i < chklist.length; i++) {
      //console.log(node.item(i).type === 'checkbox');
      if (chklist.item(i).type === "checkbox" && !chklist.item(i).checked) {
        let itemValue = chklist.item(i).parentNode.querySelector("label")
          .innerHTML;
        //console.log(itemValue);
        itemList.push(itemValue);
      }
    }
    return itemList;
  }
}

export default Todo;
