import React from 'react';
import '../css/index.css';

class Decoration extends React.Component {
  render () {
    return (
      <>
        <div style={this.props.decorationStyle1}></div>
        <div style={this.props.decorationStyle2}></div>
      </>
    )
  }
}

export default Decoration