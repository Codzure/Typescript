//Variables
var fullName: string = "Leonard Muthoni";
let paidAccount: boolean = true;
const versionNumber: number = 1.3;


console.log(fullName);
console.log(paidAccount);
console.log(versionNumber);


function printName(firstName, lastName){
	var greeting: string = "Hi there, ";
	console.log(greeting + firstName + " " + lastName);
}


printName("Leonard", "Muthoni")