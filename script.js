let userscore = 0;
let compscore = 0;
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
const sizing = document.querySelector(".sizing");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getcomputerchoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomno = (Math.floor(Math.random() * 3));
    return choices[randomno];
}

function capital(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissors";
}


function win(user, computer) {
    userscore++;
    userScore.innerHTML = userscore;
    compScore.innerHTML = compscore;
    const smalluser = "user".fontsize(3);
    const smallcomp = "comp".fontsize(3);
    result_p.innerHTML = `${capital(user)} beats ${capital(computer)}. You Win! 🎉`;


}


function lose(user, computer) {
    compscore++;
    userScore.innerHTML = userscore;
    compScore.innerHTML = compscore;
    const smalluser = "user".fontsize(3);
    const smallcomp = "comp".fontsize(3);
    result_p.innerHTML = `${capital(user)} loses to ${capital(computer)}. You Lost... 👻`;
}


function draw(user, computer) {
  
    const smalluser = "user".fontsize(3);
    const smallcomp = "comp".fontsize(3);
    result_p.innerHTML = `${capital(user)} Equals ${capital(computer)}. It's Draw! 😑`;
}

function game(userchoice) {
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userchoice, computerchoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userchoice, computerchoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userchoice, computerchoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("rock");
    })


    paper_div.addEventListener('click', function () {
        game("paper");
    })

    scissor_div.addEventListener('click', function () {
        game("scissor");
    })
}
main();


function changeuserscore() {

}