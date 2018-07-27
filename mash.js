//Version 1
/*
function mash(){
    return "house"
    }

const result = mash();

console.log(result);
*/
//Version 2
const buildings = ["a Mansion","an Apartment","a House","a Shack", "a Shelter", " a Gas Station"];
const i = buildings.length 

function chance(min,max){

    let a = Math.ceil(min);
    let b = Math.floor(max);
    const final = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    return final
        
}
const final = chance(0,i);

const result1 = buildings[final]

//console.log(result2);

//Version 3
/*
function number(min,max){

    let a = Math.ceil(min);
    let b = Math.floor(max);
    const final = Math.floor(Math.random() * (max - min)) + min;
    return final
}
*/
const result2 = chance(0,101);
//console.log(result3)

//console.log("You will live in"+ result2 + " and you will have " + result3 + " children.")
//Version 4
/*
function chance(min,max){

    let a = Math.ceil(min);
    let b = Math.floor(max);
    const final = Math.floor(Math.random() * (max - min)) + min;
    return final
}
*/
const result3 = chance(1,3)

if(result3 == 1){
    console.log("You will live in "+ result1 + " and you will have " + result2 + " children.")
}
else{
    console.log("You will live in "+ process.argv[2] + " and you will have " + process.argv[3] + " children.")
}

//Version 5

const 
