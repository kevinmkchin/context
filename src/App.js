import React, { Component } from 'react';
import './App.css';
import { parse, definedWords } from './Parser/parse';

let testString = 
`{derivative|
The derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value).|
d(sin x)/dx = cos x|
d(3x + 2)/dx = 3|
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
          <span>
            <button onClick={() => this.setState({str: document.getElementById("txtarea").value})}>Compile</button>
          </span>
        </div>
        <div className="split right">
          {parse(this.state.str, definedWords(this.state.str))}
        </div>
      </div>
    );
  }
}



export default App;

