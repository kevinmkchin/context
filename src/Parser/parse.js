import { DL, LB, RB } from './constants';
import { Note } from './../Components/Note';
import React from 'react';
import { Context } from './../Context/Context';
import { Link } from '../Components/Link';
//import { Body } from '../Components/Body';
import { Text } from '../Components/Text';


// returns the components to display
// generates 
export const parse = (rawInput, definedWords) => {
    let components = [];
    let left;
    let rbEnd; //marks end of bracket
    for (let i = 0; i < rawInput.length; i++) {
        if (rawInput[i] === LB) {
            left = i;
            //once left bracket is encountered, collect everything before this and after rbEnd. make that a body
            components.push(
                <Text
                    input={rawInput.slice(rbEnd+1, i).trim()} //trim away start and end white space
                    definedWords={definedWords}
                />
            );
        } else if (rawInput[i] === RB) {
            // array of string, should put into constructor
            components.push(
                <Note
                    inputArray={rawInput.slice(left + 1, i).split(DL)}
                    definedWords={definedWords}
                />
            );  
            rbEnd = i;
        }
        if (i === rawInput.length-1){ //push again for the very last stuff
            components.push(
                <Text
                    input={rawInput.slice(rbEnd+1, i).trim()} //trim away start and end white space
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
    let result = [];
    let wordArray = rawInput.split(" ");
    let goodIntegers = [];
    for (let i = 0; i < wordArray.length; i++){
        for(let c = 0; c < definedWords.length; c++){
            if(definedWords[c].getKey().toLowerCase().trim() === wordArray[i].toLowerCase().trim()){
                goodIntegers.push(i);
            }
        }
    }
    for (let i = 0; i < wordArray.length; i++) {
        if (goodIntegers.indexOf(i) > -1) {
            let context;
            for (let j = 0; j < definedWords.length; j++) {
                if (definedWords[j].getKey().toLowerCase().trim() === wordArray[i].toLowerCase().trim()) {
                    context = definedWords[j];
                    break;
                }
            }
            result.push(
                <Link input={wordArray[i]} context={context}></Link>
            );
            result.push(' ');
        } else {
            let wordHolder = wordArray[i];
            //check if contains line break, replace line break with html <br/>
            for(let i=0; i < wordHolder.length; i++){
                let charHolder = wordHolder.charAt(i);
                if(charHolder === "\n"){
                    result.push(<br/>);
                }else{
                    result.push(charHolder);
                }
            }
            //restore space between words
            result.push(' ');
        }
    }
    return result;
}