var selections = ["rock, papaer, scissors"];
  var results = ["winner, tie, lose"];
  var usCohise;
  var compChoise;
  var score =0;
  var GameOn;

  function initizlizedAll () {
    usCohise = 0;
    compChoise = 0;
    score = 0;
    GameOn = false;

    document.getElementById("score").textContent='0';
    '.big-text'.innerHTML = 'none';
    document.querySelector(".img").style.display = 'none';
    document.getElementById("user_select").classList.remove('winner');
    document.getElementById("computer_select").classList.remove('winner');
  }

  function UserCohise () {
// The user choise
document.getElementById('paper').addEventListener('click', function(){
  document.getElementById("user_select").querySelector("img").src ="./assets/images/icon-paper.svg";
  document.getElementById("computer_select").classList.add('btn-paper');
  usCohise = selections[1];
}

document.getElementById('scissors').addEventListener('click', function(){
  document.getElementById("user_select").querySelector("img").src ="./assets/images/icon-scissors.svg";
  document.getElementById("computer_select").classList.add('btn-scissors');
  usCohise = selections[2];

}

 document.getElementById('rock').addEventListener('click', function(){
  document.getElementById("user_select").querySelector("img").src ="./assets/images/icon-rock.svg";
  document.getElementById("computer_select").classList.add('btn-rock');
  usCohise = selections[0];
}
  }

// return the computer choise
function ComputerChoise() {
  compChoise = Math.floor((Math.random()) * 3); // choose number between 0-2

  UserCohise();

  if (compChoise===1)
  {
    document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-paper.svg";
    document.getElementById("computer_select").classList.add('btn-paper');
    compChoise = "paper";
  }
  if (compChoise ===2)
  {
    document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-scissors.svg";
    document.getElementById("computer_select").classList.add('btn-scissors');
    compChoise ="scissors";
  }
  if (compChoise ===0)
  {
    document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-rock.svg";
    document.getElementById("computer_select").classList.add('btn-rock');
    compChoise ="rock";
  }
  return compChoise;
}

function updateScore(value) {
  score = score + value;
}

//  var selections = ['rock, papaer, scissors'];
//  var results = ['winner, tie, lose'];

function checkWhoWinGameOn(compChoise, usChoise) {
 // var score = document.querySelector('.score');

 if (compChoise === usChoise)
 {
   '.big-text'.innerHTML = results[1];
 }
 if (compChoise === "rock")
 {
   if (usChoise === selections[1])
   {
     updateScore(1);
     '.big-text'.innerHTML = results[0];
   }
   if (usChoise === selections[2])
   {
     updateScore(-1);
     '.big-text'.innerHTML = results[2];
   }
 }

 if (compChoise === "scissors")
 {
   if (usChoise === selections[0])
   {
    updateScore(1);
    '.big-text'.innerHTML = results[0];
   }
   if (usChoise === selections[1])
   {
    updateScore(-1);
    '.big-text'.innerHTML = results[2];
   }
 }

 if (compChoise === "paper")
 {
   if (usChoise === selections[1])
   {
    updateScore(-1);
    '.big-text'.innerHTML = results[2];
   }
   if (usChoise === selections[2])
   {
    updateScore(1);
    '.big-text'.innerHTML = results[0];
   }
 }

}