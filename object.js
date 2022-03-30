// object has two parts - properties and functionality.

// first method
function createperson(){
var person = new Object();
person.name="Asha";
person.age="26";
return person;
}
var result=createperson();
console.log(result);


// second method
function createperson2(){
var person = {};
person.name="Asha";
person.age="26";
return person;
}
var result2=createperson2();
console.log(result2);


// third method
function createperson3(){
var person = {};
person['name']="Asha";
person['age']="26";
return person;
}
var result3=createperson3();
// console.log(result3);
alert("name is :" + result3.name +"  " + "age is : " + result3.age);


// fourth method
function createperson4(){
var person = {
	name:"asha",
	age:26
};
return person;
}
var result4=createperson4();
 // console.log(result4);
alert("name is :" + result4.name +"  " + "age is : " + result4.age);


// fifth method
function createperson5(){
this.name="Asha poulose";
this.age=24;
}
var result5= new createperson5();
 // console.log(result5);
alert("name is :" + result5.name +"  " + "age is : " + result5.age);