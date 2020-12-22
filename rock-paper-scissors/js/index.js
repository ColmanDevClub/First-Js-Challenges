var score, activePlayerm, userSelect;
var select, status;


var Controller = (function(){
    select = ['paper, scissors, rock'];
    status = ['win', 'lose', 'tie'];

    var chack = function (user, computer){

        if(user === computer){
            return status[2];
        }

        else{
            if(user === select[0]){
                if(computer === select[1]){
                    return status[1];
                }
                
                else if(computer ===  select[2]){
                    return status[0];
                }
            }

            if(user === select[1]){
                if(computer === select[0]){
                    return status[0];
                }
                
                else if(computer ===  select[2]){
                    return status[1];
                }
            }

            if(user === select[2]){
                if(computer === select[0]){
                    return status[1];
                }
                
                else if(computer ===  select[1]){
                    return status[0];
                }
            }
        }
 
    
    };

});



var btn = document.querySelectorAll('.btn-circle');

btn.forEach(function(item, index){

    var input = item.dataset.choice;
    
    item.addEventListener('click', function(){

    });

});
  

// var User = function(btn){
//     if(input = 'paper') 
//         userSelect = 'paper';
//     if(input = 'scissors')
//         userSelect = 'scissors';
//     if(input = 'rock')
//         userSelect = 'rock';   
// }

