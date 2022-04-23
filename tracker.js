const findISSButton = document.querySelector('#fetchdata');
const result = document.querySelector('#result');
async function getData() {
  result.innerText = 'Tracking...';
  result2.innerText = '';
  try {
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const jsonResult = await res.json();
    result.innerText = JSON.stringify(`Lat: ${jsonResult.latitude}`, null, 2);
    result2.innerText = JSON.stringify(`Lon: ${jsonResult.longitude}`, null, 2);
  } catch (error) {
    console.log(error);
  }
}
findISSButton.addEventListener('click', getData);
