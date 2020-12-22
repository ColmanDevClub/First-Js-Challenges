
var paper,rock,scissors,choice1,choice2;
paper=1;
rock=2;
scissors=3;
choice1='';
choice2='';
 var score=0;
 function chose(){
document.querySelector('.btn-paper').addEventListener('click',function()
{
    choice1='paper';
    document.getElementById("main").style.display = "none";
    document.getElementById("selection").style.display = "flex";
    document.getElementsById('user_select').src="./assets/images/icon-paper.svg";
});
document.querySelector('.btn-scissors').addEventListener('click',function()
{
    choice1='scissors';
    document.getElementById("main").style.display = "none";
    document.getElementById("selection").style.display = "flex";
    document.getElementById('user_select').querySelector("img").src="./assets/images/icon-scissors.svg";
    document.getElementById('user_select').className="btn-circle btn-scissors pick";
});
document.querySelector('.btn-rock').addEventListener('click',function()
{
    choice1='rock';
    document.getElementById("main").style.display = "none";
    document.getElementById("selection").style.display = "flex";
    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-rock.svg";
    document.getElementById('user_select').className="btn-circle btn-rock pick";
});
 }
 chose();

var compchoice= Math.floor(Math.random()*3);
if(compchoice===0)
{
    // compchoice='paper';
    choice2='paper';
    document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-paper.svg";
    document.getElementById('computer_select').className="btn-circle btn-paper pick";
}
if(compchoice===1)
{
    // compchoice='scissors';
    choice2='scissors';
    document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-scissors.svg";
    document.getElementById('computer_select').className="btn-circle btn-scissors pick";
}
if(compchoice===3)
{
    // compchoice='rock';
    choice2='rock';
    document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-rock.svg";
    document.getElementById('computer_select').className="btn-circle btn-rock pick";
}

if(choice1===choice2)
{
    document.querySelector('.big-text').textContent='its a tie';
  //  document.querySelector('#score').textContent=score;
}
else if((choice1==='paper'&& choice2==='rock')||(choice1==='rock'&&choice2==='scissors')||(choice1==='scissors'&&choice2==='paper'))
{
    document.querySelector('.big-text').textContent='you win';
    score--;
    document.querySelector('#score').textContent=score;

}
else{
    document.querySelector('.big-text').textContent='you Lose';
    score++;
    document.querySelector('#score').textContent=score;
}

document.querySelector('#reset').addEventListener('click',function()
{

    document.getElementById("main").style.display = "flex";
    document.getElementById("selection").style.display = "none";
    chose();
    
});











