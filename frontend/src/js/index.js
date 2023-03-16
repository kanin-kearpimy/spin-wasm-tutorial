const session_label = {
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
    let start = 30
    try {
        const { data } = axios.get(`http://127.0.0.1:3000/sessions?totalSession=${start}`)
        const { session } = data
        const score = setInterval(startScoreBoard, 500)
        const timer = setInterval(() => {
            if(start < 0) {
                clearInterval(score)
                return clearInterval(timer)
            }
            displayInstruction(start - start, session)
            setTimer(start)
            start = start - 1
        }, 1000)
    } catch (error) {
        alert('game error!!!')
    }
}

const startScoreBoard = () => {
    document.querySelector('#score').innerHTML = 0
}

const displayInstruction = (time, session) => {
    document.querySelector('#instruction').innerHTML = session[Object.keys(session)[time]]
}

const setTimer = (time) => {
    document.querySelector('#timer').innerHTML = time
}

startGame()