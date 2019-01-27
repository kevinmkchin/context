import React, { Component } from 'react';
import './Components.css';

export class Definition extends Component {
    render() {
        return (
            <div className="definition">
                {this.props.input}
            </div>
        );
    }
}