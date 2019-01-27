import React, { Component } from 'react';

export class Body extends Component {
    render() {
        return (
            <div>
                {this.props.input}
            </div>
        );
    }
}