const Asharray = [
    'Asha',
    'Poulose',
    2022-1996,
    'Student',
    ['Anu','Kiran','Vidhya']
];//Array

const Asha = {
    firstname : 'Asha',
    lastname : 'Poulose',
    age : 2022-1996,
    role : 'Student',
    friends : ['Anu','Kiran','Vidhya']
};//Object with labels
console.log(Asha);

console.log(Asha.lastname);
console.log(Asha['lastname']);

const interestedin = prompt('What do you want to know about Asha?hoose bw firstname, lastname, age, role, friends');
// console.log(interestedin);
console.log(Asha[interestedin]);

if(Asha[interestedin]){
    console.log(Asha[interestedin]);
}else{
    console.log('Wrong result');
}

Asha.location = "Ernakulam";
Asha['height'] = 161 + "cm";
console.log(Asha);
// console.log(Asha.location);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);