

var score,myChoice,compChoice,domScore;
score=0;


var init=function(){
domScore=document.getElementById("score");
document.querySelector(".selection").style.display='none';
document.querySelector("main").style.display='flex';

//btn-rules
document.querySelector('.btn-rules').addEventListener("click",function()
{
    document.querySelector("main").style.display='none';
    document.querySelector(".rules-modal").style.display = "flex";
});

//btn-close 
document.getElementById("close").addEventListener("click",function(){
    document.querySelector("main").style.display='flex';
    document.querySelector(".rules-modal").style.display = "none";
});

//btn-play_gain
document.getElementById("reset").addEventListener("click",init);



//computer choice 
compChoice=Math.trunc(Math.random()*3)+1;
switch(compChoice){

    //paper
    case "1":{
        document.querySelector(".picComp").src="./assets/images/icon-paper.svg";
        document.getElementById("computer-select").classList.add('btn-paper');

    }
    //scissors
    case "2":{
        document.querySelector(".picComp").src="./assets/images/icon-scissors.svg";
        document.getElementById("computer-select").classList.add('btn-scissors');

    }
    //rock
    case "3":{
        document.querySelector(".picComp").src="./assets/images/icon-rock.svg";
        document.getElementById("computer-select").classList.add('btn-rock');

    }
}
}

//btn-paper
document.querySelector(".btn-paper").addEventListener("click",function(){

    document.querySelector(".selection").style.display='flex';
    document.querySelector("main").style.display='none';
    document.getElementById("user_select").classList.add('btn-paper');
    document.querySelector(".picUser").src="./assets/images/icon-paper.svg";

    switch(compChoice){

        //computer choice is paper
        case 1:{
            document.querySelector(".big-text").textContent="Try again";
        }
         //computer choice is scissors
        case 2:{
            document.querySelector(".big-text").textContent="You lose";
            domScore.textContent--;
        }
         //computer choice is rock
        case 3:{
            document.querySelector(".big-text").textContent="You win!";
            domScore.textContent++;
        }
    }
});


//btn-scissors
document.querySelector(".btn-scissors").addEventListener("click",function(){

    document.querySelector(".selection").style.display='flex';
    document.querySelector("main").style.display='none';
    document.getElementById("user_select").classList.add('btn-scissors');
    document.querySelector(".picUser").src="./assets/images/icon-scissors.svg";

    switch(compChoice){

        //computer choice is paper
        case 1:{
            document.querySelector(".big-text").textContent="You Win!";
            domScore.textContent++;
        }
         //computer choice is scissors
        case 2:{
            document.querySelector(".big-text").textContent="Try again";

        }
         //computer choice is rock
        case 3:{
            document.querySelector(".big-text").textContent="You lose";
            domScore.textContent--;
        }
    }
});

//btn-rock
document.querySelector(".btn-rock").addEventListener("click",function(){

    document.querySelector(".selection").style.display='flex';
    document.querySelector("main").style.display='none';
    document.getElementById("user_select").classList.add('btn-rock');
    document.querySelector(".picUser").src="./assets/images/icon-rock.svg";

    switch(compChoice){

        //computer choice is paper
        case 1:{
            document.querySelector(".big-text").textContent="You lose";
            domScore.textContent--;
        }
         //computer choice is scissors
        case 2:{
            document.querySelector(".big-text").textContent="You win";
            domScore.textContent++;
        }
         //computer choice is rock
        case 3:{
            document.querySelector(".big-text").textContent="Try again";
        }
    }
});


init();