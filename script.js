let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerNmae = document.getElementById("player-el")
// this function generatrs a random card number //
function getRandomCard() {
    let randomNumber =  Math.floor((Math.random() * 13) + 1);
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// this function starts the game //
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

//this function renders the game aspects //
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1  ){
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

   // this function generatrs a new third card 
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let drawNewCard = getRandomCard()
        sum += drawNewCard
        cards.push(drawNewCard)
        renderGame()
    }

   }

