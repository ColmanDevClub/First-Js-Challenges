var UIcontroller = (function()
{
    var DOMStrings = 
    {
        classBtnPaper: '.btn-paper',
        classBtnScissors: '.btn-scissors',
        calssBtnRock: '.btn-rock',
        classBtnCircle: '.btn-circle',
        classBtnPick: '.pick'

    };

    return {

        getDOMStrings: function() {
            return DOMStrings
        }
    };
})();

var HouseController = (function()
{
    var picks;

    picks = ['paper', 'scissors', 'rock'];

    return {
        generatePick: function()
        {
            var ranNum = Math.floor(Math.random() * 3);
            return picks[ranNum];
        },

        compare: function(housePick, playerPick)
        {
            switch(playerPick){
                case 'paper':
                    switch(housePick){
                        case 'paper':
                            return 'draw';
                        case 'scissors':
                            return 'House Won';
                        case 'rock':
                            return 'You Won';
                    }
                case 'scissors':
                    switch(housePick){
                        case 'paper':
                            return 'You Won';
                        case 'scissors':
                            return 'draw';
                        case 'rock':
                            return 'House Won';
                    }
                case 'rock':
                    switch(housePick){
                        case 'paper':
                            return 'House Won';
                        case 'scissors':
                            return 'You Won';
                        case 'rock':
                            return 'draw';
                    }
            }
        }
    };
})();

var controller = (function(UIctrl, HouseCrtl)
{
    var playerPick, housePick;

    var setEventListeners = function()
    {
        var buttons, DOM;
        DOM = UIctrl.getDOMStrings();

        // Getting all the pick buttons (rock, paper, scissors)
        buttons = document.querySelectorAll(DOM.classBtnPick);
        
        buttons.forEach(function(cur)
        {
            // Adding each button an event listener
            cur.addEventListener('click', function()
            {
                // Getting the player choice
                playerPick = cur.getAttribute('data-choice');

                // Generating the house choice
                housePick = HouseCrtl.generatePick();

                console.log(HouseCrtl.compare(housePick, playerPick));
            });
        });
    };

    return {
        init: function()
        {
            console.log('Started')

            setEventListeners();
        }
    };

})(UIcontroller, HouseController);

controller.init();