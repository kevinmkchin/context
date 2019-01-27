import React, { Component } from 'react';
import { findLinkWords } from './../Parser/parse';
import './Components.css';

export class Text extends Component {
    render() {
        return (
            <div className={this.props.bl?"text black":"text white"}>
                {findLinkWords(this.props.input, this.props.definedWords, this.props.bl)}
            </div>
        );
    }
}