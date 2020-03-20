import Todo from "./Todo";

class TodoApp extends Todo {
  setTodo(itemValue) {
    super.addTodo(itemValue);
    //alert("할일 추가 완료!");

    this.getItems();
  }
  getItems() {
    //getList()
    const items = super.getList();

    console.log(items);

    let node = document.getElementsByClassName("todo-items");
    node[0].innerHTML = "";

    for (let i = 0; i < items.length; i++) {
      let item = "<label>" + items[i] + "</label>";

      let el = document.createElement("div");
      el.className = "todo";
      el.innerHTML = item;

      node[0].appendChild(el);
    }
  }
}

export default TodoApp;
