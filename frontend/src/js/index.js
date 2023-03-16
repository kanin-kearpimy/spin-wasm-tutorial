const session = {
    "number-1": 1, 
    "number-2": 2,
    "number-3": 3,
    "number-4": 4,
    "plus": '+',
    "minus": '-',
    "multiply": '*',
    "divide": '/',
    "back": '<-',
    "space": 'space',
    "next": 'next'
}


const startGame = () => {
    let start = 10
    const score = setInterval(startScoreBoard, 500)
    const timer = setInterval(() => {
        if(start < 0) {
            clearInterval(score)
            return clearInterval(timer)
        }
        displayInstruction(10 - start)
        setTimer(start)
        start = start - 1
    }, 1000)
}

const startScoreBoard = () => {
    document.querySelector('#score').innerHTML = 0
}

const displayInstruction = (time) => {
    document.querySelector('#instruction').innerHTML = session[Object.keys(session)[time]]
}

const setTimer = (time) => {
    document.querySelector('#timer').innerHTML = time
}

startGame()