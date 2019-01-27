import React, { Component } from 'react';
import './Components.css';

export class Body extends Component {
    render() {
        return (
            <div className="body">
                {this.props.input}
            </div>
        );
    }
}