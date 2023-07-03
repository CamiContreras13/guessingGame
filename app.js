//Generate randon num
let randomNum = Math.floor(Math.random()*100)+1;

let entryNumber = document.getElementById('entryNumber');

let message = document.getElementById('message');

let live = document.getElementById('live');

let lives = 0;

function checkResult(){
    let enteredNumber = parseInt(entryNumber.value);
    lives ++;
    live.textContent = lives;
    if(enteredNumber < 1 ||  enteredNumber > 100 || isNaN(enteredNumber)){
        message.textContent = 'Please, enter a number between 1 and 100 ⚠';
        return
    };
    if(enteredNumber === randomNum){
        message.textContent = '¡Congratulations! You guessed the number🚀';
        message.style.color = 'green';
        entryNumber.disabled = true; 
    } else if(enteredNumber < randomNum){
        message.textContent = 'The number is greater than the one entered ! 👀';
        message.style.color = 'red';
    } else {
        message.textContent = 'The number is less than entered ! 👀';
        message.style.color = 'red';
    };
};