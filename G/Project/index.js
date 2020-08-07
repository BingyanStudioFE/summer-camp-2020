//选课与我切换
var classBtn = document.querySelector(".class");
var meBtn = document.querySelector(".me");
var indexPage = document.querySelector(".index_course");
var mePage = document.querySelector(".index_me");

classBtn.addEventListener("click", function () {
  indexPage.className = "index_course";
  mePage.className = "index_me hidden";
  classBtn.className = "class checked";
  meBtn.className = "me";
});
meBtn.addEventListener("click", function () {
  indexPage.className = "index_course hidden";
  mePage.className = "index_me";
  classBtn.className = "class";
  meBtn.className = "me checked";
});

//搜索页切换
var searchBtn = document.querySelector(".menu_search");
var searchPage = document.querySelector(".search");
var index = document.querySelector(".index");
var searchBack = document.querySelector(".search header");

searchBtn.addEventListener("click", function () {
  index.className = "index hidden";
  searchPage.className = "search";
});

searchBack.addEventListener("click", function () {
  index.className = "index";
  searchPage.className = "search hidden";
});

//课程分类
var that;
class Sort {
  constructor(id) {
    this.main = document.querySelector(id);
    console.log(this.main);
    this.foldIcon = this.main.querySelectorAll(".sort_fold");
    this.section = this.main.querySelectorAll(".sort_info_detail");
    this.tags = new Array();
    that = this;
    this.update();
    this.tagFold();

    this.arr = [
      null,
      ".courses_tag_date",
      ".courses_tag_address",
      ".courses_tag_call",
      ".courses_tag_test",
    ];
  }

  update() {
    this.courses = this.main.querySelectorAll(".courses");
    this.classification = this.main.querySelectorAll("li");
    for (let i = 0; i < this.classification.length; i++) {
      this.classification[i].index = i;
      this.classification[i].onclick =
        this.classification[i].className == "" ? this.tagUnfold : this.tagFold;
      this.tags[i] = new Array();
      this.tags[i] = this.section[i].querySelectorAll("div");
      for (let j = 0; j < this.tags[i].length; j++) {
        this.tags[i][j].onclick = this.screen;
        this.tags[i][j].index = i;
      }
    }
    // this.coursesDate = this.main.document.querySelectorAll(".courses_tag_date");
  }

  //折叠所有分类
  tagFold() {
    for (let i = 0; i < that.classification.length; i++) {
      that.section[i].className = "sort_info_detail hidden";
      that.foldIcon[i].className = "sort_fold";
      that.classification[i].className = "";
    }
    that.update();
  }

  //展开对应分类
  tagUnfold() {
    console.log("ok");
    that.tagFold();
    that.section[this.index].className = "sort_info_detail";
    that.foldIcon[this.index].className = "sort_fold checked";
    this.className = "checked";
    that.update();
  }

  //筛选
  screen() {
    let text = this.innerText;
    // console.log(text);
    if (that.arr[this.index]) {
      that.screenTags = that.main.querySelectorAll(that.arr[this.index]);
      that.screenTags = Array.from(that.screenTags);
      console.log(that.screenTags);
      for (let i = 0; i < that.screenTags.length; i++) {
        that.courses[i].className = "courses hidden";
        // console.log(that.screenTags[i].innerText);
        if (that.screenTags[i].innerText == text) {
          that.courses[i].className = "courses";
        }
      }
    } else {
      alert("类别的还没做T T");
    }
  }
}

new Sort("#classify");
