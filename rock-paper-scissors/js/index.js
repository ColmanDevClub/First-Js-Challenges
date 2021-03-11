var UIcontroller = (function()
{
    var DOMStrings = 
    {
        classBtnPaper: '.btn-paper',
        classBtnScissors: '.btn-scissors',
        calssBtnRock: '.btn-rock',
        classBtnCircle: '.btn-circle',
        classBtnPick: '.pick',
        classWinner: '.big-text',
        classResultText: '.big-text',
        classRulesPage: '.rules-modal',
        idScore: 'score',
        idMain: 'main',
        idSelection: 'selection',
        idUsrSelect: 'user_select',
        idComputerSelect: 'computer_select',
        idWinner: 'winner',
        idBtnReset: 'reset',
        idBtnRulesOpen: 'open',
        idBtnRulesClose: 'close'
    };

    var classStringFormater = function(className)
    {
        return className.substr(1);
    };

    var getHTML = function(id)
    {
        return document.getElementById(id);
    };

    var htmlClassRemover = function(html)
    {
        html.classList.remove(classStringFormater(DOMStrings.classBtnPaper));
        html.classList.remove(classStringFormater(DOMStrings.classBtnScissors));
        html.classList.remove(classStringFormater(DOMStrings.calssBtnRock));
    };

    var imgSrcChange = function(src, pick)
    {
        var srcArray, last;

        srcArray = src.split('/');
        last = srcArray.length - 1;

        srcArray[last] = 'icon-' + pick + '.svg';

        return srcArray.join('/');
    };

    var resultChanger = function(result)
    {
        var res = document.querySelector(DOMStrings.classResultText);
        if (result === 'darw')
        {
            //res.firstElementChild.style.display = "none"
            res.textContent = result;
        }
        else if (result)
        {
            res.textContent = result/*.split(" ")[0]*/;
            //res.firstElementChild.style.display = "inline";
        }
    };

    return {

        getScore: function() {
            var score = document.getElementById(DOMStrings.idScore).textContent;
            score = parseInt(score);
            return score;
        },

        displayScore: function(score) {         
            document.getElementById(DOMStrings.idScore).textContent = score.toString();
        },

        pageSwitch: function(pageToClose, pageToOpen) {
            pageToClose.style.display = "none";
            pageToOpen.style.display = "flex";
        },

        displayResultPage: function(housePick, playerPick, result){
            var playerHTML, houseHTML, mainPage, selectionPage;

            // Get the html segment
            playerHTML = document.getElementById(DOMStrings.idUsrSelect);
            houseHTML = document.getElementById(DOMStrings.idComputerSelect);

            // Remove irelevant classes
            htmlClassRemover(playerHTML);
            htmlClassRemover(houseHTML);

            // Add relavent class
            playerHTML.classList.add('btn-' + playerPick);
            houseHTML.classList.add('btn-' + housePick);

            // Change Image src
            playerHTML.firstElementChild.firstElementChild.src = imgSrcChange(playerHTML.firstElementChild.firstElementChild.src, playerPick);
            houseHTML.firstElementChild.firstElementChild.src = imgSrcChange(houseHTML.firstElementChild.firstElementChild.src, housePick);

            // Change Image alt
            playerHTML.firstElementChild.firstElementChild.alt = playerPick + '-icon';
            houseHTML.firstElementChild.firstElementChild.alt = housePick + '-icon';

            // Change round result
            resultChanger(result);

            // Display the page
            mainPage = document.getElementById(DOMStrings.idMain);
            selectionPage = document.getElementById(DOMStrings.idSelection);
            UIcontroller.pageSwitch(mainPage, selectionPage);
        },

        getDOMStrings: function() {
            return DOMStrings
        }
    };
})();

var HouseController = (function()
{
    var picks;

    picks = ['paper', 'scissors', 'rock'];

    var pickMap = {
        'rock': 0,
        'paper': 1,
        'scissors': 2
    };

    var base3Calc = function(firstNum, SecondNum)
    {
        var result = firstNum - SecondNum;
        if(result < 0)
        {
            return result + 3; 
        }
        return result % 3;
    };

    return {
        generatePick: function()
        {
            var ranNum = Math.floor(Math.random() * 3);
            return picks[ranNum];
        },

        compare: function(housePick, playerPick)
        {
            var result;
            result = base3Calc(pickMap[playerPick], pickMap[housePick]);
            
            switch (result)
            {
                case 0:
                    return 'draw';
                case 1:
                    return 'You Won';
                case 2:
                    return 'House Won';
            }
        }
    };
})();

var controller = (function(UIctrl, HouseCrtl)
{
    var playerPick, housePick;

    var setEventListeners = function()
    {
        var buttons, DOM, result, mainPage, rulesPage;

        DOM = UIctrl.getDOMStrings();
        mainPage = document.getElementById(DOM.idMain);
        rulesPage = document.querySelector(DOM.classRulesPage);

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

                result = HouseCrtl.compare(housePick, playerPick);
                updateScore(result);
                UIctrl.displayResultPage(housePick, playerPick, result);
            });
        });

        document.getElementById(DOM.idBtnReset).addEventListener('click', function()
        {
            var selectioPage;

            selectioPage = document.getElementById(DOM.idSelection);

            UIctrl.pageSwitch(selectioPage, mainPage);
        });

        document.getElementById(DOM.idBtnRulesOpen).addEventListener('click', function()
        {
            UIctrl.pageSwitch(mainPage, rulesPage);
        });

        document.getElementById(DOM.idBtnRulesClose).addEventListener('click', function()
        {
            UIctrl.pageSwitch(rulesPage, mainPage);
        });
    };

    var updateScore = function(roundResult)
    {
        var curScore;
        curScore = UIctrl.getScore();
        switch (roundResult){
            case 'House Won':
                UIctrl.displayScore(curScore - 1);
                break;
            case 'You Won':
                UIctrl.displayScore(curScore + 1);
                break;
            case 'draw':
                UIctrl.displayScore(curScore);
        }
    }

    return {
        init: function()
        {
            console.log('Started')
            UIctrl.displayScore(0);
            setEventListeners();
        }
    };

})(UIcontroller, HouseController);

controller.init();