var score = 0;
const choices=['paper', 'rock', 'scissors'];
const btnChoices=['btn-paper','btn-rock','btn-scissors'];

const winner = document.getElementById('winner');
const userSelect = document.getElementById('user_select');
const compSelect = document.getElementById('computer_select');

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

function updateScore(val){
    score+=val;
    document.getElementById('score').innerText = score;
}

document.querySelectorAll('.btn-circle').forEach(element => {
    element.addEventListener('click', function(){
        var userPick = element.getAttribute('data-choice');
        var compPick = choices[Math.floor(Math.random()*choices.length)];

        btnChoices.forEach(function(item){
            userSelect.classList.remove(item);
            computer_select.classList.remove(item);
        });
        userSelect.classList.add(`btn-${userPick}`);
        userSelect.querySelector('img').src = `./assets/images/icon-${userPick}.svg`
        userSelect.querySelector('img').alt = userPick;

        compSelect.classList.add(`btn-${compPick}`);
        compSelect.querySelector('img').src = `./assets/images/icon-${compPick}.svg`
        compSelect.querySelector('img').alt = compPick;

        document.getElementById('main').style.display = 'none';
        document.getElementById('selection').style.display = 'flex';

        if(userPick === compPick){
            winner.innerText =  'draw';
        }
        else if(userPick === 'paper' && compPick === 'rock' || userPick === 'rock' && compPick==='scissors' ||
            userPick === 'scissors' && compPick==='paper'){
                updateScore(1);
                winner.innerText =  'win';
            }
        else{
            updateScore(-1);
            winner.innerText =  'lost';
        }
    });
});
