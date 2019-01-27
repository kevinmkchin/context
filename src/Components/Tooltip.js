import React, { Component } from 'react';
import './Components.css';

// given this.props.context, a Context object
// return a tooltip, which shows stuff based on the context object
// position it close to where the mouse is
export class Tooltip extends Component {
    render() {
        return (
            <div className="tooltip">
                <h2 className="key">{this.props.context.getKey()}</h2>
                <p className="def">Definition: {this.props.context.getDef()}</p>
                <p className="examples">Examples: {this.props.context.getExamples().map(example => <div>{example}</div>)}</p>
            </div>
        );
    }
}