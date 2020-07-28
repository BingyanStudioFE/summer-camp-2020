import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
  c: 'Celsius',
  f: 'fehrenheit'
}

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  else {
    return <p>The water would not boil.</p>;
  }
}

class TemperatureInput extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render () {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value = {temperature}
          onChange = {this.handleChange}  
        />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '',
      scale: ''
    }
  }
  handleCelsiusChange (temperature) {
    this.setState({
      scale: 'c', 
      temperature: temperature
  })
  }
  handleFahrenheitChange (temperature) {
    this.setState({
      scale: 'f',
      temperature: temperature
    })
  }
  render () {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);
    return (
      <div>
        <TemperatureInput 
          scale = 'c'
          temperature = {celsius}
          onTemperatureChange = {this.handleCelsiusChange}
        />
        <TemperatureInput 
          scale = 'f'
          temperature = {fahrenheit}
          onTemperatureChange = {this.handleFahrenheitChange}
        />
        <BoilingVerdict
          celsius = {parseFloat(this.state.celsius)}
        />
      </div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));

function tryConvert (temperature, convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input) === true) {
    return '';
  }
  else {
    const output = convert(temperature);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
}

function toCelsius (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit (celsius) {
  return (celsius * 9 / 5) + 32;
}