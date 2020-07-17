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
var foldBtn = document.getElementsByClassName("fold");
var unfoldContent = document.getElementsByClassName("passage_info_content_txt");
var passageNumber = 0;

var unfold = function () {
  unfoldContent[passageNumber].className = "pict_unfold";
  unfoldBtn[passageNumber].className = "unfold hidden";
  foldBtn[passageNumber].className = "fold_appear";
};
var fold = function () {
  unfoldContent[passageNumber].className = "passage_info_content_txt";
  foldBtn[passageNumber].className = "fold";
  unfoldBtn[passageNumber].className = "unfold";
};

for (var i = 0; i < unfoldContent.length; i++) {
  unfoldBtn[i].addEventListener("click", function () {
    var index = this.getAttribute("data-all");
    passageNumber = index;
    unfold();
  });
  foldBtn[i] = addEventListener("click", function () {
    var index = this.getAttribute("data-brief");
    passageNumber = index;
    fold();
  });
}
