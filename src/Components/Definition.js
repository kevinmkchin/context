import React, { Component } from 'react';
import './Components.css';

export class Definition extends Component {
    render() {
        return (
            <div className={this.props.bl?"definition black":"definition white"}>
                {this.props.input}
            </div>
        );
    }
}