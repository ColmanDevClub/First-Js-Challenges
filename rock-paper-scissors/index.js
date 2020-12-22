var score;
score=document.getElementById('score').textContent='0';
var cpPlayer,userPlayer,cpChoice;
var selections = ['paper', 'scissors', 'rock'];


document.getElementById('paper').addEventListener('click',function(){
    cpChoice=cpplaying();
    document.querySelector(".selection").style.display = "flex";
    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-paper.svg";
        document.getElementById("computer_select").classList.add('btn-paper');
        userPlayer= selections[0];
         whoWin(userPlayer,cpChoice);
});

document.getElementById('scissors').addEventListener('click',function(){
    cpChoice=cpplaying();
    document.querySelector(".selection").style.display = "flex";
    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-scissors.svg";
    document.getElementById("computer_select").classList.add('btn-scissors');
    userPlayer= selections[1];
     whoWin(userPlayer,cpChoice);

});

document.getElementById('rock').addEventListener('click',function(){
    cpChoice=cpplaying();
    document.querySelector(".selection").style.display = "flex";
    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-rock.svg";
    document.getElementById("computer_select").classList.add('btn-rock');
    userPlayer= selections[2];
     whoWin(userPlayer,cpChoice);

});



function whoWin(userPlayer,cpChoice){
if(userPlayer===selection[0])
{
    if(cpChoice===selections[0]){
        document.querySelector(".big-text").textContent = "DRAW";
    }
    if(cpChoice===selections[1]){
        document.querySelector(".big-text").textContent  = "YOU LOSE";
        score--;

    }
    if(cpChoice===selections[2]){
        document.querySelector(".big-text").textContent = "YOU WIN";
        score++;
    }
}
 if(userPlayer===selection[1]) 
{
    if(cpChoice===selections[0]){
        document.querySelector(".big-text").textContent = "YOU WIN";
        score++;
    }
    if(cpChoice===selections[1]){
        document.querySelector(".big-text").textContent = "DRAW";
    }
    if(cpChoice===selections[2]){
        document.querySelector(".big-text").textContent = "YOU LOSE";
        score--;

    }
}
 if(userPlayer===selection[2])
{
    if(cpChoice===selections[0]){
        document.querySelector(".big-text").textContent = "YOU LOSE";
        score--;
    }
    if(cpChoice===selections[1]){
        document.querySelector(".big-text").textContent = "YOU WIN";
        score++;
    }
    if(cpChoice===selections[2]){
        document.querySelector(".big-text").textContent = "DRAW";
    }
}

}

function cpplaying(){
    cpPlayer = Math.trunc(Math.random() * 3) ;
    console.log(cpPlayer);
    if (cpPlayer === 1) {
        document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-paper.svg";
        document.getElementById("computer_select").classList.add('btn-paper');
        return selections[0];
    
    }

      if (cpPlayer === 2) {
        document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-scissors.svg";
        document.getElementById("computer_select").classList.add('btn-scissors');
        return selections[1];


    }
    
      if (cpPlayer === 3) {
        document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-rock.svg";
        document.getElementById("computer_select").classList.add('btn-rock');
        return selections[2];
   }
};



document.getElementById('open').addEventListener('click',function(){
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('reset').addEventListener('click',function(){
    document.getElementById('selection').style.display = 'none';
    document.getElementById('main').style.display = 'flex';

});

