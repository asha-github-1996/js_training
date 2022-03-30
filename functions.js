// Parameteres in functions called arguments
// Every function should have a return statement which return a specific return value.
// If there is no return statement then it will have default return value which is "undefined"
// Function is a keyword in javascript


// Named functions
// declaration of function
function addNum(a,b){
	console.log("named function addNum is called")
	return a + b;
}
// call to ths function "addNum"
addNum(2,4);
var c=addNum(2,4);
console.log(c);
document.write("Sum is " + c);

// Anonymous function - Does not have a name. can be stored in variables. function is called in one place.
var anon= function(a,b){
	console.log("Anonymous function is called");
	return a + b;
}
var a=anon(4,4);
console.log(a);

setTimeout(function(){console.log("Anonymous function call in setTimeout")}, 3000);

// Constructors
var cons = new Function("a","b","console.log('in constructors function');return a+b;");//last parameter is the body of the function.
console.log(cons(5,5));

// self invoking function - functions that call itself
var d = (function(a,b){
	console.log('self invoking function');
	return a +b;
})(10,1);
//to get the result assign the function in a variable
console.log(d);
