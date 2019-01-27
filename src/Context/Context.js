export class Context {

    constructor(defArray){
        this.key;
        this.definition;
        this.examples = [];
        for(i = 0; i < defArray.length-1; i++){
            if(i == 0){
                this.key = defArray[0];
            }else if(i == 1){
                this.definition = defArray[1];
            }else{
                this.examples.push(defArray[i])
            }
        }
    }

    getKey(){
        return this.key;
    }

    getDef(){
        return this.definition;
    }

    getExamples(){ //returns an array of example strings
        return this.examples;
    }
}