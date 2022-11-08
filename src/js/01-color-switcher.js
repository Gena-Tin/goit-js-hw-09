
const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

stopBtn.disabled = true;

let bgSwitcherId = null;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    bgSwitcherId = setInterval(() => {
        body.style.background = getRandomHexColor()
    }
        , 1000);
})

stopBtn.addEventListener("click", () =>{
    clearInterval(bgSwitcherId);

    startBtn.disabled = false;
    stopBtn.disabled = true;
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

