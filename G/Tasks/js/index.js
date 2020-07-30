var text = document.querySelector("#text_input");
var list = document.querySelector("ul");

text.onblur = function () {
  if (text.value) {
    console.log("ok");
    let lis = document.createElement("li");
    list.appendChild(lis);
  }
};
