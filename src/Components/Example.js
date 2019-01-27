import React, { Component } from 'react';
import { LaTeX } from './LaTeX';
import './Components.css';

export class Example extends Component {
    render() {
        return (
            <div className={this.props.bl?"example black":"example white"}>
                <LaTeX eqn={this.props.input} black={this.props.bl}></LaTeX>
            </div>
        );
    }
}