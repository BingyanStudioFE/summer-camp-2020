import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Todos from './component/todos.js'
import Title from './component/title.js'

class Main extends React.Component {
  render () {
    return (
      <>
        <Title />
        <Todos />
      </>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


