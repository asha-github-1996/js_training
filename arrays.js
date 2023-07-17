"use strict"; 
const friend01 = "Asha";
const friend1 = "Anu";
const friend2 = "Vidhya";
const friend3 = "Kiran";

const friends = ['Anu','Vidhya','Kiran'];
console.log(friends);

const year = new Array('1995','1996','1997');

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);//length of the array
console.log(friends[friends.length-2]);

friends[2]="chippy";
console.log(friends);

const firstname = "Asha";
const Asha = [firstname, 'Poulose', 2022 - 1996 ,'student', friends];
console.log(Asha);

//Exercise
const calcAge = function(birthyear){
    return 2022-birthyear;

}
// console.log(calcAge(1996));
const years = [1991,1996,1995,1998,2001];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[4]);

console.log(age1,age2,age3);

const ages = [calcAge(years[0]),age2,calcAge(years[4])];
console.log(ages);

//Basic array operations
const friend = ['Anu','Vidhya','Kiran','Chippy'];
friend.push('Chippy');//push is a function, add element to the end of the array
console.log(friend);

friend.unshift('Sree');//add element to the begining of the array
console.log(friend);

friend.pop();//remove the last element
const popped = friend.pop();//will return the removed element
console.log(popped);
friend.pop();//to remove more element repeat this code.
// const popped2 = friend.pop();
// console.log(popped2);
console.log(friend);

friend.shift();//remove first element from the array
console.log(friend);

console.log(friend.indexOf('Vidhya'));//will return the index of vidhya
console.log(friend.indexOf('Asha'));

console.log(friend.includes('Vidhya'));
console.log(friend.includes('Asha'));