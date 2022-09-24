const formRef = document.querySelector('.form');

let position = 1;

const onSuccess = (position, delay) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const onReject = (position, delay) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};

function createPromise(position, delay) {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      console.log(shouldResolve);

      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    });
  }, delay);
}

formRef.addEventListener('submit', function (event) {
  event.рreventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  console.log(delayValue, stepValue, amountValue);

  for (let position = 1; position <= amountValue; position += 1) {
    setTimeout(() => {
      console.log(position, delayValue, stepValue, amountValue);
      createPromise(position, delayValue + stepValue * position)
        .then(res => onSuccess(res.position, res.delay))
        .catch(error => onReject(error.position, error.delay));
    }, stepValue);
  }

  event.currentTarget.reset();
});
