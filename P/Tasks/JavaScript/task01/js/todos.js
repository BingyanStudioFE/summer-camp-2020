let todoList = document.getElementsByClassName('todo-list')[0];
let menu = document.getElementsByClassName('menu')[0];
let left = document.getElementsByClassName('left')[0];
let clear = document.getElementsByClassName('clear')[0];
let decorations = document.getElementsByClassName('decoration');
let addTodo = document.getElementsByClassName('add-todo')[0];
let taggeAll = document.getElementsByClassName('tagge-all')[0];
let status = document.getElementsByClassName('status')[0];
let activeNum = 0;
let allNum = 0;

let nodeTemp = todoList.children[0].cloneNode(true);
todoList.children[0].parentNode.removeChild(todoList.children[0]);
if(! localStorage['nodeMsg']) {
  localStorage['nodeMsg'] = [];
}
else {
  let data = localStorage['nodeMsg'].split(' ');
  for(let i = 1; i < data.length; i += 2) {
    let newNode = nodeTemp.cloneNode(true);
    newNode.children[0].getElementsByTagName('input')[1].value = data[i];
    newNode.setAttribute('class', data[i + 1]);
    todoList.append(newNode);
    if(data[i + 1] === 'active') {
      activeNum++;
    }
    allNum++;
  }
}
refreshLogo();
refreshNum();


addTodo.onkeyup = function (ev) {
  let e = ev || window.event;
  let key = e.which || e.keyCode;
  if(key === 13) {
    let text = addTodo.getElementsByTagName('input')[0].value;
    if(text === '') {
      return;
    }
    else {
      let newNode = nodeTemp.cloneNode(true);
      newNode.children[0].getElementsByTagName('input')[1].value = text;
      todoList.appendChild(newNode);
      addTodo.getElementsByTagName('input')[0].value = '';
      allNum++;
      activeNum++; 
      restorage();
      refreshLogo();
      refreshNum();
      if(status.getElementsByClassName('now')[0].innerHTML.toLowerCase() === 'completed') {
        newNode.style.display = 'none';
      }
    }
  }
}

