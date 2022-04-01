// Arithmetic operators 

console.log(2 + 3);
let a=2+3;
console.log("addition :" + a);
a ++;
console.log("addition :" + a);
let b= 2 * 3;
console.log(b);
let c=5/2;
console.log(c);
let d =5%2; // modulas -> which gives remainder
console.log(d);

const now = 2037;
const ageJonas = now - 1991;
const ageRiya = now - 1999;
console.log("Jonas age : " + ageJonas ,"Riya age : " + ageRiya);

// Assignment operators

let s=10;
s+=2; // s=s+2;
s++;
s--;
console.log(s);
let t=8;
t-=2; // t=t-2;
console.log(t);

// Comparison operators

console.log(ageJonas > ageRiya);
console.log(now-1991 > now -1999);
let x=3;
let y=3;
if(x==y){
	document.write("sum is : " );
	document.write(x + y);
	console.log("x==y");
}else{
	console.log("x!=y");
}