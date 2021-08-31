document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        { name: 'burger', img: 'images/burger.png' },
        { name: 'cup-cake', img: 'images/cup-cake.png' },
        { name: 'french-fries', img: 'images/french-fries.png' },
        { name: 'fried-chicken', img: 'images/fried-chicken.png' },
        { name: 'fried-eggs', img: 'images/fried-eggs.png' },
        { name: 'hot-dog', img: 'images/hot-dog.png' },
        { name: 'pizza-slice', img: 'images/pizza-slice.png' },
        { name: 'soft-drink', img: 'images/soft-drink.png' },
        { name: 'burger', img: 'images/burger.png' },
        { name: 'cup-cake', img: 'images/cup-cake.png' },
        { name: 'french-fries', img: 'images/french-fries.png' },
        { name: 'fried-chicken', img: 'images/fried-chicken.png' },
        { name: 'fried-eggs', img: 'images/fried-eggs.png' },
        { name: 'hot-dog', img: 'images/hot-dog.png' },
        { name: 'pizza-slice', img: 'images/pizza-slice.png' },
        { name: 'soft-drink', img: 'images/soft-drink.png' }
    ]


    const grid = document.querySelector('.grid')
    const lifeBar = document.querySelector('.life-bar')

    const currentScore = document.querySelector('.current-score span')
    const highestScore = document.querySelector('.highest-score span')

    currentScore.innerHTML = 0
    highestScore.innerHTML = 0

    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    var lives = 5

    function showCards() {
        cardsArray.sort(() => 0.5 - Math.random())
        for (let i = 0; i < cardsArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', cardsArray[i].img)
            card.setAttribute('data-id', i)
            grid.appendChild(card)
        }
        setTimeout(setBoard, 5000)
    }


    function setBoard() {
        document.querySelectorAll('.grid img').forEach((card) => {
            card.setAttribute('src', 'images/blank.png')
            card.addEventListener('click', flipcard)
        })
    }

    function addLives() {
        for (let i = 0; i < 5; i++) {
            var life = document.createElement('img')
            life.setAttribute('src', '../images/full-heart.png')
            life.setAttribute('data-id', i)
            lifeBar.appendChild(life)
        }
    }

    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardsArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('.grid img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/check.png')
            cards[optionTwoId].setAttribute('src', 'images/check.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            if (lives > 1) {
                document.querySelectorAll('.life-bar img')[--lives].setAttribute('src', '../images/empty-heart.png')
            } else {
                alert('Game Lost! Try Again!')
                refresh()
            }
        }
        cardsChosen = []
        cardsChosenId = []
        currentScore.innerHTML = cardsWon.length * 5
        if (cardsWon.length === cardsArray.length / 2) {
            refresh()
        }
    }

    function refresh() {
        if(parseInt(highestScore.innerHTML) < parseInt(currentScore.innerHTML)) {
            highestScore.innerHTML = currentScore.innerHTML
            currentScore.innerHTML = 0
        }
        document.querySelectorAll('.grid img').forEach(element => {
            grid.removeChild(element)
        })
        document.querySelectorAll('.life-bar img').forEach(element => {
            lifeBar.removeChild(element)
        })
        cardsChosen = []
        cardsChosenId = []
        cardsWon = []
        lives = 5
        showCards()
        addLives()
    }

    showCards()
    addLives()

})