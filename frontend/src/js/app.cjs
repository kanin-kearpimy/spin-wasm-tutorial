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
let session_id = ""
let start = 30
const startGame = async () => {
    let _constant_start = start
    try {
        const { data } = await axios.get(
            `http://127.0.0.1:3000/sessions?totalSession=${start}`
            )
        const { session } = data
        session_id = data.session_id
        const score = setInterval(startScoreBoard, 500)
        const timer = setInterval(() => {
            if(start < 0) {
                clearInterval(score)
                return clearInterval(timer)
            }
            displayInstruction(_constant_start - start, session)
            setTimer(start)
            start = start - 1
        }, 1000)
        
    } catch (error) {
        alert('game error!!!')
    }
}

const startScoreBoard = async () => {
    const { data } = await axios.get(
        `http://127.0.0.1:3000/score?session_id=${session_id}`
    )
    document.querySelector('#score').innerHTML = data.score
}

const displayInstruction = (time, session) => {
    document.querySelector('#instruction').innerHTML = session[Object.keys(session)[time]]
}

const setTimer = (time) => {
    document.querySelector('#timer').innerHTML = time
}

const answer = async (event) => {
    const label = event.id
    const body = {
        session_id,
        answer: label,
        timeSlot: start
    } 
    // should be post here!!!
    await axios.post(`http://127.0.0.1:3000/control`, body, { headers: {"Content-Type": "text/plain"}})
}

startGame()