var scores, roundScore, activePlayer, gamePlaying, theResult;
var score1 = document.getElementById('score');
score1=0;
document.getElementById('score').textContent ='0';
document.getElementById('button1').addEventListener('click', function(){
    document.getElementById('button2').style.display='none';
    document.getElementById('button3').style.display='none';
    document.getElementById('button1').style.display='grid';
    document.getElementById('housegame').style.display='grid';
    //document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-paper.svg";
    //document.getElementById("computer_select").classList.add('btn-paper');
            // 1. Random number
            var dice = Math.floor(Math.random() * 3) + 1;
            console.log(dice);
            document.getElementById('housegame').style.display='grid';
            document.getElementById('housegame').textContent = dice;
        
    if (dice===1)
    {
        gamePlaying=  button1; 
        theResult="no one win!";
        console.log(theResult);
        document.getElementById('winner').innerHTML = "no one win!";
    }
    else
    if  (dice==2)
    {
        gamePlaying=  button2; 
        theResult="you lose!";
        console.log(theResult);
        document.getElementById('winner').innerHTML = "you lose!";
        document.getElementById('score').textContent = score1--;
    }
    else
    if  (dice==3)
    {
        gamePlaying=  button3; 
        theResult="you win!";
        console.log(theResult);
        document.getElementById('winner').innerHTML = "you win!";
        document.getElementById('score').textContent = score1++;
        }
    document.getElementById('housegame').style.display='grid';
    //document.getElementById('winner').style.display='grid';
    //document.getElementById('computer_select').style.display='grid';
    //document.appendChild('winner');
   // element.style.property = new style;
   });

   document.getElementById('button2').addEventListener('click', function(){
    document.getElementById('button1').style.display='none';
    document.getElementById('button3').style.display='none';
    document.getElementById('button2').style.display='grid';
             // 1. Random number
             var dice = Math.floor(Math.random() * 3) + 1;
             console.log(dice);

             if (dice===1)
             {
                 gamePlaying=  button1; 
                 theResult="you win!";
                 console.log(theResult);
                 document.getElementById('winner').innerHTML = "you win!";
                 document.getElementById('score').textContent = score1++;
             }
             else
             if  (dice==2)
             {
                 gamePlaying=  button2; 
                 theResult="no one win!";
                 console.log(theResult);
                 document.getElementById('winner').innerHTML = "no one win!";
             }
             else
             if  (dice==3)
             {
                 gamePlaying=  button3; 
                 theResult="you lose!";
                 console.log(theResult);
                 document.getElementById('winner').innerHTML = "you lose!";
                 document.getElementById('score').textContent = score1--;
             }
             //document.getElementByClassName('big-text').document.addEventListener= theResult;

   });

   document.getElementById('button3').addEventListener('click', function(){
    document.getElementById('button1').style.display='none';
    document.getElementById('button2').style.display='none';
    document.getElementById('button3').style.display='grid';
             // 1. Random number
             var dice = Math.floor(Math.random() * 3) + 1;
             console.log(dice);

             if (dice===1)
             {
                 gamePlaying=  button1; 
                 theResult="you lose!";
                 console.log(theResult);
                 document.getElementById('winner').innerHTML = "you lose!";
                 document.getElementById('score').textContent = score1--;
             }
             else
             if  (dice==2)
             {
                 gamePlaying=  button2; 
                 theResult="you win!";
                 console.log(theResult);
                 document.getElementById('winner').innerHTML = "you win!";
                 document.getElementById('score').textContent = score1++;
             }
             else
             if  (dice==3)
             {
                 gamePlaying=  button3; 
                 theResult="no one win!";
                 console.log(theResult);
                 document.getElementById('winner').innerHTML = "no one win!";
             }
             //document.getElementByClassName('big-text').document.addEventListener= theResult;
   });

