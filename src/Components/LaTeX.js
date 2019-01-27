import React, { Component } from 'react';
import './Components.css';

export class LaTeX extends Component {
    constructor(props) {
        super(props);
        if (this.props.black) {
            this.s = "http://latex.codecogs.com/svg.latex?\\color{white}\\pagecolor{black}";
        } else {
            this.s = "http://latex.codecogs.com/svg.latex?";
        }
    }

    render() {
        return (
            <img 
                alt={this.props.eqn}
                src={this.s+this.props.eqn} border="0"/>
        );
    }
}