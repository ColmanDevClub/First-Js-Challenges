

//Amit ben basat 

var score ,userChoice,computerChoice,buttones,gameover;
var choice;
init();


var data = {

    scorePosNag:{
        positiveScore:0
    },

   
    buttonChoice:["btn-paper","btn-scissors","btn-rock"] 


}


    function init() {
    score =0;
    document.getElementById("score").textContent='0';
    choice = [false,false,false];
    gameover=0;
    ocument.querySelector('.player-1-panel').classList.remove('winner');






}





function choiseplayerone(){
    if(document.getElementById(".btn-paper").clicked==true){
        choice[0] = true ; 
    } 
    else if(document.getElementById(".btn-scissors").clicked==true)
    {
        choice[1]=true;
    }
    
    else if(document.getElementById(".btn-rock").clicked==true) {
        choice[2] = true;
    }

}

    


    //btn-paper","btn-scissors","btn-rock
    
    function player1Choise() {

        

            if(choice[0]==true)
            {
                document.querySelector(".btn-paper").addEventListener('click',function(){
                    document.querySelector(".selection").style.display = "flex";
                    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-paper.svg";
                   document.getElementById("computer_select").classList.add('btn-paper');
                   whowines
                });
               
            }
            else if(choice[1]==true)
            {
                document.querySelector(".btn-scissors").addEventListener("click",function(){
                    document.querySelector(".selection").style.display = "flex";
                    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-scissors.svg";
                    document.getElementById("computer_select").classList.add('btn-scissors');
                    whowines();
                
                });
                
            }
            else if(choice[2]==true)
            {
                document.querySelector(".btn-rock").addEventListener("click",function(){
                    document.querySelector(".selection").style.display = "flex";
                    document.getElementById("user_select").querySelector("img").src = "./assets/images/icon-rock.svg";
                    document.getElementById("computer_select").classList.add('btn-rock');
                    whowines();
                });
                
            }

            
       
        
    }


    function playercomp()
    {
           
            
            if(computerChoice===0) {
                document.querySelector(".btn-paper").addEventListener("click",whowines());
            } 
            else if (computerChoice===1) {
               
                    document.querySelector(".btn-scissors").addEventListener("click",whowines());
                    
            } 
            
            else if (computerChoice===2) {
               
                  document.querySelector(".btn-rock").addEventListener("click",whowines());
                
            }   
            
       
            
    }

    computerChoice= grealComp();
    playercomp();
    player1Choise();

   
    function grealComp(){
        var computerChoice = buttonChoice[Math.floor(Math.random() * buttonChoice.length)];
        activeplayer =1;
        return computerChoice;
    }
    
    
    

    function whowines(){

        var x =0;
        gameover=1;
        if(choice[0]==true&&computerChoice==0||choice[1]==true&&computerChoice==1 ||choice[2]==true&&computerChoice==2) {

           document.querySelector(".big-text").textContent("DRAW");
           gameover=0;
        } 

        else if(choice[1]==true&&computerChoice==0) {

            document.querySelector(".big-text").textContent("YOU WIN");
            x=1;
            score(x);
            
         } 
         else if(choice[2]==true&&computerChoice==0) {

            document.querySelector(".big-text").textContent("YOU LOSE");
            x=-1;
            score(x);
         }   
        else if(choice[0]==true&&computerChoice==1) {

            document.querySelector(".big-text").textContent("YOU LOSE");
            x=-11;
            score(x);
         }
         else if(choice[2]==true&&computerChoice==1) {

            document.querySelector(".big-text").textContent("YOU WIN");
            x=1;
            score(x);
         } 
         else if(choice[0]==true&&computerChoice==2) {

            document.querySelector(".big-text").textContent("YOU WIN");
            x=1;
            score(x);
         }  
         else if(choice[1]==true&&computerChoice==2) {

            document.querySelector(".big-text").textContent("YOU LOSE");
            x=-1;
            score(x);
         } 
         
         


    }


    function score(x){
        if(x===1)
        {
            score++;
        }
        else{
            score--;
        }
       


    }


    function newgame(){
        if(gameover===1){
            init();
        }

    }






    



    






