import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_green.css');

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const countdownOutput = {
  daysLeft: document.querySelector('[data-days]'),
  hoursLeft: document.querySelector('[data-hours]'),
  minutesLeft: document.querySelector('[data-minutes]'),
  secondsLeft: document.querySelector('[data-seconds]'),
};

let startDate = Date.now();
let selectedDate;
let timerId;
let timeDiff;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();

    if (startDate >= selectedDate) {
      startBtn.disabled = true;
      return Notify.warning('Please, choose a date in the future!');
    }

    startBtn.disabled = false;
    // startBtn.removeAttribute('disabled');
    Notify.success('Now click the Start button');
  },
};
const fp = flatpickr(dateInput, options);

startBtn.disabled = true;
// startBtn.setAttribute('disabled', true);
startBtn.addEventListener('click', startTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function startTimer() {
  timerId = setInterval(() => {
    timeDiff = selectedDate - startDate;

    if (timeDiff <= 0) {
      stopTimer();
      return Notify.success(
        'The timer has finished the countdown! To start over, please, select a new date',
        {
          timeout: 4000,
        }
      );
    }

    dateInput.disabled = true;
    startBtn.disabled = true;
    startDate += 1000;
    let formattedTimeDiff = convertMs(timeDiff);
    timerMarkup(formattedTimeDiff);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  startBtn.disabled = true;
  dateInput.disabled = false;
}

function timerMarkup({ days, hours, minutes, seconds }) {
  countdownOutput.daysLeft.textContent = days;
  countdownOutput.hoursLeft.textContent = hours;
  countdownOutput.minutesLeft.textContent = minutes;
  countdownOutput.secondsLeft.textContent = seconds;
}
