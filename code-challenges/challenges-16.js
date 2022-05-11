'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
    let splitString = string.split(""); 
    let newArray = []
    for(let i=splitString.length-1; i>=0; i--){
        newArray.push(splitString[i])
    }
    return newArray.join('');
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let newArr = [];
    arr.map((element)=>{
        if(element.includes('^_^') == true){
            newArr.push(element)
        }
    })
    return newArr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    let newArr = [];
    let stringArr = str.split('');
    for(let i=0; i<stringArr.length; i++){
        if(stringArr.indexOf(stringArr[i]) % 2 == 0){
            newArr.push(stringArr[i]);
        }
    }
    
    return newArr.join('')
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...
    let newArray =[];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
        if(arr[i][j].includes('chicken')== true){
            newArray.push([arr[i][j]]);
        }
    }
    }
    return newArray;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
