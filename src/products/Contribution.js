
"use strict;"


class Contribution {

    constructor(obj){
        this.id = "";
        this.aspects = {};

        this.id = obj['id'];
        this.aspects = obj['aspects'];
    }

    getId(){
        return this.id;
    }

    getAspects(){
        return Object.keys(this.aspects);
    }

    getAspectValue(name){
        return this.aspects[name];
    }

}


export default Contribution;
