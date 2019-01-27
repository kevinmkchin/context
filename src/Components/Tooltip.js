import React, { Component } from 'react';
import { LaTeX } from './LaTeX';
import './Components.css';

// given this.props.context, a Context object
// return a tooltip, which shows stuff based on the context object
// position it close to where the mouse is
export class Tooltip extends Component {
    render() {
        return (
            <div className={this.props.bl?"tooltip black":"tooltip white"}>
                <h2 className="key">{this.props.context.getKey()}</h2>
                <p className="def"><b>Definition:</b> {this.props.context.getDef()}</p>
                <p className="examples">
                    <div>
                        <b>Examples:</b>
                    </div>
                    {this.props.context.getExamples().map(example => 
                        <div style={{paddingLeft:10, paddingTop:5}}><LaTeX eqn={example} black={!this.props.bl}/></div>
                    )}
                </p>
            </div>
        );
    }
}