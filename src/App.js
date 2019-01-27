import React, { Component } from 'react';
import './App.css';
import { parse, definedWords } from './Parser/parse';

const testString = "{de|A de is a what|y'+2=0|y''+2=0|How do we sefiajefaklejfkajefakeflajejfaekfjalkejflkaejfkaelfjakejflkaefjalfjlaeifjaelaolve a de ?}{ode|A ode is a what|y'+2=0|}{de|A de is a what|y'+2=0|y''+2=0|How do we solve a de ?}{ode|A ode is a what|y'+2=0|}{de|A de is a what|y'+2=0|y''+2=0|How do we solve a de ?}{ode|A ode is a what|y'+2=0|}{de|A de is a what|y'+2=0|y''+2=0|How do we solve a de ?}{ode|A ode is a what|y'+2=0|}{de|A de is a what|y'+2=0|y''+2=0|How do we solve a de ?}{ode|A ode is a what|y'+2=0|}";
class App extends Component {
  render() {
    return (
      <div className="App">
        {parse(testString, definedWords(testString))}
      </div>
    );
  }
}

export default App;

