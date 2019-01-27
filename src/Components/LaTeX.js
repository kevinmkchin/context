import React, { Component } from 'react';
import './Components.css';

const bString = "http://latex.codecogs.com/svg.latex?\\color{white}\\pagecolor{black}";
const wString = "http://latex.codecogs.com/svg.latex?";

export class LaTeX extends Component {


    render() {
        return (

                <img 
                alt={this.props.eqn}
                src={this.props.black?(bString+this.props.eqn):(wString+this.props.eqn)} border="0"></img>

        );
    }
}