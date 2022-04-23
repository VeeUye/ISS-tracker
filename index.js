// import fetch from 'node-fetch';
// const fetch = require('node-fetch');

const findISSButton = document.querySelector('#fetchdata');
const result = document.querySelector('#result');
async function getData() {
  result.innerText = 'Tracking...';
  try {
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const jsonResult = await res.json();
    result.innerText = JSON.stringify(jsonResult, null, 2);
  } catch (error) {
    console.log(error);
  }
}
findISSButton.addEventListener('click', getData);

// const buttonFetch = {
//   document.querySelector('button').addEventListener('click', async function() {
//   await fetch('https://api.wheretheiss.at/v1/satellites/25544')
//     // const data = response.json()
//     .then(res => {
//       res.json();
//     })
//     .then(myContent => {
//       document.querySelector('par').innerHTML = myContent;

//       }

//     )}

// console.log(data);

// let title = '';
// if (typeof document !== 'undefined') {
//   title = document.title;
// }
// console.log(title); // '' if in a Node.js environment

// async function testFetch() {
//   const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
//   const data = await response.json();
//   console.log(data);
// });

// testFetch();
