import React, { Component } from 'react';
import './App.css';
import { parse, definedWords } from './Parser/parse';

let testString = "{de|A de is a what|y'+2=0|y''+2=0|How do we solve a de ?}{ode|A ode is a what|y'+2=0|}{de|A de is a what|y'+2=0|y''+2=0|How do we solve a de ?}{ode|A ode is a what|y'+2=0|}{de|A de is a what|y'+2=0|y''+2=0|How do we solve a de ?}{ode|A ode is a what|y'+2=0|}{de|A de is a what|y'+2=0|y''+2=0|How do we solve a de ?}{ode|A ode is a what|y'+2=0|}{de|A de is a what|y'+2=0|y''+2=0|How do we solve a de ?}{ode|A ode is a what|y'+2=0|}";
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

