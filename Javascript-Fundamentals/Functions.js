//Declarative Function
hello()                   //Declarative function can be called at the begining of the function as well
 function hello(){
    console.log('Hello one')
 }


 //Anoymus Function

 var helloTwo= function(){ //Anoymus function should be called at the end of the function
    console.log('Hello Two')
 }
helloTwo()

//Parameterized function

function helloThree(value){
console.log(`Hello ${value}`)
}
helloThree('Three')

//Return function

function addition(number){
    var result = number +1;
    return result;
}
console.log(addition(3))