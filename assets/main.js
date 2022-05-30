// special Countdown
let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hour");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let Countdown = () => {
  let futureDate = new Date("10 June 2022");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  dayItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
};

Countdown();
setInterval(Countdown, 1000);
// Scroll Back To Top

// Nav hide
