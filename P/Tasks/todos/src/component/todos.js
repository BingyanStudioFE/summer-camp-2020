import React from 'react';
import '../css/index.css';

import TodoList from './todo-list.js'
import AddTodo from './add-todo.js'
import Decoration from './decoration.js'
import { isatty } from 'tty';

const fs = require('fs');

class Todos extends React.Component {
  componentDidMount() {
    this.handleMount();
  }
  async handleMount() {
    if(! localStorage['dataMsg']) {
      localStorage['dataMsg'] = [];
    }
    else {
      let data = localStorage['dataMsg'].split(' ');
      for(let i = 1; i < data.length; i += 2) {
        if(data[i + 1] === true || data[i + 1] === 'true') {
          await this.setState({
            todoData: this.state.todoData.concat({
              value: data[i],
              isActive: data[i + 1],
              index: parseInt((i - 1) / 2.0),
              inputStyle: Object.assign(this.state.inputStyleActive),
              circleStyle: Object.assign(this.state.circleStyleActive),
              checkStyle: Object.assign(this.state.checkStyleActive),
              deleteStyle: Object.assign(this.state.deleteStyleLevel0),
              readOnly: true,
              thingsStyle: Object.assign(this.state.thingsStyle)
            })
          });
        }
        else {
          await this.setState({
            todoData: this.state.todoData.concat({
              value: data[i],
              isActive: data[i + 1],
              index: parseInt((i - 1) / 2.0),
              inputStyle: Object.assign(this.state.inputStyleCompleted),
              circleStyle: Object.assign(this.state.circleStyleCompleted),
              checkStyle: Object.assign(this.state.checkStyleCompleted),
              deleteStyle: Object.assign(this.state.deleteStyleLevel0),
              readOnly: true,
              thingsStyle: Object.assign(this.state.thingsStyle)
            })
          });
        }
      }
    }
    this.handleDataChange();
  }
  constructor (props) {
    super (props);
    this.state = {
      bodyStyle: {
        width: '500px',
        margin: '0 auto',
        background: 'white',
        boxShadow: '0 0 2px 2px #e6e6e6'
      },
      checkTagStyle: {
        width: '50px',
        height: '50px',
        position: 'relative'
      },
      inputStyleActive: {
        color: 'black',
        width: '400px',
        height: '46px',
        margin: '1px 0 0 50px',
        outline: 'none',
        border: 'none',
        lineHeight: '48px',
        fontSize: '24px',
        position: 'absolute',
        top: '0',
        left: '0',
        borderRadius: '0',
        cursor: 'default',
        opacity: '0.7',
        textDecoration: 'none',
        boxShadow: 'none'
      },
      inputStyleCompleted: {
        color: 'black',
        width: '400px',
        height: '46px',
        margin: '1px 0 0 50px',
        outline: 'none',
        border: 'none',
        lineHeight: '48px',
        fontSize: '24px',
        position: 'absolute',
        top: '0',
        left: '0',
        borderRadius: '0',
        cursor: 'default',
        opacity: '0.2',
        textDecoration: 'line-through',
        boxShadow: 'none'
      },
      circleStyleCompleted: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        position: 'absolute',
        top: '10px',
        left: '10px',
        boxSizing: 'border-box',
        border: '1px solid #c1dcd7'
      },
      circleStyleActive: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        position: 'absolute',
        top: '10px',
        left: '10px',
        boxSizing: 'border-box',
        border: '1px solid #e6e6e6'
      },
      checkStyleActive: {
        position: 'absolute',
        top: '15px',
        left: '15px',
        fontSize: '20px',
        color: '#5dc2af',
        opacity: '0'
      },
      checkStyleCompleted: {
        position: 'absolute',
        top: '15px',
        left: '15px',
        fontSize: '20px',
        color: '#5dc2af',
        opacity: '1'
      },
      checkStyle: {
        position: 'absolute',
        top: '15px',
        left: '15px',
        fontSize: '20px',
        color: '#5dc2af',
        display: 'none'
      },
      deleteStyleLevel0: {
        position: 'absolute',
        top: '15px',
        left: '460px',
        fontSize: '20px',
        color: '#af5b5e',
        opacity: '0'
      },
      deleteStyleLevel1: {
        position: 'absolute',
        top: '15px',
        left: '460px',
        fontSize: '20px',
        color: '#af5b5e',
        opacity: '0.4'
      },
      deleteStyleLevel2: {
        position: 'absolute',
        top: '15px',
        left: '460px',
        fontSize: '20px',
        color: '#af5b5e',
        opacity: '1'
      },
      menuStyle: {
        boxShadow: '0 0 1px 1px #e6e6e6',
        width: '500px',
        height: '35px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        border: '0.5px solid #e6e6e6',
        margin: '0 auto',
        display: 'none'
      },
      decorationStyle1: {
        height: '4px',
        width: '490px',
        margin: '0 auto',
        opacity: '0.5',
        background: 'white',
        border: '0.5px solid #e6e6e6',
        boxShadow: '0 0 1px 1px #e6e6e6',
        display: 'none'
      },
      decorationStyle2: {
        height: '4px',
        width: '480px',
        margin: '0 auto',
        opacity: '0.5',
        background: 'white',
        border: '0.5px solid #e6e6e6',
        boxShadow: '0 0 1px 1px #e6e6e6',
        display: 'none'
      },
      clearCompletedStyle: {
        fontSize: '13px',
        opacity: '0.5',
        fontWeight: 'bold',
        cursor: 'default'
      },
      statusLevel1: {
        showNow: true, 
        style: {
          margin: '0 5px',
          fontSize: '13px',
          cursor: 'pointer',
          padding: '3px',
          boxSizing: 'border-box',
          fontWeight: 'bold',
          cursor: 'default',
          borderRadius: '5px',
          border: '1px solid #f0d7d7'
        }
      },
      statusLevel0: {
        showNow: false, 
        style: {
          margin: '0 5px',
          fontSize: '13px',
          cursor: 'pointer',
          padding: '3px',
          boxSizing: 'border-box',
          fontWeight: 'bold',
          cursor: 'default',
          borderRadius: '5px',
          border: 'none'
        }
      },
      checkAllStyle: {
        width: '40px',
        height: '40px',
        background: 'white',
        border: 'none',
        outline: 'none',
        opacity: '1'
      },
      thingsStyle: {
        width: '500px',
        height: '50px',
        border: '0.5px solid #e6e6e6',
        boxSizing: 'border-box',
        position: 'relative',
        boxShadow: '0 0 1px 1px #e6e6e6',
        margin: '0 auto'
      },
      inputValue: '',
      todoData: [],
      allThings: '',
      activeThings: '',
      statusData: [
        {
          showNow: true, 
          style: {
            margin: '0 5px',
            fontSize: '13px',
            cursor: 'pointer',
            padding: '3px',
            boxSizing: 'border-box',
            fontWeight: 'bold',
            cursor: 'default',
            borderRadius: '5px',
            border: '1px solid #f0d7d7'
          }
        },
        {
          showNow: false, 
          style: {
            margin: '0 5px',
            fontSize: '13px',
            cursor: 'pointer',
            padding: '3px',
            boxSizing: 'border-box',
            fontWeight: 'bold',
            cursor: 'default',
            borderRadius: '5px',
            border: 'none'
          }
        },
        {
          showNow: false, 
          style: {
            margin: '0 5px',
            fontSize: '13px',
            cursor: 'pointer',
            padding: '3px',
            boxSizing: 'border-box',
            fontWeight: 'bold',
            cursor: 'default',
            borderRadius: '5px',
            border: 'none'
          }
        },
      ]
    }
  }
  async handleCheckBoxClick (ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');   
    if(! this.state.todoData[index]) {
      return
    }
    
    let isActive = this.state.todoData[index].isActive;
    if(isActive === 'true') {
      isActive = true;
    }
    else if(isActive === 'false') {
      isActive = false;
    }
    let newList = this.state.todoData.concat();
    newList[index].isActive = !isActive;
    newList[index].inputStyle = isActive ? Object.assign(this.state.inputStyleCompleted) : Object.assign(this.state.inputStyleActive);
    newList[index].circleStyle = isActive ? Object.assign(this.state.circleStyleCompleted) : Object.assign(this.state.circleStyleActive);
    newList[index].checkStyle = isActive ? Object.assign(this.state.checkStyleCompleted) : Object.assign(this.state.checkStyleActive);
    await this.setState({
      todoData: newList,
    });
    this.handleDataChange();
  }
  async handleOutputChange(ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let newList = this.state.todoData.concat();
    let index = target.getAttribute('index');
    newList[index].value = target.value;
    await this.setState({
      todoData: newList
    })
    this.handleDataChange();
  }
  handleOutputDblclick(ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    if(target.getAttribute('readonly') === null) {
      return
    }
    target.removeAttribute('readonly');
    let index = target.getAttribute('index');
    if(! this.state.todoData[index]) {
      return
    }
    let newList = this.state.todoData.concat();
    let newInputStyle = {};
    let newCheckStyle = {};
    let newCircleStyle = {};
    Object.assign(newInputStyle, this.state.todoData[index].inputStyle, {width: '447px', border: '0.5px solid #999999', boxShadow: '0 0 1px 1px #999999 inset'});
    Object.assign(newCheckStyle, this.state.todoData[index].checkStyle, {display: 'none'});
    Object.assign(newCircleStyle, this.state.todoData[index].circleStyle, {display: 'none'});
    newList[index].inputStyle = newInputStyle;
    newList[index].checkStyle = newCheckStyle;
    newList[index].circleStyle = newCircleStyle;
    newList[index].deleteStyle = Object.assign(this.state.deleteStyleLevel0);
    newList[index].readOnly = false;
    this.setState({
      todoData: newList,
    })
  }
  handleOutputBlur(ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');
    if(! this.state.todoData[index] || target.readOnly === true) {
      return
    }
    target.setAttribute('readonly', true);
    let newList = this.state.todoData.concat();
    let newInputStyle = {};
    let newCheckStyle = {};
    let newCircleStyle = {};
    Object.assign(newInputStyle, this.state.todoData[index].inputStyle, {width: '400px', border: 'none', boxShadow: 'none'});
    Object.assign(newCheckStyle, this.state.todoData[index].checkStyle, {display: 'block'});
    Object.assign(newCircleStyle, this.state.todoData[index].circleStyle, {display: 'block'});
    newList[index].inputStyle = newInputStyle;
    newList[index].checkStyle = newCheckStyle;
    newList[index].circleStyle = newCircleStyle;
    newList[index].deleteStyle = Object.assign(this.state.deleteStyleLevel0);
    newList[index].readOnly = true;
    this.setState({
      todoData: newList,
    })
  }
  handleInputChange(ev) {
    let e = ev || window.event;
    this.setState({
      inputValue: e.target.value
    })
  }
  async handleInputKeyUp(ev) {
    let e = ev || window.event;
    let key = e.which || e.keyCode;
    if(key === 13) {
      let value = this.state.inputValue.trim();
      if(value === '') {
        return
      }
      await this.setState({
        todoData: this.state.todoData.concat({
          value: value,
          isActive: true,
          index: this.state.todoData.length || 0,
          inputStyle: Object.assign(this.state.inputStyleActive),
          circleStyle: Object.assign(this.state.circleStyleActive),
          checkStyle: Object.assign(this.state.checkStyleActive),
          deleteStyle: Object.assign(this.state.deleteStyleLevel0),
          readOnly: true,
          thingsStyle: Object.assign(this.state.thingsStyle)
        }),
        inputValue: ''
      });
      this.handleDataChange();
    }
  }
  handleThingsMouseEnter (ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');
    if (! this.state.todoData[index] || this.state.todoData[index].readOnly === false) {
      return
    }
    let newList = this.state.todoData.concat();
    newList[index].deleteStyle = Object.assign(this.state.deleteStyleLevel1);
    this.setState({
      todoData: newList,
    })
  }
  handleThingsMouseLeave (ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');
    if (! this.state.todoData[index] || this.state.todoData[index].readOnly === false) {
      return
    }
    let newList = this.state.todoData.concat();
    newList[index].deleteStyle = Object.assign(this.state.deleteStyleLevel0);
    this.setState({
      todoData: newList,
    })
  }
  handleDeleteMouseEnter (ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');
    if (! this.state.todoData[index] || this.state.todoData[index].readOnly === false) {
      return
    }
    let newList = this.state.todoData.concat();
    newList[index].deleteStyle = Object.assign(this.state.deleteStyleLevel2);
    this.setState({
      todoData: newList,
    })
  }
  handleDeleteMouseLeave (ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');
    if (! this.state.todoData[index] || this.state.todoData[index].readOnly === false) {
      return
    }
    let newList = this.state.todoData.concat();
    newList[index].deleteStyle = Object.assign(this.state.deleteStyleLevel1);
    this.setState({
      todoData: newList,
    })
  }
  handleDataChange () { 
    let list = this.state.todoData;
    let allThings = list.length;
    let activeThings = 0;
    for(let i = 0; i < allThings; i++) {
      if(list[i].isActive === true || list[i].isActive === 'true') {
        activeThings++;
      }
    }
    this.setState({
      allThings: allThings,
      activeThings: activeThings
    })
    if(allThings != 0) {
      this.setState({
        menuStyle: {...this.state.menuStyle, display: 'flex'},
        decorationStyle1: {...this.state.decorationStyle1, display: 'block'},
        decorationStyle2: {...this.state.decorationStyle2, display: 'block'} 
      })
    }
    else {
      this.setState({
        menuStyle: {...this.state.menuStyle, display: 'none'},
        decorationStyle1: {...this.state.decorationStyle1, display: 'none'},
        decorationStyle2: {...this.state.decorationStyle2, display: 'none'},
      })
    }
    if(allThings > activeThings) {
      this.setState({
        clearCompletedStyle: {...this.state.clearCompletedStyle, opacity: '0.5'}
      })
    }
    else {
      this.setState({
        clearCompletedStyle: {...this.state.clearCompletedStyle, opacity: '0'}
      })
    }
    let allChecked = activeThings === 0 ? true : false;
    let opacity = {opacity: allChecked === true ? '1' : '0.4'}
    this.setState({
      checkAllStyle: {...this.state.checkAllStyle, ...opacity}
    })
    let allData = this.state.todoData;
    localStorage['dataMsg'] = [];
    for(let i = 0; i < allData.length; i++) {
    let value = allData[i].value;
    let isActive = allData[i].isActive;
    localStorage['dataMsg'] = localStorage['dataMsg'].concat(' ' + value + ' ' + isActive);
  }
  }
  handleStatusMouseDown (ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');
    if(this.state.statusData[index].showNow === true) {
      return
    }
    let newStatus = this.state.statusData.concat();
    let newStyle = {};
    Object.assign(newStyle, this.state.statusLevel1.style);
    newStatus[index].style = newStyle;
    for(let i = 0; i < 3; i++) {
      if(i != index) {
        newStatus[i].showNow = false;
        let newStyle = {};
        Object.assign(newStyle, this.state.statusLevel0.style);
        newStatus[i].style = newStyle;
      }
      else {
        newStatus[i].showNow = true;
      }
    }
    this.setState({
      statusData: newStatus
    });
    let newList = this.state.todoData.concat();
    for(let i = 0; i < newList.length; i++) {
      let newStyle = {};
      if(index === '0'){
        Object.assign(newStyle, this.state.todoData[i].thingsStyle, {display: 'block'});
      }
      else if(index === '1') {
        if(this.state.todoData[i].isActive === true || this.state.todoData[i].isActive === 'true') {
          Object.assign(newStyle, this.state.todoData[i].thingsStyle, {display: 'block'});
        }
        else {
          Object.assign(newStyle, this.state.todoData[i].thingsStyle, {display: 'none'});
        }
      }
      else if(index === '2') {
        if(this.state.todoData[i].isActive === false || this.state.todoData[i].isActive === 'false') {
          Object.assign(newStyle, this.state.todoData[i].thingsStyle, {display: 'block'});
        }
        else {
          Object.assign(newStyle, this.state.todoData[i].thingsStyle, {display: 'none'});
        }
      }
      newList[i].thingsStyle = newStyle;
    }
    this.setState ({
      todoData: newList
    })
  }
  handleStatusMouseEnter (ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');
    if(this.state.statusData[index].showNow === true) {
      return
    }
    let newStatus = this.state.statusData.concat();
    let newStyle = {};
    Object.assign(newStyle, this.state.statusLevel1.style);
    newStatus[index].style = newStyle;
    this.setState({
      statusData: newStatus
    })
  }
  handleStatusMouseLeave (ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');
    if(this.state.statusData[index].showNow === true) {
      return
    }
    let newStatus = this.state.statusData.concat();
    let newStyle = {};
    Object.assign(newStyle, this.state.statusLevel0.style);
    newStatus[index].style = newStyle;
    this.setState({
      statusData: newStatus
    })
  }
  async handleClearCompletedClick () {
    let newList = [];
    let _index = 0;
    for(let i = 0; i < this.state.todoData.length; i++) {
      if(this.state.todoData[i].isActive === true || this.state.todoData[i].isActive === 'true') {
        let newNode = Object.assign(this.state.todoData[i]);
        newNode.index = _index++;
        newList.push(newNode);
      }
    }
    await this.setState({
      todoData: newList
    })
    this.handleDataChange();
  }
  async handleDeleteClick (ev) {
    let e = ev || window.event;
    let target = e.target || window.event.srcElement;
    let index = target.getAttribute('index');
    let newList = [];
    let _index = 0;
    for(let i = 0; i < this.state.todoData.length; i++) {
      if(i != index) {
        let newNode = Object.assign(this.state.todoData[i]);
        newNode.index = _index++;
        newList.push(newNode);
      }
    }
    if(index != newList.length)
      newList[index].deleteStyle = Object.assign(this.state.deleteStyleLevel2);
    await this.setState({
      todoData: newList
    })
    this.handleDataChange();
  }
  async handleCheckAllClick() {
    let newList = [];
    let allChecked = true;
    let opacity = {};
    for(let i = 0; i < this.state.todoData.length; i++) {
      if(this.state.todoData[i].isActive === true || this.state.todoData[i].isActive === 'true') {
        allChecked = false;
        break;
      }
    }
    for(let i = 0; i < this.state.todoData.length; i++) {
      let newNode = Object.assign(this.state.todoData[i]);
      newNode.isActive = allChecked === true ? true : false;
      newNode.inputStyle = allChecked === false ? Object.assign(this.state.inputStyleCompleted) : Object.assign(this.state.inputStyleActive);
      newNode.circleStyle = allChecked === false ? Object.assign(this.state.circleStyleCompleted) : Object.assign(this.state.circleStyleActive);
      newNode.checkStyle = allChecked === false ? Object.assign(this.state.checkStyleCompleted) : Object.assign(this.state.checkStyleActive);
      newList.push(newNode);
    }
    opacity = {opacity: allChecked === true ? '1' : '0.4'}
    await this.setState({
      todoData: newList,
      checkAllStyle: {...this.state.checkAllStyle, ...opacity}
    })
    this.handleDataChange();
  }
  render() {
    return (
      <>
        <div style={this.state.bodyStyle}>
          <AddTodo 
            iconBoxStyle={this.state.checkAllStyle}
            inputValue={this.state.inputValue} onInputChange={this.handleInputChange.bind(this)}
            onInputKeyUp={this.handleInputKeyUp.bind(this)} 
            onCheckAllClick={this.handleCheckAllClick.bind(this)}
          />
          <TodoList 
            todoData={this.state.todoData} menuStyle={this.state.menuStyle} left={this.state.activeThings}
            clearCompletedStyle={this.state.clearCompletedStyle} statusData={this.state.statusData}
            onCheckBoxClick={this.handleCheckBoxClick.bind(this)}
            onOutputDblclick={this.handleOutputDblclick.bind(this)}
            onOutputChange={this.handleOutputChange.bind(this)}
            onOutputMouseEnter={this.handleThingsMouseEnter.bind(this)} onOutputMouseLeave={this.handleThingsMouseLeave.bind(this)} 
            onDeleteMouseEnter={this.handleDeleteMouseEnter.bind(this)} onDeleteMouseLeave={this.handleDeleteMouseLeave.bind(this)}
            onOutputBlur={this.handleOutputBlur.bind(this)}
            onStatusMouseEnter={this.handleStatusMouseEnter.bind(this)} onStatusMouseLeave={this.handleStatusMouseLeave.bind(this)}
            onStatusMouseDown={this.handleStatusMouseDown.bind(this)}
            onClearCompletedClick={this.handleClearCompletedClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)}
          />
        </div>
        <Decoration 
          decorationStyle1={this.state.decorationStyle1}
          decorationStyle2={this.state.decorationStyle2}
        />
      </>
    )
  }
}



export default Todos
