const Asha = {
    firstname : 'Asha',
    lastname : 'Poulose',
    birthyear : 1996,
    role : 'Student',
    friends : ['Anu','Kiran','Vidhya'],
    hasdriverlicense : true,
    // calcage : function(birthyear){
    //     return 2022 - birthyear
    // }  //first method

    calcage : function(){
        console.log(this);
        return 2022 - this.birthyear
    } //second method

};

console.log(Asha.calcage());
// console.log(Asha['calcage'](1996));