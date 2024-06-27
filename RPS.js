let userScore = 0;
let compScore = 0;
let compChoice;
let userChoice;

const uScore = document.getElementById("user-score")
const cScore = document.getElementById("comp-score")
const btn = document.getElementById("btn")

const choiceList = ["rock", "paper", "scissors"]


const choice = document.querySelectorAll(".choice")
console.log(choice)
choice.forEach((choose) => {
    choose.addEventListener("click", function() {
        userChoice = choose.getAttribute("id")
        console.log("Users choice is : "+ userChoice)

        let rand = Math.floor(Math.random()*choiceList.length)
        compChoice = choiceList[rand]
        console.log("Computers choice is : "+ compChoice)

        checkWinner()
    })
});



const checkWinner = () => {
    if(userChoice == compChoice) {
        console.log("Match Drawn")
        btn.innerText = "It was Draw"
        btn.style.background = "yellow"
        btn.style.color = "black"
    }
    else if((userChoice == "rock" && compChoice == "scissors") || (userChoice == "paper" && compChoice == "rock") || (userChoice == "scissors" && compChoice == "paper")) {
        console.log("User winner")
        userScore+=1
        uScore.textContent = userScore
        btn.innerText = `You Won! ${userChoice} beats ${compChoice}`
        btn.style.backgroundColor = "green"
        btn.style.color = "white"
    }
    else {
        console.log("Computer winner")
        compScore+=1
        cScore.textContent = compScore
        btn.innerText = `You lost. ${compChoice} beats ${userChoice}`
        btn.style.backgroundColor = "red"
        btn.style.color = "white"
    }
}