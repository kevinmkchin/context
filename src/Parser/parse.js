import { DL, LB, RB } from './constants';
import { Note } from './../Components/Note';
import React from 'react';
import { Context } from './../Context/Context';

// returns the components to display
// generates 
export const parse = (rawInput, definedWords) => {
    let components = [];
    let left;
    for (let i = 0; i < rawInput.length; i++) {
        if (rawInput[i] === LB) {
            left = i;
        } else if (rawInput[i] === RB) {
            // array of string, should put into constructor
            components.push(
                <Note
                    inputArray={rawInput.slice(left + 1, i).split(DL)}
                    definedWords={definedWords}
                />
            );  
        }
    }
    return components;
};

export const definedWords = (rawInput) => {
    let definedWords = [];
    let left;
    for (let i = 0; i < rawInput.length; i++) {
        if (rawInput[i] === LB) {
            left = i;
        } else if (rawInput[i] === RB) {
            // array of string, should put into constructor
            definedWords.push(
                new Context(rawInput.slice(left + 1, i).split(DL))
            );  
        }
    }
    return definedWords;
}

export function findLinkWords(rawInput, definedWords){
    let wordArray = rawInput.split(" ");
    let goodIntegers = [];
    for (let i = 0; i < wordArray.length; i++){
        for(let c = 0; c < definedWords.length; c++){
            if(definedWords[c].getKey === wordArray[i]){
                goodIntegers.push(i);
            }
        }
    }
    
}