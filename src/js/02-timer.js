import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

class Timer {
    constructor({ selector, targetDate }) {
        // this.selector = selector;
        this.finalDate = targetDate;
        this.creatingFaceClock();
        // this.creatingDate();
        this.timerStart();
        this.timerId = null;
    }

    getDataForTimer() {
        const time = this.finalDate - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return { time, days, hours, minutes, seconds,};
    }
    creatingFaceClock() {
        const faceClock = document.querySelector('.timer');
        const daysSpan = document.querySelector('[data-days]');
        const hoursSpan = document.querySelector('[data-hours]');
        const minutesSpan = document.querySelector('[data-minutes]');
        const secondsSpan = document.querySelector('[data-seconds]');

        daysSpan.textContent = String(this.getDataForTimer().days).padStart(2, '0');

        hoursSpan.textContent = String(this.getDataForTimer().hours).padStart(2, '0');

        minutesSpan.textContent = String(this.getDataForTimer().minutes).padStart(2, '0');

        secondsSpan.textContent = String(this.getDataForTimer().seconds).padStart(2, '0');       
    }
    // creatingDate() {
    //      const creatTargetDate = document.querySelector('#datetime-picker');
    //     if (this.finalDate <= new Date()) {
    //         creatTargetDate.textContent = 'This is the end';
    //     } else {
    //         creatTargetDate.textContent = 'We are waiting for';
        
    //     }
    // }
        timerStart(){
            // const deadLine = Date.parse(this.finalDate) <= Date.parse(new Date());
            this.timerId = setInterval(() => {
                const timeOff = this.targetDate - new Date();
                if (timeOff <= 1000) {
                    clearInterval(this.timerID);
                    startTimerRef.disabled = false;
                }
                this.creatingFaceClock();
            }, 1000);
        }
    
}
// 
let inDate = null;
const currentDate = Date.now();
const dateTimePicker = document.querySelector('#datetime-picker');
const startTimerRef = dateTimePicker.nextElementSibling;
startTimerRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inDate = selectedDates[0].getTime();
      if (inDate > currentDate) {
          startTimerRef.disabled = false;
      } else {
          startTimerRef.disabled = true;
          window.alert("Please choose a date in the future");
      }
  },
};

const fpickr = flatpickr('#datetime-picker', options);
function startTimer() {
  const selectedDate = new Date(inDate);

  const timer = new Timer({ targetDate: new Date(selectedDate) });
  startTimerRef.disabled = true;
}

startTimerRef.addEventListener('click', startTimer);