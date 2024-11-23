import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconResolve from '../img/ok.png';
import iconReject from '..//img/error.png';

const form = document.querySelector('.form');
const inputDelay = document.querySelector("input[name='delay']");
const inputFulfilled = document.querySelector("input[value='fulfilled']");
const inputRejected = document.querySelector("input[value='rejected']");
const btn = document.querySelector('button');

iziToast.settings({
  position: 'topRight',
});
form.classList.add('container');
inputDelay.classList.add('input-delay');
inputFulfilled.classList.add('input-fulfilled');
inputRejected.classList.add('input-rejected');
btn.classList.add('create-btn');

const labelDelay = form.firstElementChild;
labelDelay.classList.add('delay-label');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  console.log(delay);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const selectedBtnFulfilled = document.querySelector(
        "input[value='fulfilled']:checked"
      );
      const selectedBtnRej = document.querySelector(
        "input[value='rejected']:checked"
      );
      if (selectedBtnFulfilled) {
        resolve(`Fulfilled promise in ${delay} ms`);
      } else {
        reject(`Rejected promise in ${delay} ms`);
      }
    }, delay);
  });
  promise
    .then(result => {
      iziToast.success({
        title: 'OK',
        message: `${result}`,
        titleColor: '#fff',
        messageColor: '#fff',
        imageWidth: 24,
        iconColor: '#fff',
        iconUrl: iconResolve,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `${error}`,
        iconUrl: iconReject,
        iconColor: '#fff',
        imageWidth: 24,
        messageColor: '#fff',
        titleColor: '#fff',
      });
    });
  form.res();
}
