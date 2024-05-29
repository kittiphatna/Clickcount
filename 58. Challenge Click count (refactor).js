
let p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

let p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}


let resetButton = document.querySelector("#reset")
let playRound = document.querySelector("#playRound")
let winningScore = 5
let isGameOver = false;

p1Button.addEventListener("click", function () {
    updateScore(p1, p2)
})

p2Button.addEventListener("click", function () {
    updateScore(p2, p1)
})

resetButton.addEventListener("click", function () {
    reset()
})

playRound.addEventListener("change", function () {
    winningScore = Number(this.value)
    reset()

})

function reset() {
    p1Score = 0
    p2Score = 0
    isGameOver = false
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    p1Display.classList.remove("winner", "loser")
    p2Display.classList.remove("winner", "loser")
}


function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        console.log(player.score);
        if (player.score = winningScore) {
            isGameOver = true
            player.display.classList.add("winner")
            opponent.display.classList.add("loser")
            player.button.disable = true
            opponent.button.disable = true
        }
        player.display.textContent = player.score
        console.log(player.display.textContent);
    }

}