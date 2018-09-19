// Init weather object
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI;
document.getElementById("w-change-btn").addEventListener('click',(e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    storage.setLocationData(city);
    updateWeather();
    $('#locModal').modal('hide');
});
document.addEventListener('DOMContentLoaded',updateWeather);

function updateWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
   
    })
    .catch(err => console.log(err));
}
