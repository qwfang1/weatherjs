class Storage{
    constructor(){
        this.city;
        this.defualtCity = 'Auckland';
    }

    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defualtCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    setLocationData(city){
        localStorage.setItem('city', city);
    }
}