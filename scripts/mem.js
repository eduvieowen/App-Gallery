// memory game

const cardArray = [
    {
        name: 'disc',
        img: 'media/mem-media/discord.png',
    },
    {
        name: 'git',
        img: 'media/mem-media/github-black.png',
    },
    {
        name: 'inst',
        img: 'media/mem-media/instagram.png',
    },
    {
        name: 'link',
        img: 'media/mem-media/linkedin-trans-black.png',
    },
    {
        name: 'twitch',
        img: 'media/mem-media/twitch.png',
    },
    {
        name: 'twitter',
        img: 'media/mem-media/twitter-blue.png',
    },
    {
        name: 'disc',
        img: 'media/mem-media/discord.png',
    },
    {
        name: 'git',
        img: 'media/mem-media/github-black.png',
    },
    {
        name: 'inst',
        img: 'media/mem-media/instagram.png',
    },
    {
        name: 'link',
        img: 'media/mem-media/linkedin-trans-black.png',
    },
    {
        name: 'twitch',
        img: 'media/mem-media/twitch.png',
    },
    {
        name: 'twitter',
        img: 'media/mem-media/twitter-blue.png',
    }
]
cardArray.sort(() =>0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const displayResult = document.querySelector('#mem-score')

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let index = 0; index < cardArray.length; index++) {
        const card = document.createElement('img')

        card.setAttribute('src', 'media/pink-to-purp.png')
        card.setAttribute('class', 'mem-btn') //styling for images
        card.setAttribute('data-id', index)

        gridDisplay.appendChild(card)
        
        card.addEventListener('click', flipCard)
        // console.log(card);
    }
}
createBoard()

function flipCard() {
    const cardId = this.getAttribute('data-id')
    
    // console.log('clicked card with id: ', cardId);
    
    cardsChosen.push(cardArray[cardId].name)
    console.log(cardArray[cardId].name); //logging out the card name

    cardsChosenIds.push(cardId)
    console.log('card id: ' + cardsChosenIds); //logging out card id

    console.log('chosen cards: ' + cardsChosen); //logging out all chosen cards
    
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 300) 
    }
}

function checkMatch() {

    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        alert('Clicked Same Card Twice!')
        cards[optionOneId].setAttribute('src', 'media/pink-to-purp.png')
        cards[optionTwoId].setAttribute('src', 'media/pink-to-purp.png')
    }

    if (cardsChosen[0] == cardsChosen[1] && optionOneId != optionTwoId) {

        // alert(cardsWon.length+1 + ' Matched!')
        
        cards[optionOneId].setAttribute('class', 'opacity-40, mem-btn-2')
        cards[optionTwoId].setAttribute('class', 'opacity-40, mem-btn-2')
        
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        displayResult.textContent = cardsWon.length+1


        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'media/pink-to-purp.png')
        cards[optionTwoId].setAttribute('src', 'media/pink-to-purp.png')
    }
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        displayResult.innerHTML = "6 || Congratulations, you beat the game!";
    }
}
