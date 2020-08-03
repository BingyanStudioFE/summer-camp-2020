import React from 'react';
import '../css/index.css';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyStyle: {
        height: '50px',
        border: '0.5px solid #e6e6e6',
        boxShadow: '0 0 2px 2px #e6e6e6'
      },
      iconStyle: {
        fontSize: '20px',
      },
      inputStyle: {
        width: '445px',
        height: '50px',
        boxSizing: 'border-box',
        border: 'none',
        fontSize: '28px',
        lineHeight: '50px',
        outline: 'none'
      },

    }
  }
  render() {
    return (
      <div style={this.state.bodyStyle}>
        <button 
          style={this.props.iconBoxStyle}
          onClick={this.props.onCheckAllClick}
        >
          <svg className="icon" aria-hidden="true" style={this.state.iconStyle} >
            <use xlinkHref="#icon-huabanfuben"></use>
          </svg>
        </button>
        <input 
          type="text" placeholder="What needs to be done?" style={this.state.inputStyle}
          value={this.props.inputValue} onChange={this.props.onInputChange}
          onKeyUp={this.props.onInputKeyUp}
        /> 
      </div>
    )
  }
}

export default AddTodo