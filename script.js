'use strict';
var number = Math.trunc(Math.random()*20)+1;
var score=10;
var  highest=0;
const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
   var x= Number(document.querySelector('.guess').value);
   if(!x){
       displayMessage('No Number!!!');
   }
   else if(x===number){
    document.querySelector('.number').textContent=number;
    document.querySelector('body').style.backgroundColor='#60b347';
    displayMessage('Correct Number');
    if(score>highest){
        highest=score;
    } document.querySelector('.highscore').textContent=highest;
   } 
   else if(x!=number){
    if(score>1){
       displayMessage(x>number ?'too high!!!1':'too low!!!!')
        score=score-1;
        document.querySelector('.score').textContent=score;}
        else{
            displayMessage('You Lost The Game');}
   }
   
   
});
document.querySelector('.again').addEventListener('click',function(){
    number = Math.trunc(Math.random()*20)+1;
    score=10;
    displayMessage('Start Guessing ');
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=' ';
 
});
