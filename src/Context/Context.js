export class Context {

    constructor(key, definition){
        this.key = key;
        this.definition = definition;
        this.example = [];
    }

    getKey(){
        return this.key;
    }

    getDef(){
        return this.definition;
    }

    addExample(eg){
        this.example.push(eg);
    }
}