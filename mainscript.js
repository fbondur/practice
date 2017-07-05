let price =  ['10', '40', '90'];
let [low, average, high, extra = '100'] = price;
//console.log(`${low} ${average} ${high} ${extra}`);

let level = {
    jun: 'A2',
    middle: 'B2',
    sen: 'C2'
};

//let {jun, middle, sen} = level;
//console.log(`${jun} ${middle} ${sen}`);

//let {jun: newJun, middle: newMiddle, sen: newSen} = level;
//console.log(newMiddle);
let newJun, newMiddle, newSen
({jun: newJun, middle: newMiddle, sen: newSen} = level);
console.log(newJun, newMiddle);

let a;
let obj = ({jun: jun} = level);
console.log(obj, jun);
