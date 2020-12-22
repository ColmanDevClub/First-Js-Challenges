var ChoiceNum = Math.floor(Math.random()*3)+1;
var CompChoice;
var userChoice;


if(ChoiceNum==1){
    CompChoice=document.querySelector('.btn-rock');
}
if(ChoiceNum==2){
    CompChoice=document.querySelector('.btn-paper');
}
else{
    CompChoice=document.querySelector('btn-scissors');
}


document.querySelector('.btn-circle').addEventListener('click', function(){
    if(userChoice === CompChoice){

    }
}