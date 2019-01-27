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

