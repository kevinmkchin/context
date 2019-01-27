import React, { Component } from 'react';
import { findLinkWords } from './../Parser/parse';
import './Components.css';

export class Text extends Component {
    render() {
        return (
            <div className="text">
                {findLinkWords(this.props.input, this.props.definedWords)}
            </div>
        );
    }
}