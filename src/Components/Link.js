import React, { Component } from 'react';
import { Tooltip } from './Tooltip';

// given this.props.context, a Context object
// and this.props.input,
// return a span, which shows a tooltip on hover
// and on click sends you to that location
export class Link extends Component {
    render() {
        return (
            <span>
                <a href={"#"+this.props.context.getKey()} className="link">
                    {this.props.input}
                </a>
                <Tooltip context={this.props.context} />
            </span>
        );
    }
}