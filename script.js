let usserScore = 0;
let comScore = 0;
let userScorePara = document.querySelector("#your-count1");
let comScorePara = document.querySelector("#com-count1");
const mssg = document.querySelector("#Winnerpara");
const choice = document.querySelectorAll(".imgAll");

function genRandomNo() {
    const options = ["rock", "scissor", "paper"];
    let x = Math.floor(Math.random() * 3);
    // console.log(x);
    return options[x];
}

const showWinner = (userWin) =>{
    if(userWin){
        console.log("You WON");
        mssg.innerText = "You Win!";
        usserScore++;
        userScorePara.innerText = usserScore;
    }else{
        console.log("You lost");
        mssg.innerText = "You lose";
        comScore++;
        comScorePara.innerText = comScore;
    }
}

const playGame = (userId) =>{
    console.log(userId);
    const comCoice = genRandomNo();
    console.log(comCoice);
    if(userId === comCoice){
        console.log("Draw");
        mssg.innerText = "Game Draw!. Play Again";
    }
    else{
        let userWin = true;
        if(userId === "rock"){
            userWin = comCoice === "paper" ? false : true;
        }
        else if(userId === "paper"){
            userWin = comCoice === "scissor"? false : true;
        }
        else{
            userWin = comCoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
}
 
choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const chId= choice.getAttribute("id");
        console.log("choice was clicked ");
        playGame(chId);
    });
});