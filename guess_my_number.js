'use strict';
/*console.log(document.querySelector('.message').textContent);
//document.querySelector('.message') will return the element with the class name & .textContent  will return the content in the element.
console.log(document.querySelector('.message').textContent = "Correct Number");//will change the text content to "correct number".

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;// to get the content of input field
document.querySelector('.guess').value = 13;*/

const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = "No Number";
    }else if(guess > secretnumber){
        if(score>0){
            document.querySelector('.message').textContent = "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You Lost";  
        }   
    }else if(guess < secretnumber){
        if(score>0){
        document.querySelector('.message').textContent = "Too Low";
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You Lost";
        }
    }else if(guess === secretnumber){
        document.querySelector('.message').textContent = "Correct Answer";
        document.querySelector('.highscore').textContent = score;
    }
});