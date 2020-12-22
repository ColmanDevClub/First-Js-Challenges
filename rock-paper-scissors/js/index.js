
var MatchController = (function() {

    var selections = ['paper', 'scissors', 'rock'];
    var status = ['win', 'lose', 'tie'];
    
    var checkWin= function (user, computer){
        //console.log('User:' + user + ' ' + 'Computer:' + computer);
        
        if(user === computer){  // It'a a tie
            return status[2];
        }

        else{

            // User -- Paper
            if(user === selections[0]){
                if(computer === selections[1]){
                    return status[1];
                }

                else if(computer === selections[2]){
                    return status[0];
                }
            }
            
            // User -- Scissors
            if(user === selections[1]){
                if(computer === selections[0]){
                    return status[0];
                }

                else if(computer === selections[2]){
                    return status[1];
                }
            }

            // User -- Rock
            if(user === selections[2]){
                if(computer === selections[0]){
                    return status[1];
                }

                else if(computer === selections[1]){
                    return status[0];
                }
            }
        }  
    };


    return {

        getSelections: function (){
            return selections;
        },

        getStatus: function(){
            return status;
        },

        getWinner: function(user, computer){
            return checkWin(user, computer);
        }
    };

})();



var UIController = (function() {

    var addIcon = function(element, icon){
        var newElement, image;

        newElement = document.createElement('span');
        newElement.className = "image-wrapper";

        image = document.createElement('img');

        if(icon === 'rock'){
            image.src = "./assets/images/icon-rock.svg";
            element.className = "btn-circle btn-rock";

        }

        else if(icon === 'paper'){
            image.src = "./assets/images/icon-paper.svg";
            element.className = "btn-circle btn-paper";
        }

        else{
            image.src = "./assets/images/icon-scissors.svg";
            element.className = "btn-circle btn-scissors";
        }

        newElement.appendChild(image);
        element.appendChild(newElement);
    }

    return {

        displayScore: function(score){
            document.getElementById('score').innerHTML = score;
        },


        displayResultPage: function(userSelect, computerSelect) {
            var element;
            document.querySelector('main').style.display = 'none';
            document.querySelector('.selection').style.display = 'flex';

            // Remove the icon
            element = document.getElementById('selection');
            var classList = element.querySelectorAll('.btn-circle');
            
            
            classList.forEach(function(item, index){
                var toRemove;
                toRemove = item.querySelector('.image-wrapper');
                toRemove.remove();
                
                if(index === 0){
                    addIcon(item, userSelect);
                }

                else if(index === 1){
                    addIcon(item, computerSelect);
                }
            });
        },

        displayWinner: function(status) {

            if(status !== MatchController.getStatus()[2]){
                document.getElementById('winner').innerHTML = status;
            }
            
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
        var x = Math.floor(Math.random() * 3); 

        return MatchCtrl.getSelections()[x];
    }


    // Run the game
    var ctrlMatch = function(userSelect) {

        // 1. Random the computer select
        var computerSelect = randomSelect();
        UICtrl.displayResultPage(userSelect, computerSelect);
        
        // 2. Display the Winner
        var status = MatchCtrl.getWinner(userSelect, computerSelect);
        UICtrl.displayWinner(status);

        // 3. Update and display the score
        if(status !== MatchController.getStatus()[2]){
            if(status === MatchController.getStatus()[0]){
                // Win
                score++;
            }
    
            else{
                // Lose
                if(score !== 0)
                {
                    score--;
                }  
            } 
        }

        UICtrl.displayScore(score);
    }
          
    return {
        init: function() {
            console.log('Aplication has started.');
            setupEventListeners();
            UICtrl.displayScore(0);
        }
    };

})(MatchController, UIController);


controller.init();