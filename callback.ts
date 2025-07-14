class Family {
    constructor(
        public readonly name : string, 
        public readonly castles : string[]
    ){}
}

const lannister = new Family('lannister',["winterfell","Casterly rock"])
const targaryen = new Family('targaryen',["dragonstone","summerhall"])

const families:Family[] =[lannister,targaryen]