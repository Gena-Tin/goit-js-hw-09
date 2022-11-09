import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const submitHandler = e => {
  e.preventDefault();

  const { elements :{ delay, step, amount } } = e.currentTarget;

  let delayData = +delay.value;
  const stepData = +step.value;
  const amountData = +amount.value;

  for(let i=1; i<=amountData; i++){
    createPromise(i, delayData)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayData += stepData;
  }
};

form.addEventListener("submit", submitHandler);
