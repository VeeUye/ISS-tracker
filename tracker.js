const findISSButton = document.querySelector('#fetchdata');
const result = document.querySelector('#result');
async function getData() {
  result.innerText = 'Tracking...';
  result2.innerText = '';
  try {
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const jsonResult = await res.json();
    const str1 = JSON.stringify(`Latitude ${jsonResult.latitude}`, null, 2);
    const str2 = JSON.stringify(`Longitude ${jsonResult.longitude}`, null, 2);
    result.innerText = str1;
    result2.innerText = str2;
  } catch (error) {
    console.log(error);
  }
}
findISSButton.addEventListener('click', getData);
