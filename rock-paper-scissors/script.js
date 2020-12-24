var DomMyChoice , compChoice , score,DomComp;
score=0;
 // in the first step i want to show my choice : paper/rock/scissors.
if(document.querySelector('.btn-paper')
.addEventListener('click',function(){
document.getElementById('main').style.display='none';
document.getElementById('selection').style.display='flex';
document.getElementById('computer_select').style.display='none';
document.querySelector('user_select').style.src='./assets/images/icon-paper.svg';
 }));     
 if(document.querySelector('.btn-rock')
 .addEventListener('click',function(){
    document.getElementById('main').style.display='none';
    document.getElementById('selection').style.display='flex';
    document.getElementById('computer_select').style.display='none';
    document.getElementById('user_select').style.src='./assets/images/icon-rock.svg';
 }));
 if(document.querySelector('.btn-scissors')
 .addEventListener('click',function(){
    document.getElementById('main').style.display='none';
    document.getElementById('selection').style.display='flex';
    document.getElementById('computer_select').style.display='none';
    document.getElementById('user_select').style.src='./assets/images/icon-scissors.svg';
  }));


// second step i want to show computer choice : paper/rock/scissors.
compChoice=Math.floor(Math.random()*3)+1;
if(compChoice==1){
    DomComp=document.querySelector('.btn-paper');
}
if(compChoice==2){
    DomComp=document.querySelector('.btn-scissors');
}
else{
    DomComp=document.querySelector('.btn-rock');
}



