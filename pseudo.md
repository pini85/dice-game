Components:
Background
Game
player container -> currentScore, globalScore
dice
options -> option -> roll dice hold input new game new game
winner

Game will hold the state
state:
state = {
pointsToWin:100,
dices: [null,null],
playersTurn:0,
players:[
{
currentScore:0,
GlobalScore:0,
Wins:0
},
player2:{
currentScore:0,
GlobalScore:0,
Wins:0
turn: true
}
]

Props
player container
player(from index), playersTurn, currentScore, global score

totalScore
state.players[index].globalScore

currentScore
state.players[index].currentScore

RollDice
dice1 value,dice2 value from game state

Logic:

RollDice: 2 dice as random 1-6 change
while !6 and 6
pass to dice component to display dice
save currentScore to state which will change currentScore component
if 6 and 6
then next player - find out last player, then go to first player

Hold -> will take currentScore from state and add to global score.
if current score >= to pointsToWin then display winner component (with css or &&)
else continue

reset currentscore

change state to next player (reuse function in utils)

input -> function change this.state.pointsToWin.
