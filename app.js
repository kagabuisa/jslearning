const persona = {
    first: 'Busingye',
    last: 'Salama',
    nickName: 'Sera',
    fullName() {
        const {
            first,
            last,
            nickName
        } = this
        return `${first} ${last} AKA ${nickName}`
    },
    printBio() {
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a person`)
    }
}
const printBot = persona.printBio;

function makeDeck() {
    const deck = []

}


//functionality 1.Draw 2.Shuffle

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'spades', 'diamonds', 'clubs'],
    values: '2,3,4,5,6,7,8,9,0,J,Q,K,A',
    initializeDeck() {
        const {
            suits,
            values,
            deck
        } = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    value: value,
                    suit: suit
                })
            }
        }
    },
    drawCard() {
        const cardDrawn = this.deck.pop()
        this.drawnCards.push(cardDrawn)
        return cardDrawn
    },
    drawMultiplecard(numofCards) {
        multiDraws = []
        for (let i = 0; i < numofCards; i++) {
            multiDraws.push(this.drawCard())
        }
        return multiDraws;
    },
    shuffleCards() {
        const {
            deck
        } = this
        const vid = Math.floor(Math.random(deck.length) * deck.length)
        console.log(vid)
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]]
        }
    }
}

function dealCards(NOD) {
    myDeck.initializeDeck()
    myDeck.shuffleCards()
    myDeck.drawMultiplecard(NOD)
    console.log(myDeck.deck)
}

function makeDeck(){
    return {
            deck: [],
            drawnCards: [],
            suits: ['hearts', 'spades', 'diamonds', 'clubs'],
            values: '2,3,4,5,6,7,8,9,0,J,Q,K,A',
            initializeDeck() {
                const {
                    suits,
                    values,
                    deck
                } = this;
                for (let value of values.split(',')) {
                    for (let suit of suits) {
                        deck.push({
                            value: value,
                            suit: suit
                        })
                    }
                }
            },
            drawCard() {
                const cardDrawn = this.deck.pop()
                this.drawnCards.push(cardDrawn)
                return cardDrawn
            },
            drawMultiplecard(numofCards) {
                multiDraws = []
                for (let i = 0; i < numofCards; i++) {
                    multiDraws.push(this.drawCard())
                }
                return multiDraws;
            },
            shuffleCards() {
                const {
                    deck
                } = this
                const vid = Math.floor(Math.random(deck.length) * deck.length)
                console.log(vid)
                for (let i = deck.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [deck[i], deck[j]] = [deck[j], deck[i]]
                }
            }
        }
    }
