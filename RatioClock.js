'use strict';
setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
function setClock() {
  const currentDate = new Date();
  const sRatio = currentDate.getSeconds() / 60;
  const mRatio = (sRatio + currentDate.getMinutes()) / 60;
  const hRatio = (mRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, sRatio);
  setRotation(minuteHand, mRatio);
  setRotation(hourHand, hRatio);
}
function setRotation(ratio, rotationRatio) {
  ratio.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();
