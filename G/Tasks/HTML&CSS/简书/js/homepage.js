// 轮播图
var item = document.getElementsByClassName("images_list_item");
var beforeBtn = document.getElementById("button_left");
var nextBtn = document.getElementById("button_right");
var point = document.getElementsByClassName("point");
var number = 0;

var clearActive = function () {
  for (var i = 0; i < 2; i++) {
    item[i].className = "images_list_item";
  }
  for (var i = 0; i < 2; i++) {
    point[i].className = "point";
  }
};

var change = function () {
  clearActive();
  item[number].className = "images_list_item active";
  point[number].className = "point active";
};

var next = function () {
  if (number < 1) {
    number++;
  } else {
    number = 0;
  }
  change();
};

var before = function () {
  if (number == 0) {
    number = 1;
  } else {
    number--;
  }
  change();
};

var time = 20;

setInterval(function () {
  if (time == 20) {
    next();
    time = 0;
  }
  time++;
}, 100);

beforeBtn.addEventListener("click", function () {
  before();
  time = 0;
});

nextBtn.addEventListener("click", function () {
  next();
  time = 0;
});

for (var i = 0; i < 2; i++) {
  point[i].addEventListener("click", function () {
    var pointNumber = this.getAttribute("data-number");
    number = pointNumber;
    change();
    time = 0;
  });
}

// 点击展开
var unfoldBtn = document.getElementsByClassName("unfold");
var unfoldContent = document.getElementsByClassName("passage_info_content_txt");
var passageNumber = 0;
var judge = 0;

function judgeFold() {
  document.getElementById("fold_unfold").innerHTML =
    judge == 0 ? "展开" : "收回";
}

var unfold = function () {
  if (judge == 0) {
    // judge = 1;
    unfoldContent[passageNumber].className = "passage_info_content_txt";
  } else {
    // judge = 0;
    unfoldContent[passageNumber].className =
      "passage_info_content_txt content_fold";
  }
};

for (var i = 0; i < unfoldContent.length; i++) {
  unfoldBtn[i].addEventListener("click", function () {
    var index = this.getAttribute("data-all");
    passageNumber = index;
    judgeFold();
    if (judge == 0) {
      judge = 1;
    } else {
      judge = 0;
    }
    unfold();
  });
}

// 换一批、展开全部、关注
var authors = document.getElementsByClassName("author");
var changeBtn = document.getElementById("change");
var allAuthorBtn = document.getElementById("allAuthor");
var count = 10;
var authorsNumber = new Array();

// 给作者标序号
for (var i = 0; i < count; i++) {
  authorsNumber[i] = i;
}

// 随机排列作者序号
function randomNumber() {
  authorsNumber.sort(function () {
    return 0.5 - Math.random();
  });
}

// 清空hidden
function clearHidden() {
  for (var i = 0; i < count; i++) {
    authors[authorsNumber[i]].className = "author";
  }
}

// 数组前五个隐藏
function changeRandom() {
  for (var i = 0; i < 5; i++) {
    authors[authorsNumber[i]].className = "author hidden";
  }
}

changeRandom();

// 随机换一批
changeBtn.addEventListener("click", function () {
  randomNumber();
  clearHidden();
  changeRandom();
});

// 展开全部
allAuthorBtn.addEventListener("click", function () {
  clearHidden();
});

// 关注
var followBtn = document.getElementsByClassName("follow");
var followed = new Array(10); //存放已关注的作者的序号
var n = 0;

for (var i = 0; i < count; i++) {
  followBtn[i].addEventListener("click", function () {
    followed[n] = this.getAttribute("data-follow");
    n++;
    console.log(followed[n]);
    authors[followed[n]].className = "author hidden";
  });
}
