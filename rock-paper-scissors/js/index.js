var gameStates = {
  won: "WON",
  lost: "LOST",
  tied: "TIED",
};

var MatchController = (function () {
  var selections = [
    {
      name: "paper",
      defeatedBy: "scissors",
    },

    {
      name: "rock",
      defeatedBy: "paper",
    },

    {
      name: "scissors",
      defeatedBy: "rock",
    },
  ];

  function gameConclusion(user, computer) {
    console.log(user, computer);
    if (user.defeatedBy === computer.name) return gameStates.lost;
    else if (user.name === computer.name) return gameStates.tied;
    else return gameStates.won;
  }

  return {
    getSelectByName: function (input) {
      return selections.find((option) => option.name === input);
    },

    getSelectByIndex: function (index) {
      return selections[index];
    },

    gameConclusion,
  };
})();

var UIController = (function () {
  var main = document.querySelector("main");
  var selection = document.querySelector(".selection");
  var rulesModal = document.querySelector(".rules-modal");

  function hideElement(element) {
    element.style.display = "none";
  }
  function showElement(element) {
    element.style.display = "flex";
  }

  var displayScore = function (score) {
    document.getElementById("score").innerHTML = score;
  };

  var changeIcon = function (select, element) {
    var node = element.querySelector(".image-wrapper");
    var img = document.createElement("img");

    img.src = "./assets/images/icon-" + select + ".svg";
    element.className = "btn-circle btn-" + select;

    node.replaceChild(img, node.firstElementChild);
  };

  var displayIcons = function ({ userSelect, computerSelect }) {
    hideElement(main);
    showElement(selection);

    var userSelectionElement = document.getElementById("user_select");
    var computerSelectionElement = document.getElementById("computer_select");

    changeIcon(userSelect.name, userSelectionElement);
    changeIcon(computerSelect.name, computerSelectionElement);
  };

  var displayResult = function (result) {
    document.getElementById("winner").innerHTML = result;
  };

  return {
    displayResultPage: function (selections, result, score) {
      displayScore(score);
      displayIcons(selections);
      displayResult(result);
    },

    displayHome: function () {
      showElement(main);
      hideElement(selection);
    },

    displayRules: function () {
      showElement(rulesModal);
    },

    removeRules: function () {
      hideElement(rulesModal);
    },
  };
})();

var MainController = (function (MatchCtrl, UICtrl) {
  var score = 0;

  function addButtonsFunctionality(btnSelector) {
    var buttons = document.querySelectorAll(btnSelector);

    buttons.forEach(function (button) {
      var choice = button.dataset.choice;

      button.addEventListener("click", function () {
        startMatch(choice);
      });
    });
  }

  function addNavigationFunctionality() {
    document
      .querySelector(".btn")
      .addEventListener("click", UICtrl.displayHome);

    document
      .getElementById("close")
      .addEventListener("click", UICtrl.removeRules);

    document
      .querySelector(".btn-rules")
      .addEventListener("click", UICtrl.displayRules);
  }

  function setupEventListeners() {
    addButtonsFunctionality(".btn-circle");

    addNavigationFunctionality();
  }

  function randomChoice() {
    var rand = Math.floor(Math.random() * 3);

    return MatchCtrl.getSelectByIndex(rand);
  }

  function updateScore(gameStatus) {
    if (gameStatus === gameStates.won) {
      score++;
    }
  }

  var startMatch = function (user) {
    var selections = {
      userSelect: MatchCtrl.getSelectByName(user),
      computerSelect: randomChoice(),
    };
    var gameStatus = MatchCtrl.gameConclusion(
      selections.userSelect,
      selections.computerSelect
    );

    updateScore(gameStatus);

    UICtrl.displayResultPage(selections, gameStatus, score);
  };

  return {
    init: setupEventListeners,
  };
})(MatchController, UIController);

MainController.init();
