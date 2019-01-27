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
        <textarea id="txtarea">{testString}</textarea>
        <button onClick={() => this.setState({str: document.getElementById("txtarea").value})}>Compile</button>
        {parse(this.state.str, definedWords(this.state.str))}
      </div>
    );
  }
}

export default App;

