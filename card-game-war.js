console.log('Hello World welcome to the game of War')


const suits = ["♠", "♥", "♣", "♦"]
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']

class Deck {
    constuctor(cards) {
        this.cards = cards
        cards = []
    }


    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }

    newDeck() {
        let cardArray = new Array()
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let card = new Card(suits[i], values[x])
                cardArray.push(card)
            }
        }
        return cardArray
    }

}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

}

class Player {
    constructor(name, stackOfCards) {
        this.name = name
        this.stackOfCards = stackOfCards
    }
}


let deck1 = new Deck()
deck1.cards = deck1.newDeck()
let halfOfDeck = (deck1.cards.length) / 2
deck1.shuffle()

let playerOneDeck = deck1.cards.slice(0, halfOfDeck)
let playerTwoDeck = deck1.cards.slice(halfOfDeck, deck1.cards.length)
console.log(playerOneDeck)
console.log(playerTwoDeck)


let player1 = new Player('Noah', playerOneDeck)
let player2 = new Player("Mike", playerTwoDeck)



let playerOneScore = 0;
let playerTwoScore = 0;

for(let i =0; i < player2.stackOfCards.length -1; i++){
    
    if(player1.stackOfCards[i].value > player2.stackOfCards[i].value){
        playerOneScore += 1
    } else if(player1.stackOfCards[i].value < player2.stackOfCards[i].value){
        playerTwoScore += 1
    }
}
if(playerOneScore > playerTwoScore){
    console.log(`${player1.name} is the winner with ${playerOneScore} points, while 
    ${player2.name}  only had ${playerTwoScore} points!`)
} else if(playerOneScore < playerTwoScore){
    console.log(`${player2.name}  is the winner with ${playerTwoScore} points, while 
    ${player1.name}  only had ${playerOneScore} points!`)
} else {
    console.log("No One has Won. BOO HOO")
}



