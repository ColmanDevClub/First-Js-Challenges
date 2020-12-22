var myScore = 0;
var win = 0;
var ComputerChoiceNum = Math.floor(Math.random() * 3) + 1;
var ComputerChoice;
if (ComputerChoiceNum===1) {
    ComputerChoice = document.querySelector('.btn-paper');
    document.querySelector('#computer_select').classList.remove('btn-rock');
    document.querySelector('#computer_select').classList.add('btn-paper');
}
if (ComputerChoiceNum===2) {
    ComputerChoice = document.querySelector('.btn-scissors');
    document.querySelector('#computer_select').classList.remove('btn-rock');
    document.querySelector('#computer_select').classList.add('btn-scissors');
}
else {
    ComputerChoice = document.querySelector('.btn-rock');
}

var myChoiceNum;

document.querySelector('.btn-paper').addEventListener('click', function(){
    document.querySelector('.selection').style.display = 'flex';
    document.querySelector('#main').style.display = 'none';
    myChoiceNum = 1;
});
document.querySelector('.btn-scissors').addEventListener('click', function(){
    document.querySelector('.selection').style.display = 'flex';
    document.querySelector('#main').style.display = 'none';
    myChoiceNum = 2;
    document.querySelector('#user_select').classList.remove('btn-paper');
    document.querySelector('#user_select').classList.add('btn-scissors');
});
document.querySelector('.btn-rock').addEventListener('click', function(){
    document.querySelector('.selection').style.display = 'flex';
    document.querySelector('#main').style.display = 'none';
    myChoiceNum = 3;
    document.querySelector('#user_select').classList.remove('btn-paper');
    document.querySelector('#user_select').classList.add('btn-rock');
});

if (myChoiceNum===ComputerChoiceNum) {  
    win=0;
}
if (myChoiceNum===1 && ComputerChoiceNum===3){
    win=1;
}
if (myChoiceNum===2 && ComputerChoiceNum===1){
    win=1;
}
if (myChoiceNum===3 && ComputerChoiceNum===2){
    win=1;
}
if (myChoiceNum===1 && ComputerChoiceNum===2){
    win=-1;
}
if (myChoiceNum===2 && ComputerChoiceNum===3){
    win=-1;
}
if (myChoiceNum===3 && ComputerChoiceNum===1){
    win=-1;
}

if (win===1) {
    myScore++;

}
if (win===-1) {
    myScore--;
    document.getElementById("winner").textContent = "lose";

}
if (win===0) {

}
