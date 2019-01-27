import React, { Component } from 'react';
import { LaTeX } from './LaTeX';
import './Components.css';

// given this.props.context, a Context object
// return a tooltip, which shows stuff based on the context object
// position it close to where the mouse is
export class Tooltip extends Component {
    render() {
        return (
            <div className="tooltip">
                <h2 className="key">{this.props.context.getKey()}</h2>
                <p className="def"><b>Definition:</b> {this.props.context.getDef()}</p>
                <p className="examples"><b>Examples:</b> {this.props.context.getExamples().map(example => <div><LaTeX eqn={example} /></div>)}</p>
            </div>
        );
    }
}