
var MatchController = (function() {

    var selections = [{
        name: 'paper',
        defeatedBy: 'scissors',
        win: 'rock'
    },
    
    {
        name: 'rock',
        defeatedBy: 'paper',
        win: 'scissors'
    },
    
    {
        name: 'scissors',
        defeatedBy: 'rock',
        win: 'paper'
    }];
    
    var isWin= function (user, computer){

        if(user.defeatedBy === computer.name){ return false; }
        else if(user.name === computer.name){ return "tie"; }
        else { return true; }
    };

    return {
        getSelectByName: function (input){
            for(var select of selections){
                if(select.name === input){ return select};
            }
        },

        getSelectByIndex: function (index){
            return selections[index];
        },

        getWinner: function(user, computer){
            return isWin(user, computer);
        }
    };
})();


var UIController = (function() {

    var displayScore = function(score){
        document.getElementById('score').innerHTML = score;
    }

    var changeIcon = function(select, element) {
        var node;
        node = element.querySelector('.image-wrapper');
        var img = document.createElement('img');

        if(select === 'rock'){
            img.src = "./assets/images/icon-rock.svg";
            element.className = "btn-circle btn-rock";
        }

        else if(select === 'paper'){
            img.src = "./assets/images/icon-paper.svg";
            element.className = "btn-circle btn-paper";
        }

        else{
            img.src = "./assets/images/icon-scissors.svg";
            element.className = "btn-circle btn-scissors";
        }
        node.replaceChild(img, node.firstElementChild);
    }

    var displayIcons = function(userSelect, computerSelect) {
        
        document.querySelector('main').style.display = 'none';
        document.querySelector('.selection').style.display = 'flex';
        
        var user_select = document.getElementById('user_select');
        var computer_select = document.getElementById('computer_select');

        changeIcon(userSelect.name, user_select);
        changeIcon(computerSelect.name, computer_select);
    }

    var displayWinner = function(win) {
            
        if(document.querySelector('.big-text').innerHTML === "It's a TIE") {
            var newElement;
            newElement = document.createElement('span');
            newElement.id = "winner";

            var element = document.querySelector('.big-text');
            element.innerHTML = "You ";
            element.appendChild(newElement);
        }

        if(win === true) {
            document.getElementById('winner').innerHTML = "win";
        }

        else if(win === "tie") {
            document.querySelector('.big-text').innerHTML = "It's a TIE";
        }

        else {
            document.getElementById('winner').innerHTML = "lose";
        }
    }

    return {

        displayResultPage: function(score, userSelect, computerSelect, win) {
            displayScore(score);
            displayIcons(userSelect, computerSelect);
            displayWinner(win);
        },

        displayHome: function() {
            document.querySelector('main').style.display = 'flex';
            document.querySelector('.selection').style.display = 'none';
        },


        displayRules: function() {
            document.querySelector('.rules-modal').style.display = 'flex';
        },

        removeRules: function() {
            document.querySelector('.rules-modal').style.display = 'none';
        }
    };
})();


var controller = (function(MatchCtrl, UICtrl) {

    var score = 0;
    
    var setupEventListeners = function() {
        // Checks what is the user choice 
        var buttons = document.querySelectorAll('.btn-circle');

        buttons.forEach(function(item){
            var input = item.dataset.choice;
            
            item.addEventListener('click', function(){
                ctrlMatch(input);
            });
        });

        // Back to the home page
        document.querySelector('.btn').addEventListener('click', UICtrl.displayHome);

        document.getElementById('close').addEventListener('click', UICtrl.removeRules);

        // Display the rules
        document.querySelector('.btn-rules').addEventListener('click', UICtrl.displayRules);
    }

    // Random choice for the computer
    var randomSelect = function(){
        var rand = Math.floor(Math.random() * 3); 
        return MatchCtrl.getSelectByIndex(rand);
    }

    // Run the game
    var ctrlMatch = function(user) {
        // 1. Get user select
        var userSelect = MatchCtrl.getSelectByName(user);

        // 2. Random the computer select
        var computerSelect = randomSelect();
        
        // 2. Who is the winner
        var statusGame = MatchCtrl.getWinner(userSelect, computerSelect);

        // 3. Update the score
        if(statusGame === true) {
            score++;
        }

        UICtrl.displayResultPage(score, userSelect, computerSelect, statusGame);
    }
          
    return {
        init: function() {
            console.log('Aplication has started.');
            setupEventListeners();
        }
    };

})(MatchController, UIController);

controller.init();