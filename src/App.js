import React, { Component } from 'react';
import './App.css';
import { parse, definedWords } from './Parser/parse';

let testString = 
`{derivative|
The derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value).|
y = 3x + 2
y' = 3|
y = sin x
y' = cos x|
A derivative is bad.}`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: '',
    };
  }

  render() {
    return (
      <div className="App">
        <div className="split left">
          <textarea id="txtarea">{testString}</textarea>
          <button onClick={() => this.setState({str: document.getElementById("txtarea").value})}>Compile</button>
        </div>
        <div className="split right">
          {parse(this.state.str, definedWords(this.state.str))}
        </div>
      </div>
    );
  }
}

export default App;