status.onclick = function (ev) {
  let e = ev || window.event;
  let target = e.target || window.event.srcElement;
  let allItems = todoList.children;
  let allStatus = status.children;
  for(let i = 0; i < allStatus.length; i++) {
    allStatus[i].removeAttribute('class');
  }
  target.setAttribute('class', 'now');
  let strStatus = target.innerHTML === 'All' ? 'Active Completed' : target.innerHTML;
  strStatus = strStatus.toLowerCase();
  for(let i = 0; i < allItems.length; i++) {
    if(strStatus.search(allItems[i].getAttribute('class')) == -1) {
      allItems[i].style.display = 'none';
    }
    else {
      allItems[i].removeAttribute('style');
    }
  }
}
clear.onclick = function () {
  let allItems = todoList.children;
  for(let i = allItems.length - 1; i >= 0; i--) {
    console.log(i);
    if(allItems[i].getAttribute('class') === 'completed') {
      allItems[i].parentNode.removeChild(allItems[i]);
      allNum--;
      refreshLogo();
      restorage();
      restorage();
    }
  }
} 
addTodo.onclick = function (ev) {
  let e = ev || window.event;
  let target = e.target || window.event.srcElement;
  if(target.nodeName.toLowerCase() === 'use') {
    target = target.parentNode;
  }
  if(target.nodeName.toLowerCase() === 'svg') {
    target = target.parentNode;
  }
  if(target.nodeName.toLowerCase() === 'button') {
    let allItems = todoList.children;
    if(activeNum === 0) {
      for(let i = 0; i < allItems.length; i++) {
        allItems[i].setAttribute('class', 'active');
        activeNum = allNum;
        refreshNum();
        restorage();
      }
    }
    else {
      for(let i = 0; i < allItems.length; i++) {
        allItems[i].setAttribute('class', 'completed');
        activeNum = 0;
        refreshNum();
        restorage();
      }
    }
  }
}
todoList.ondblclick = function (ev) {
  let e = ev || window.event;
  let target = e.target || window.event.srcElement;
  console.log(target.nodeName);
  console.log(target.getAttribute('type').toLowerCase());
  if(target.nodeName.toLowerCase() === 'input' && target.getAttribute('type').toLowerCase() === 'text') {
    target.removeAttribute('readonly');
    target.style.width = '447px';
    target.style.border = '0.5px solid #999999';
    target.style.boxShadow = '0 0 1px 1px #999999 inset'
    target.previousElementSibling.style.display = 'none';
    target.previousElementSibling.previousElementSibling.style.display = 'none';
    target.previousElementSibling.previousElementSibling.previousElementSibling.style.display = 'none';
    target.onblur = function () {
    target.setAttribute('readonly', 'true');
    target.removeAttribute('style');
    target.previousElementSibling.removeAttribute('style');
    target.previousElementSibling.previousElementSibling.removeAttribute('style');
    target.previousElementSibling.previousElementSibling.previousElementSibling.removeAttribute('style');
    restorage();
    }
  }
}
todoList.onclick = function (ev) {
  let e = ev || window.event;
  let target = e.target || window.event.srcElement;
  if(target.nodeName.toLowerCase() === 'use') {
    target = target.parentNode;
  }
  if(target.nodeName.toLowerCase() === 'svg') {
    if(target.getAttribute('class').toLowerCase() === 'icon del') {
      target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
      allNum--;
      if(target.parentNode.parentNode.getAttribute('class').toLowerCase() === 'active') {
        activeNum--;
      }
      restorage();
      refreshLogo();
      refreshNum();
      return;
    }
    target = target.parentNode.firstElementChild;
  }
  if(target.nodeName.toLowerCase() === 'input' && target.getAttribute('type').toLowerCase() === 'checkbox') {
    if(target.parentNode.parentNode.getAttribute('class') === 'active') {
      target.parentNode.parentNode.setAttribute('class', 'completed');
      if(status.getElementsByClassName('now')[0].innerHTML.toLowerCase() === 'active') {
        target.parentNode.parentNode.style.display = 'none';
      }
      activeNum--;
      restorage();
      refreshNum ();
    }
    else {
      target.parentNode.parentNode.setAttribute('class', 'active');
      if(status.getElementsByClassName('now')[0].innerHTML.toLowerCase() === 'completed') {
        target.parentNode.parentNode.style.display = 'none';
      }
      activeNum++;
      refreshNum ();
      restorage();
    }
  }
}

function refreshNum () {
  if(activeNum == 1) {
    left.innerHTML = activeNum + ' item left';
  }
  else {
    left.innerHTML = activeNum + ' items left';
  }
  if(allNum - activeNum == 0) {
    clear.style.opacity = 0;
  }
  else {
    clear.style.opacity = 0.5;
  }
  if(activeNum == 0) {
    taggeAll.style.opacity = 1;
  } 
  else {
    taggeAll.style.opacity = 0.4;
  }
}
function refreshLogo() {
  if(allNum == 0) {
    menu.style.display = 'none';
    decorations[0].style.display = 'none';
    decorations[1].style.display = 'none';
    taggeAll.style.opacity = 0;
  }
  else {
    menu.style.display = 'block';
    decorations[0].style.display = 'block';
    decorations[1].style.display = 'block';
    taggeAll.style.opacity = 1;
  }
}

function restorage () {
  let allItems = todoList.children;
  localStorage['nodeMsg'] = [];
  for(let i = 0; i < allItems.length; i++) {
    let value = allItems[i].children[0].getElementsByTagName('input')[1].value;
    localStorage['nodeMsg'] = localStorage['nodeMsg'].concat(' ' + value + ' ' + allItems[i].getAttribute('class'));
  }
}