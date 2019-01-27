import React, { Component } from 'react';
import './Components.css';

export class Example extends Component {
    render() {
        return (
            <div className="example">
                {this.props.input}
            </div>
        );
    }
}