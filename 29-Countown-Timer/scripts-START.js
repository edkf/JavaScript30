const timers = document.querySelectorAll('.timer__button');
const timeLeft = document.querySelector('.display__time-left');

function getTime() {
  const time = Number(this.dataset.time);

  function includeZero(number){
    if(number.length < 2){
      return Number(`0${number}`);
    }
  }

  if(time <= 60) {
    timeLeft.innerHTML = '0:' + includeNumber(Number(this.dataset.time));
  } else {
    timeLeft.innerHTML = `${time / 60}:${time % 60}`;
  }
}

function decreaseTime() {

}

timers.forEach(time => time.addEventListener('click', getTime));
