import React, { Component } from 'react';
import './App.css';
import { parse, definedWords } from './Parser/parse';

let testString = 
`{Derivative|
The derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value).|
d(sin x)/dx = cos x|
d(3x + 2)/dx = 3|
A derivative is bad.}

{vector|
  Vectors are used to describe quantities with a magnitude (length) and a direction.|
  A = [0,0,2]|
  B = [9, 20, 1]|
  A vector doesn't intrinsically have a position, although we can assign it one in context.}

  {scalar-multiplication|
    Multiplying a vector a by a scalar s results in a vector with length s times the length of a. The new vector sa points in the same direction if s is positive, and in the opposite direction if s is negative.|
    A = 2[0,0,2]|
    B = 5[9, 20, 1]|
    If the length of a vector is 1 unit, then the length of 2a is 2. What is the length of -1a: is it 1, or -1?.}`
;
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
          <button onClick={() => this.setState({str: document.getElementById("txtarea").value})}>Compile</button>
          <textarea id="txtarea">{testString}</textarea> 
        </div>
        <div className="split right">
          <button onClick={collapseOrNaw}>Collapse</button>
          {parse(this.state.str, definedWords(this.state.str))}
        </div>
      </div>
      
    );
  }
}


//you can collapse the left hand side now
function collapseOrNaw(){
  var currentSize = document.getElementsByClassName("split right").item(0).style.width;
  if(currentSize === "50%" || currentSize === ""){
    document.getElementsByClassName("split right").item(0).style.width = "100%";
  }else if(currentSize === "100%"){
    document.getElementsByClassName("split right").item(0).style.width = "50%";
  }
}



export default App;

