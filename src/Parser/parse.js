import { DL, LB, RB } from './constants';

// returns the 
export const parse = (rawInput) => {
    let components = [];
    let left;
    for (let i = 0; i < rawInput.length; i++) {
        if (rawInput[i] === LB) {
            left = i;
        } else if (rawInput[i] === RB) {
            // array of string, should put into constructor
            components.push(rawInput.slice(left + 1, i).split(DL));  
        }
    }
    return components;
};

