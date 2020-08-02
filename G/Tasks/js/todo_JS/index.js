var that;
var itemsSum = 0;
var itemsCompletedNumber = 0;

class Todo {
  constructor(id) {
    this.main = document.querySelector(id);
    //list部分
    this.deleteAllBtn = this.main.querySelector(".todo_input_alldelete");
    this.text = this.main.querySelector("#text_input");
    that = this;

    //tab栏
    this.tab = this.main.querySelector(".tab");
    this.tabItems = this.main.querySelector(".tab_items");
    this.tabAll = this.main.querySelector(".tab_all");
    this.tabActive = this.main.querySelector(".tab_active");
    this.tabCompleted = this.main.querySelector(".tab_completed");
    // console.log(this);
    this.update();
    this.text.onblur = this.todoAdd;
    //绑定回车键
    document.addEventListener("keyup", function (e) {
      if (e.keyCode == 13) {
        that.text.onblur();
      }
    });

    this.itemsChange();
    this.tabAll.onclick = this.allItems;
    this.tabActive.onclick = this.activeItems;
    this.tabCompleted.onclick = this.completedItems;
  }

  //更新list数量
  update() {
    this.list = this.main.querySelector("tbody");
    this.table = this.main.querySelector("table");
    this.btn = this.main.querySelectorAll(".btn");
    this.listValue = this.main.querySelectorAll(".todo_value");
    this.deleteListBtn = this.main.querySelectorAll(".todo_delete");
    this.tr = this.main.querySelectorAll("tr");

    itemsSum = this.btn.length;
    this.tabHidden();

    for (let i = 0; i < this.btn.length; i++) {
      this.btn[i].index = i;
      this.btn[i].onclick = this.deleteLine;
      this.deleteListBtn[i].index = i;
      this.deleteListBtn[i].onclick = this.deleteList;
    }
    if (this.tabItems) {
      this.itemsChange();
    }

    this.deleteAllBtn.onclick = this.deleteAll;
  }
  //添加新的list
  todoAdd() {
    if (this.value) {
      // console.log("ok");
      that.list.insertAdjacentHTML(
        "afterbegin",
        '<td><div class="btn"></div></td><td class="todo_value">' +
          this.value +
          "</td><td class='todo_delete'></td>"
      );
      this.value = "";
    }
    that.update();
    //completed被选中的情况下，新添加的事件隐藏
    if (that.tabCompleted.className == "tab_completed selected") {
      that.tabCompleted.onclick();
      console.log("1");
    }
  }
  //添加删除线
  deleteLine() {
    this.className == "btn checked"
      ? ((this.className = "btn"),
        (that.listValue[this.index].className = "todo_value"),
        itemsCompletedNumber--)
      : ((this.className = "btn checked"),
        (that.listValue[this.index].className = "todo_value completed"),
        itemsCompletedNumber++);
    if (that.tabItems) {
      that.itemsChange();
    }
  }
  //删除某个list
  deleteList() {
    if (that.listValue[this.index].className == "todo_value completed") {
      itemsCompletedNumber--;
    }
    that.tr[this.index].remove();
    that.update();
  }

  //删除全部list
  deleteAll() {
    that.list.remove();
    that.table.insertAdjacentHTML("afterbegin", "<tbody></tbody>");
    that.update();
  }

  //变更tab栏中items数目
  itemsChange() {
    let left = `${itemsSum - itemsCompletedNumber} `;
    if (left > 0) {
      that.tabItems.innerText = left + "items left";
    } else {
      that.tabItems.innerText = "0 items left";
    }
  }

  //tab栏All显示全部list
  allItems() {
    that.selectedCancle();
    this.className = "tab_all selected";
    for (let i = 0; i < that.btn.length; i++) {
      that.tr[i].className = "";
    }
  }

  //tab栏Active显示未处理事件
  activeItems() {
    that.allItems();
    that.selectedCancle();
    this.className = "tab_active selected";
    for (let i = 0; i < that.btn.length; i++) {
      if (that.btn[i].className == "btn checked") {
        that.tr[i].className = "hidden";
      }
    }
  }

  //tab栏Completed显示已完成事件
  completedItems() {
    that.allItems();
    that.selectedCancle();
    this.className = "tab_completed selected";
    for (let i = 0; i < that.btn.length; i++) {
      if (that.btn[i].className == "btn") {
        that.tr[i].className = "hidden";
      }
    }
  }

  //tab栏显示与否
  tabHidden() {
    if (itemsSum == 0) {
      that.tab.className = "tab hidden";
    } else {
      that.tab.className = "tab";
    }
  }

  //取消tab栏三个按钮的选中边框
  selectedCancle() {
    that.tabAll.className = "tab_all";
    that.tabActive.className = "tab_active";
    that.tabCompleted.className = "tab_completed";
  }
}

new Todo("#todo");
