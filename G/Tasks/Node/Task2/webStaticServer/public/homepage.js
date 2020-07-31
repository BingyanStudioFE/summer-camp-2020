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

var time = 30;

setInterval(function () {
  if (time == 30) {
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
var textChange = document.getElementsByClassName("unfold");
var passageNumber = 0;
var judge = new Array();

for (var i = 0; i < textChange.length; i++) {
  judge[judge.length] = 0;
}

function judgeFold() {
  textChange[passageNumber].innerHTML =
    judge[passageNumber] == 0 ? "展开" : "收回";
}

var unfold = function () {
  if (judge[passageNumber] == 1) {
    unfoldContent[passageNumber].className = "passage_info_content_txt";
  } else {
    unfoldContent[passageNumber].className =
      "passage_info_content_txt content_fold";
  }
};

for (var i = 0; i < unfoldContent.length; i++) {
  var firstTime = 0;
  unfoldBtn[i].addEventListener("click", function () {
    var index = this.getAttribute("data-all");
    passageNumber = index;
    if (firstTime == 0) {
      judge[passageNumber] = 1;
    } else {
      if (judge[passageNumber] == 0) {
        judge[passageNumber] = 1;
      } else {
        judge[passageNumber] = 0;
      }
    }
    firstTime = 1;
    unfold();
    judgeFold();
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
var followed = new Array(); //存放已关注的作者的序号
var followJudge = new Array();

for (var i = 0; i < count; i++) {
  followBtn[i].addEventListener("click", function () {
    followed[followed.length] = this.getAttribute("data-follow") - 0;
    authors[followed[followed.length - 1]].className = "author hidden";
    followBtn[followed[followed.length - 1]].innerHTML = "已关注";

    for (var j = 0; j < 5; j++) {
      if (followed.indexOf(authorsNumber[j]) === -1) {
        authors[authorsNumber[j]].className = "author";
        followed[followed.length] = authorsNumber[j];
        break;
      }
    }
  });
}
