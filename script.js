'use strict';
/*
console.log(document.querySelector('.message').
textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';
console.log(document.querySelector('.message').
textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

(document.querySelector('.guess').value);
console.log(document.querySelector('.guess').value = 23); 

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);
    console.log(typeof guess);
    
    if(!guess){
        document.querySelector('.message').textContent = 'You didnt guess!';
    }else{
        document.querySelector('.message').textContent = 'Thats a good guess!';
    }
}); */

let secretNumber = Math.trunc(Math.random() * 20)+1; //Trunc is for converting random number to int
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // If player doesn't play
    if(!guess){
        displayMessage("You aren't guessing...");

    //If player wins
    }else if(guess === secretNumber) {
       displayMessage('Thats correct!');
        document.querySelector('body').style.backgroundColor = "#60b347" ;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    //Player loose with a higher or lower number
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
            }else{
                displayMessage("You lost!");
                document.querySelector('.score').textContent = 0 ;
            }
   }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20)+1;
    score = 20;
    document.querySelector('body').style.backgroundColor = "#222" ;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});