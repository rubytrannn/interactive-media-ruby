const mymap = L.map('issMap').setView([0, 0], 1);
const marker = L.marker([0, 0]).addTo(mymap);


const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;

    // L.marker([latitude, longitude]).addTo(mymap);
    marker.setLatLng([latitude, longitude]);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = latitude;

    console.log(latitude);
    console.log(longitude);
}

getISS();
