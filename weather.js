class Weather {
    constructor(city){
        this.apiKey = 'e71313a529bfb4d069f1af65cd8d17e3';
        this.city = city;
        //this.state = state;
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city){
        this.city = city;
    }
}