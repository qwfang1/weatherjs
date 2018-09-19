class UI{
    constructor(){
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.wind = document.getElementById("w-wind");
        this.visibility = document.getElementById("w-visibility");
        this.pressure = document.getElementById("w-pressure");
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp + '℃';
        const icon_url = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        this.icon.setAttribute("src", icon_url);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
        this.visibility.textContent = `Visibility: ${weather.visibility}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`
    }
}