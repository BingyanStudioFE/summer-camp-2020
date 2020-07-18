var hoverTopic = document.getElementsByClassName("hover-topic");
var flex = document.getElementsByClassName("flex");
console.log(flex);

for (let i = 0; i < flex.length; i++) {
  console.log(i);
  flex[i].onmouseover = function () {
    hoverTopic[0].style.display = "inline-block";
  };
  flex[i].onmouseout = function () {
    hoverTopic[0].style.display = "none";
  };
}
