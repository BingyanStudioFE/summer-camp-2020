var hoverTopic = document.getElementsByClassName("hover-topic");
var flex = document.getElementsByClassName("flex");
console.log(flex);

function toggleDisplay(node1, node2) {
  for (let i = 0; i < node1.length; i++) {
    node1[i].onmouseover = function () {
      node2[i].style.display = "inline-block";
    };
    node1[i].onmouseout = function () {
      node2[i].style.display = "none";
    };
  }
}

for (let i = 0; i < flex.length; i++) {
  console.log(i);
  flex[i].onmouseover = function () {
    hoverTopic[0].style.display = "inline-block";
  };

  flex[i].onmouseout = function () {
    hoverTopic[0].style.display = "none";
  };
}

var scans = document.getElementsByClassName("scan");
var aliImgLi = document.getElementsByClassName("ali-img-li");

toggleDisplay(aliImgLi, scans);

var chooseCountry = document.getElementsByClassName("choose-country");
var country = document.getElementsByClassName("country");

chooseCountry[0].onmouseover = function () {
  country[0].style.display = "inline-block";
  chooseCountry[0].style.backgroundColor = "#fff";
};

chooseCountry[0].onmouseout = function () {
  country[0].style.display = "none";
  chooseCountry[0].style.backgroundColor = "";
};

//懒加载
var img = document.getElementsByTagName("img");
var n = 0;
var num = img.length;

lazyload();

window.onscroll = lazyload;

function lazyload() {
  console.log("load");
  var seeHeight = document.documentElement.clientHeight;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  for (var i = n; i < num; i++) {
    if (img[i].offsetTop -100 < seeHeight + scrollTop) {
      if (img[i].getAttribute("src") == "img/default.png") {
        img[i].src = img[i].getAttribute("data-src");
        console.log(img[i].src);
        if(img[i].src=="https://img.alicdn.com/tfscom/i1/1581756766/TB2TF0ch0zJ8KJjSspkXXbF7VXa_!!1581756766.jpg_180x180xzq90.jpg_.webp")
        {
          console.log("jdfks")
        }
      }
      n = i + 1;
    }
  }
}

//轮播图
var swipers = document.getElementById("swiper-img");
var buttons = document.getElementById("buttons").getElementsByTagName("span");
var swiperN = 0;
var time = setInterval(function begin() {
  for (let i = 0; i < 4; i++) {
    setTimeout(function () {
      for (let j = 0; j < buttons.length; j++) {
        if (j !== swiperN) {
          buttons[j].className = "";
        } else {
          buttons[j].className = "on";
        }
      }

      swipers.style.left = -swiperN * 131 * (i + 1) + "px";
      console.log(swipers.style.left);
    }, 30 * i);
  }

  console.log(swipers.style.left);
  swiperN++;
  console.log(swiperN);
  if (swiperN >= 5) {
    swiperN = 0;
  }
}, 3000);

for (let k = 0; k < buttons.length; k++) {
  buttons[k].onclick = function () {
    clearInterval(time);
    swiperN = k;
    let next = true;
    time = setInterval(function begin() {
      console.log(swiperN);

      if (swiperN >= 5) {
        swiperN = 0;
      }

      for (let j = 0; j < buttons.length; j++) {
        let onButton = swiperN;
        if (next === true) {
          onButton++
        }
       
        if(onButton>=5){
          onButton = 0
        }
        if (j !== onButton) {
          buttons[j].className = "";
        } else {
          buttons[j].className = "on";
      }
    }
      for (let i = 0; i < 4; i++) {
        setTimeout(function () {
          swipers.style.left = -swiperN * 131 * (i + 1) + "px";
        }, 30 * i);
      }

      console.log(swipers.style.left);
      swiperN++;
      if (swiperN >= 5) {
        swiperN = 0;
      }
    }, 3000);

    for (let j = 0; j < buttons.length; j++) {
      if (j !== k) {
        buttons[j].className = "";
      } else {
        buttons[j].className = "on";
      }
      swipers.style.left = -k * 526 + "px";
    }
  };
}
