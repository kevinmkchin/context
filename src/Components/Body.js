import React, { Component } from 'react';
import { findLinkWords } from './../Parser/parse';
import './Components.css';

export class Body extends Component {
    render() {
        return (
            <div className={this.props.bl?"body black":"body white"}>
                {findLinkWords(this.props.input, this.props.definedWords, this.props.bl)}
            </div>
        );
    }
}