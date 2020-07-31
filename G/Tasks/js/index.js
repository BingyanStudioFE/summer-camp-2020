var that;
var itemsSum = 0;
var itemsCompleted = 0;
class Todo {
  constructor(id) {
    this.main = document.querySelector(id);
    //list部分
    this.text = this.main.querySelector("#text_input");
    this.list = this.main.querySelector("tbody");
    that = this;
    console.log(this);
    this.update();
    this.text.onblur = this.todoAdd;

    //tab栏
    this.tabItems = this.main.querySelector(".tab_items");
    this.tabAll = this.main.querySelector(".tab_all");
    this.tabActive = this.main.querySelector(".tab_active");
    this.tabCompleted = this.main.querySelector(".tab_completed");

    this.itemsChange();
  }

  //更新list数量
  update() {
    that.btn = that.main.querySelectorAll(".btn");
    that.listValue = that.main.querySelectorAll(".todo_value");
    that.deleteListBtn = that.main.querySelectorAll(".todo_delete");
    that.tr = that.main.querySelectorAll("tr");

    itemsSum = that.btn.length;

    for (var i = 0; i < that.btn.length; i++) {
      that.btn[i].index = i;
      that.btn[i].onclick = that.deleteLine;
      that.deleteListBtn[i].index = i;
      that.deleteListBtn[i].onclick = that.deleteList;
    }
    that.itemsChange();
  }
  //添加新的list
  todoAdd() {
    if (this.value) {
      console.log("ok");
      that.list.insertAdjacentHTML(
        "afterbegin",
        '<td><div class="btn"></div></td><td class="todo_value">' +
          this.value +
          "<span class='todo_delete'></span></td>"
      );
      this.value = "";
    }
    that.update();
  }
  //添加删除线
  deleteLine() {
    console.log(that.btn.length);
    this.className == "btn checked"
      ? ((this.className = "btn"),
        (that.listValue[this.index].className = "todo_value"),
        itemsCompleted++)
      : ((this.className = "btn checked"),
        (that.listValue[this.index].className = "todo_value completed"),
        itemsCompleted--);
  }
  //删除list
  deleteList() {
    that.tr[this.index].remove();
    that.update();
  }

  //变更tab栏中items数目
  itemsChange() {
    let left = `${itemsSum - itemsCompleted} items left`;
    console.log(this.tabItems);
    // that.tabItems.innerHTML = left;
  }
}

new Todo("#todo");
