function choosePaper() {
    document.getElementById("main").style.display = "none";
    document.getElementById("selection").style.display = "flex";
    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-paper.svg";
    document.getElementById("user_select").className = "btn-circle btn-paper pick";
    computerChoose();
    calculateWinner();
}


function chooseScissors() {
    document.getElementById("main").style.display = "none";
    document.getElementById("selection").style.display = "flex";
    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-scissors.svg";
    document.getElementById("user_select").className = "btn-circle btn-scissors pick";
    computerChoose();
    calculateWinner();
}

function chooseRock() {
    document.getElementById("main").style.display = "none";
    document.getElementById("selection").style.display = "flex";
    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-rock.svg";
    document.getElementById("user_select").className = "btn-circle btn-rock pick";
    computerChoose();
    calculateWinner();
}

function playAgain() {
    document.getElementById("main").style.display = "flex";
    document.getElementById("selection").style.display = "none";
}

function computerChoose() {
    num = Math.floor(Math.random() * 3);
    if (num == 0) {
        document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-paper.svg";
        document.getElementById("computer_select").className = "btn-circle btn-paper pick";
    }

    if (num == 1) {
        document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-scissors.svg";
        document.getElementById("computer_select").className = "btn-circle btn-scissors pick";
    }

    if (num == 2) {
        document.getElementById("computer_select").querySelector("img").src = "./assets/images/icon-rock.svg";
        document.getElementById("computer_select").className = "btn-circle btn-rock pick";
    }
}

function calculateWinner() {

    score = document.getElementById("score").innerHTML;

    //paper
    if (document.getElementById("user_select").className ==  document.getElementById("computer_select").className) {
        document.getElementsByClassName("big-text")[0].innerHTML = "Tie";
    }

    if (document.getElementById("user_select").className == "btn-circle btn-paper pick" && document.getElementById("computer_select").className == "btn-circle btn-scissors pick") {
        document.getElementsByClassName("big-text")[0].innerHTML = "You Lose";
        score--;
        document.getElementById("score").innerHTML = score;
    }

    if (document.getElementById("user_select").className == "btn-circle btn-paper pick" && document.getElementById("computer_select").className == "btn-circle btn-rock pick") {
        document.getElementsByClassName("big-text")[0].innerHTML = "You Win";
        score++;
        document.getElementById("score").innerHTML = score;
    }

    //scissors

    if (document.getElementById("user_select").className ==  document.getElementById("computer_select").className) {
        document.getElementsByClassName("big-text")[0].innerHTML = "Tie";
    }

    if (document.getElementById("user_select").className == "btn-circle btn-scissors pick" && document.getElementById("computer_select").className == "btn-circle btn-rock pick") {
        document.getElementsByClassName("big-text")[0].innerHTML = "You Lose";
        score--;
        document.getElementById("score").innerHTML = score;
    }

    if (document.getElementById("user_select").className == "btn-circle btn-scissors pick" && document.getElementById("computer_select").className == "btn-circle btn-paper pick") {
        document.getElementsByClassName("big-text")[0].innerHTML = "You Win";
        score++;
        document.getElementById("score").innerHTML = score;
    }
    
    //rock
    if (document.getElementById("user_select").className ==  document.getElementById("computer_select").className) {
        document.getElementsByClassName("big-text")[0].innerHTML = "Tie";
    }

    if (document.getElementById("user_select").className == "btn-circle btn-rock pick" && document.getElementById("computer_select").className == "btn-circle btn-paper pick") {
        document.getElementsByClassName("big-text")[0].innerHTML = "You Lose";
        score--;
        document.getElementById("score").innerHTML = score;
    }

    if (document.getElementById("user_select").className == "btn-circle btn-rock pick" && document.getElementById("computer_select").className == "btn-circle btn-scissors pick") {
        document.getElementsByClassName("big-text")[0].innerHTML = "You Win";
        score++;
        document.getElementById("score").innerHTML = score;
    }
}