var userWin=0;
var computerWin=0;
var draw = 0;
var userChoice;
var computerChoice;
var resultss;
const choices = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];




function userRock(){
    userChoice= choices[0];
    console.log(userChoice);
    generateComputerChoice();
    console.log(computerChoice);
    if(userChoice == choices[0]){
        if(checkRock(computerChoice)){
            userWin = userWin+1;
            resultss = "Wygrana"; 
        }else{
            if(computerChoice == choices[0]){
                draw = draw+1;
                resultss = "Remis"; 
            }else {
                computerWin = computerWin+1;
                resultss = "Przegrana"; }
        }
    }
    console.log(userWin,draw,computerWin);
    results();
};

function userScissors(){
    userChoice= choices[1];
    console.log(userChoice);
    generateComputerChoice();
    console.log(computerChoice);
        if(checkScissors(computerChoice)){
            userWin = userWin+1;
            resultss = "Wygrana"; 
        }else{
            if(computerChoice == choices[1]){
                draw = draw+1;
                resultss = "Remis"; 
            }else {
                computerWin = computerWin+1;
                resultss = "Przegrana"; }
        }
    console.log(userWin,draw,computerWin);
    results();
};

function userPaper(){
    userChoice= choices[2];
    console.log(userChoice);
    generateComputerChoice();
    console.log(computerChoice);
    if(userChoice == choices[2]){
        if(checkPaper(computerChoice)){
            userWin = userWin+1;
            resultss = "Wygrana"; 
        }else{
            if(computerChoice == choices[2]){
                draw = draw+1;
                resultss = "Remis"; 
            }else {
                computerWin = computerWin+1;
                resultss = "Przegrana"; }
        }
    }
    console.log(userWin,draw,computerWin);
    results();
};
function userLizard(){
    userChoice= choices[3];
    console.log(userChoice);
    generateComputerChoice();
    console.log(computerChoice);
    if(userChoice == choices[3]){
        if(checkLizard(computerChoice)){
            userWin = userWin+1;
            resultss = "Wygrana"; 
        }else{
            if(computerChoice == choices[3]){
                draw = draw+1;
                resultss = "Remis"; 
            }else {
                computerWin = computerWin+1;
                resultss = "Przegrana"; }
        }
    }
    console.log(userWin,draw,computerWin);
    results();
};
function userSpock(){
    userChoice= choices[4];
    console.log(userChoice);
    generateComputerChoice();
    console.log(computerChoice);
    if(userChoice == choices[4]){
        if(checkSpock(computerChoice)){
            userWin = userWin+1;
            resultss = "Wygrana"; 
        }else{
            if(computerChoice == choices[4]){
                draw = draw+1;
                resultss = "Remis"; 
            }else {
                computerWin = computerWin+1;
                resultss = "Przegrana"; }
        }
    }
    console.log(userWin,draw,computerWin);
    results();
};


function checkRock(choice){
    if(choice==choices[1] || choice==choices[3]){
        return true;
    }else{
        return false;
    }
}

function checkScissors(choice){
    if(choice==choices[2] || choice==choices[3]){
        return true;
    }else{
        return false;
    }
}

function checkPaper(choice){
    if(choice==choices[0] || choice==choices[4]){
        return true;
    }else{
        return false;
    }
}

function checkLizard(choice){
    if(choice==choices[2] || choice==choices[4]){
        return true;
    }else{
        return false;
    }
}

function checkSpock(choice){
    if(choice==choices[0] || choice==choices[1]){
        return true;
    }else{
        return false;
    }
}

function generateComputerChoice(){
    computerChoice = choices[Math.floor(Math.random() * 5)];
}

function results(){
    document.getElementById("win").innerHTML = userWin;
    document.getElementById("draw").innerHTML = draw;
    document.getElementById("lose").innerHTML = computerWin;
    document.getElementById("userChoice").innerHTML = userChoice;
    document.getElementById("computerChoice").innerHTML = computerChoice;
    document.getElementById("results").innerHTML = resultss;
}

function reset(){
    userChoice =0;
    computerChoice=0;
    computerWin=0;
    userWin=0;
    draw=0;
    results();
}