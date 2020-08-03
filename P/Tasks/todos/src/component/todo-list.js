import React from 'react';
import '../css/index.css';
import Things from './things.js'

class TodoList extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    
    return (
      <div>
        <List 
          todoData={this.props.todoData}
          onCheckBoxClick={this.props.onCheckBoxClick}
          onOutputDblclick={this.props.onOutputDblclick} onOutputChange={this.props.onOutputChange}
          onOutputMouseEnter={this.props.onOutputMouseEnter} onOutputMouseLeave={this.props.onOutputMouseLeave} 
          onDeleteMouseEnter={this.props.onDeleteMouseEnter} onDeleteMouseLeave={this.props.onDeleteMouseLeave}
          onOutputBlur={this.props.onOutputBlur}
          onDeleteClick={this.props.onDeleteClick}
        />
        <Menu 
          data={this.props.todoData} menuStyle={this.props.menuStyle}
          left={this.props.left}
          clearStyle={this.props.clearCompletedStyle}
          statusData={this.props.statusData}
          onStatusMouseEnter={this.props.onStatusMouseEnter} onStatusMouseLeave={this.props.onStatusMouseLeave}
          onStatusMouseDown={this.props.onStatusMouseDown}
          onClearCompletedClick={this.props.onClearCompletedClick} 
        />
      </div>
    )
  }
}

class List extends React.Component {
  render () {
    if(! this.props.todoData.length) {
      return <></>
    }
    return (
    <>
      {this.props.todoData.map((item, index) => {
        return <Things 
          key={index} data={item} onCheckBoxClick={this.props.onCheckBoxClick}
          onOutputDblclick={this.props.onOutputDblclick} onOutputChange={this.props.onOutputChange}
          onOutputMouseEnter={this.props.onOutputMouseEnter} onOutputMouseLeave={this.props.onOutputMouseLeave} 
          onDeleteMouseEnter={this.props.onDeleteMouseEnter} onDeleteMouseLeave={this.props.onDeleteMouseLeave}
          onOutputBlur={this.props.onOutputBlur}
          onDeleteClick={this.props.onDeleteClick}
        />
      })}  
    </>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusMainStyle: {
        margin: '0 5px',
        display: 'flex',
        opacity: '0.5',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      },
      defaultStyle: {
        fontSize: '13px',
        opacity: '0.5',
        fontWeight: 'bold',
        cursor: 'default'
      }
    }
  }
  render () {
    let leftItem = this.props.left <= 1 ? this.props.left + ' item left' : this.props.left + ' items left';
    return (
      <div style={this.props.menuStyle}>
        <div style={this.state.defaultStyle}>{leftItem}</div>
        <div style={this.state.statusMainStyle}>
          <Status 
            innerHTML={'All'} statusData={this.props.statusData[0]} index={0}
            onStatusMouseEnter={this.props.onStatusMouseEnter} onStatusMouseLeave={this.props.onStatusMouseLeave}
            onStatusMouseDown={this.props.onStatusMouseDown}
          />
          <Status 
            innerHTML={'Active'} statusData={this.props.statusData[1]} index={1}
            onStatusMouseEnter={this.props.onStatusMouseEnter} onStatusMouseLeave={this.props.onStatusMouseLeave}
            onStatusMouseDown={this.props.onStatusMouseDown}
          />
          <Status 
            innerHTML={'Completed'} statusData={this.props.statusData[2]} index={2}
            onStatusMouseEnter={this.props.onStatusMouseEnter} onStatusMouseLeave={this.props.onStatusMouseLeave}
            onStatusMouseDown={this.props.onStatusMouseDown}
          />
        </div>
        <div 
          style={this.props.clearStyle} onClick={this.props.onClearCompletedClick}
        >Clear completed</div>
      </div>
    )
  }
}

class Status extends React.Component {
  
  render() {
    return (
      <div 
        style={this.props.statusData.style} index={this.props.index}
        onMouseEnter={this.props.onStatusMouseEnter} onMouseLeave={this.props.onStatusMouseLeave}
        onMouseDown={this.props.onStatusMouseDown}
      >{this.props.innerHTML}</div>
    )
  }
}

export default TodoList