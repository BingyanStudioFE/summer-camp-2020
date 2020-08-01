import React from 'react';
import '../css/index.css';

class Title extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bodyStyle: {
        color: '#ead7d7',
        height: '100px',
        margin: '40px auto',
        fontSize: '100px',
        textAlign: 'center'
      }
    }
  }
  render() {
    return (
      <div style={this.state.bodyStyle}>todos</div>
    )
  }
}

export default Title