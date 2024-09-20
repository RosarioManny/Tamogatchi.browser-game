const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat")
const sleepyStatEl= document.querySelector("#sleepiness-stat")
const gameMessageEl = document.querySelector("#message")
const allButtonEl = document.querySelector("button")
const allStatEl = document.querySelector("#stat")

const playButton = document.querySelector("#play")
const feedButton = document.querySelector("#feed")
const sleepButton = document.querySelector("#sleep")
const resetButton = document.querySelector("#restart")

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

let timer;
let gameOver = false;

const state = {
    boredom: 0,
    sleepiness: 0,
    hunger: 0
};

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
const render = () => {
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepyStatEl.textContent = state.sleepiness
    if (gameOver === true) {
        clearInterval(timer)
        resetButton.classList.remove("hidden")
        gameMessageEl.classList.remove("hidden")
    }
};

resetButton.addEventListener("click", () => {
    resetButton.classList.add("hidden")
    gameMessageEl.classList.add("hidden")
    state.sleepiness = 0
    state.hunger = 0
    state.boredom = 0
    init()
})
const updateStates = () => {
  state.hunger += Math.floor(Math.random() * 3);
  state.sleepiness += Math.floor(Math.random() * 3);
  state.boredom += Math.floor(Math.random() * 3) 
}

const checkGameOver = () => {
    if (state.boredom === 10 || state.hunger === 10 || state.sleepiness === 10) {
        gameOver = true;
        console.log("Done")
    }
}

const init = () => {
    timer = setInterval(runGame, 1500)
}

allButtonEl.addEventListener("click", ( )=> {
    playBtnClick()
})
const playBtnClick = () => {
    
}

const runGame = () => { 
    updateStates()
    checkGameOver()
    render()
}

init()

