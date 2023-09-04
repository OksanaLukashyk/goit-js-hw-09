import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  let delayVal = Number(delay.value);
  let stepVal = Number(step.value);
  let amountVal = Number(amount.value);

  for (let i = 1; i <= amountVal; i += 1) {
    delayVal += stepVal;
    createPromise(i, delayVal)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          clickToClose: true,
          timeout: 5000,
          cssAnimationStyle: 'zoom',
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          clickToClose: true,
          timeout: 5000,
          cssAnimationStyle: 'zoom',
        });
      });
  }
  evt.currentTarget.reset();
}

function createPromise(position, delay) {
  const promiseObj = { position, delay };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(promiseObj);
      } else {
        reject(promiseObj);
      }
    }, delay);
  });
}
