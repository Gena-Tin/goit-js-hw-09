import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector("[data-start]");
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");

startBtn.disabled = true;

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    dateFormat: "Y-m-d H:i",

    onClose(selectedDates) {
      if(new Date() > selectedDates[0]){
        startBtn.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');
        return;
      }else{
        startBtn.disabled = false;
        startBtn.addEventListener("click", () =>{
            console.log(convertMs(selectedDates[0].getTime() - (new Date().getTime())));
        })
      }
    },
  };

  flatpickr("#datetime-picker", {...options});
