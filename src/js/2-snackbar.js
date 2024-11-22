import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputDelay = document.querySelector("input[name='delay']");
const button = document.querySelector('button');

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
        resolve(`✅ Fulfilled promise in ${delay} ms`);
        iziToast.success({
          title: 'OK',
          message: '✅ Fulfilled promise in ${delay}ms',
        });
      } else {
        reject(`❌ Rejected promise in ${delay} ms`);
        iziToast.error({
          title: 'Error',
          message: '❌ Rejected promise in ${delay} ms',
        });
      }
    }, delay);
  });
}
// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };

// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
// 	   setTimeout(() => {
// 				if(shouldResolve) {
// 					resolve(value)
// 				} else {
// 					reject(value)
// 				}
// 			}, delay);
//   });
// };
// makePromise({ value: "A", delay: 1000 })
// 	.then(value => console.log(value)) // "A"
// 	.catch(error => console.log(error));
// makePromise({ value: "B", delay: 3000 })
// 	.then(value => console.log(value)) // "B"
// 	.catch(error => console.log(error));
// makePromise({ value: "C", delay: 2000, shouldResolve: false })
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error)); // "C"

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Registering promise callbacks
// promise
//   .then(value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch(error => {
//     console.log(error); // "Error! Error passed to reject function"
//   });
// // Registering promise callbacks
// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log('Promise settled')); // "Promise settled"

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });
// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };
// fetchUserFromServer('Mango')
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);
//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve('success value'); // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject('error'); // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };
// fetchUserFromServer('Mango')
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// new Promise(resolve => resolve("success value"))
// 	.then(value => console.log(value));
// 	.catch (error => console.log(error));

//   Promise.resolve("success value");
// 	.then(value => console.log(value));
// 	.catch (error => console.log(error));

//     Promise.reject("error");
// 	.then(value => console.log(value));
// 	.catch (error => console.log(error));

//     const makeGreeting = guestName => {
//   if (!guestName) {
//    return Promise.reject("Guest name must not be empty");
//   } else {
// 		return Promise.resolve(`Welcome ${guestName}`);
// 	}
// };
// makeGreeting("Mango")
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));

//   const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
// 	   setTimeout(() => {
// 				if(shouldResolve) {
// 					resolve(value)
// 				} else {
// 					reject(value)
// 				}
// 			}, delay);
//   });
// };
// makePromise({ value: "A", delay: 1000 })
// 	.then(value => console.log(value)) // "A"
// 	.catch(error => console.log(error));
// makePromise({ value: "B", delay: 3000 })
// 	.then(value => console.log(value)) // "B"
// 	.catch(error => console.log(error));
// makePromise({ value: "C", delay: 2000, shouldResolve: false })
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error)); // "C"

//     new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Fulfilled A');
//   }, 1000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Fulfilled B');
//   }, 3000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Rejected C');
//   }, 2000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error)); // "Rejected C"

//   iziToast.error({
//     title: 'Error',
//     message: 'Illegal operation',
//   });

//   iziToast.success({
//     title: 'OK',
//     message: 'Successfully inserted record!',
//   });
// iziToast.settings({
//     timeout: 10000,
//     resetOnHover: true,
//     icon: 'material-icons',
//     transitionIn: 'flipInX',
//     transitionOut: 'flipOutX',
//     onOpening: function(){
//         console.log('callback abriu!');
//     },
//     onClosing: function(){
//         console.log("callback fechou!");
//     }
// });
