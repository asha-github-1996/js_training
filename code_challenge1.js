let Marksweight=79;
let Marksheight=1.69;
let Johnweight = 92;
let Johnheight = 1.95;

let marksBmi=Marksweight/Marksheight**2;
console.log(marksBmi);
let johnBmi=Johnweight/Johnheight**2;

markhigherbmi = marksBmi > johnBmi;
console.log(markhigherbmi);

// if(marksBmi > johnBmi){
//     console.log("Marks BMI is greater than John");
// }
if (marksBmi > johnBmi) {
    console.log("Mark's BMI (" + marksBmi + ") is higher than John's (" + johnBmi + ")!")
  } else {
    console.log(`John's BMI (${johnBmi}) is higher than Marks's (${marksBmi})!`)
  }