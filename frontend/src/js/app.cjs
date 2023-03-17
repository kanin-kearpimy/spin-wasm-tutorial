const session_label = {
    "number-1": 1, 
    "number-2": 2,
    "number-3": 3,
    "number-4": 4,
}
let session_id = ""
let start = 30
const startGame = async () => {
    let _constant_start = start
    try {
        // code here
        // .....
        // .....
        
    } catch (error) {
        alert('game error!!!')
    }
}

const startScoreBoard = async () => {
    // Code here
    // .....
    // .....
    document.querySelector('#score').innerHTML = data.score
}

const displayInstruction = (time, session) => {
    document.querySelector('#instruction').innerHTML = session[Object.keys(session)[time]]
}

const setTimer = (time) => {
    document.querySelector('#timer').innerHTML = time
}

const answer = async (event) => {
    // code here
    // .....
    // .....
}

startGame()