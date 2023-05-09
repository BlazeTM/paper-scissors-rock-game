var userWin=0;
var computerWin=0;
var draw = 0;
var userChoice;
var computerChoice;
const choices = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
computerChoice = Math.floor(Math.random() * 5);
console.log(choices[computerChoice]);

if(userChoice== choices[0] && computerChoice == choices[0]){
    draw = draw+1;
}if(userChoice== choices[0] && computerChoice == choices[1]){
    userWin = userWin+1;
}if(userChoice== choices[0] && computerChoice == choices[0]){
    draw = draw+1;
}if(userChoice== choices[0] && computerChoice == choices[0]){
    draw = draw+1;
}if(userChoice== choices[0] && computerChoice == choices[0]){
    draw = draw+1;
}if(userChoice== choices[0] && computerChoice == choices[0]){
    draw = draw+1;
}if(userChoice== choices[0] && computerChoice == choices[0]){
    draw = draw+1;
}