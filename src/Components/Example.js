import React, { Component } from 'react';
import { LaTeX } from './LaTeX';
import './Components.css';

export class Example extends Component {
    render() {
        return (
            <div className="example">
                <LaTeX eqn={this.props.input} black={true}></LaTeX>
            </div>
        );
    }
}