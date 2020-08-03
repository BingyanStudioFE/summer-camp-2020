import React from 'react';
import '../css/index.css';

class Things extends React.Component {
  render () {
    return (
      <div 
        style = {this.props.data.thingsStyle}
        onMouseEnter={this.props.onOutputMouseEnter} onMouseLeave={this.props.onOutputMouseLeave}
        index={this.props.data.index}
      >
        <CheckBox 
          circleStyle={this.props.data.circleStyle} iconStyle={this.props.data.checkStyle}
          onCheckBoxClick={this.props.onCheckBoxClick} data={this.props.data}
        />
        <Delete 
          deleteStyle={this.props.data.deleteStyle} data={this.props.data}
          onMouseEnter={this.props.onDeleteMouseEnter} onMouseLeave={this.props.onDeleteMouseLeave}
          onDeleteClick={this.props.onDeleteClick}
        />
        <input 
          type='text' readOnly={true} style={this.props.data.inputStyle}
          value={this.props.data.value} index={this.props.data.index}
          onDoubleClick={this.props.onOutputDblclick} onChange={this.props.onOutputChange}
          onBlur={this.props.onOutputBlur}
        />
      </div>
    )
  }
}

class CheckBox extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      bodyStyle: {
        width: '50px',
        height: '50px',
        position: 'relative'
      },
      CheckBoxStyle: {
        width: '30px',
        height: '30px',
        opacity: '0',
        position: 'absolute',
        top: '10px',
        left: '10px',
        outline: 'none',
      },
      iconStyle: {
        position: 'absolute',
        top: '15px',
        left: '15px',
        fontSize: '20px',
        color: '#5dc2af'
      }
    } 
  }
  render () {
    return (
      <div style={this.state.bodyStyle}>
        <div 
          style={this.props.circleStyle}
          onClick={this.props.onCheckBoxClick} index={this.props.data.index}
        ></div>
        <svg 
          className="icon" aria-hidden="true" style={this.props.iconStyle}
          onClick={this.props.onCheckBoxClick} index={this.props.data.index}
        >
          <use xlinkHref="#icon-duihao" index={this.props.data.index}></use>
        </svg>
      </div>
    )
  }
}

class Delete extends React.Component {
  render () {
    return (
      <>
        <svg 
          className="icon" aria-hidden="true" style={this.props.deleteStyle}
          onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}
          index={this.props.data.index}
          onClick={this.props.onDeleteClick}
        >
          <use 
            xlinkHref="#icon-cuo" index={this.props.data.index}
            onClick={this.props.onDeleteClick}
          ></use>
        </svg> 
      </>
    )
  }
}

export default Things