import React, { Component } from 'react';
import { findLinkWords } from './../Parser/parse';
import './Components.css';

export class Body extends Component {
    render() {
        return (
            <div className="body">
                {findLinkWords(this.props.input, this.props.definedWords)}
            </div>
        );
    }
}