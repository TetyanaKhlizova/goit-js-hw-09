
const formField = document.querySelector('.form');

formField.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();

  let delay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);

  for (let position = 1; position <= amount; position ++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled  promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }

  formField.reset();
}

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