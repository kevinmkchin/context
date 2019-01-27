import React, { Component } from 'react';
import { Definition } from './Definition';
import { Example } from './Example';
import { Body } from './Body';
import './Components.css';

export class Note extends Component {
    render() {
        return (
            <div id={this.props.inputArray[0]} className="note">
                {this.props.inputArray.map((val, index) => {
                        if (index === 0) {
                            return null;
                        } else if (index === 1) {
                            return <Definition input={val} definedWords={this.props.definedWords} />;
                        } else if (index === this.props.inputArray.length - 1) {
                            return <Body input={val.trim()} definedWords={this.props.definedWords}/>; //trim away start and end white space
                        } else {
                            return <Example input={val} definedWords={this.props.definedWords}/>;
                        }
                    })}
            </div>
        );
    }
}