import Todo from "./Todo";

class TodosManager extends Todo {
  getTime() {
    let dd = super.getDate();

    //dd
    let todo_dd = document.getElementById("dd");
    todo_dd.innerText = dd;
  }
}

export default TodosManager;
