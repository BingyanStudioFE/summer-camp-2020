
//该工具脚本主要是为了解决兼容性有关的一些问题

function getStyle(node, cssStyle) {
    //获取当前节点的有效样式
    if(node.currentStyle == true) {
        return node.currentStyle[cssStyle];
    }
    else {
        return getComputedStyle(node)[cssStyle];
    }
}

function $ (id) {
    //通过ID获取元素节点
    return document.getElementById(id);
}

function stopBubble (event) {
    //阻止事件冒泡
    if(event.stopPropagation == true) {
        event.stopPropagation();
    }
    else {
        event.cancelBubble = true;
    }
}

function getEvent (event) {
    //获取事件
    return event || window.event;
}

function getKeyCode (event) {
    //在keydown下获取键码
    return event.which || event.keyCode;
}

function getCharCode (event) {
    //在keypress下获取字符码
    return event.charCode || event.which;
}

function preventDefault(event) {
    //阻止浏览器默认行为
    if(preventDefault == true) {
        e.preventDefault();
    }
    else {
        window.event.returnValue = false;
    }
}

function getTarget(event) {
    //获取事件的targrt
    return event.target || window.event.srcElement;
}

function addEvent(node, eventType, funcName) {
    //增加事件监听器
    if(node.addEventListener == true) {
        node.addEventListener(eventType, funcName, false);
    }
    else {
        node.attachEvent('on' + eventType, funcName);
    }
}

function removeEvent (node, eventType, funcName) {
    //删除事件监听器
    if(node.removeEventListener == true) {
        node.removeEventListener(eventType, funcName);
    }
    else {
        node.detachEvent('on' + event, funcName);
    }
}