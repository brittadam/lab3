export default class Weather {
    constructor() {
      this.getLocation();
      this.lat;
      this.lng;
    }
  
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        this.gotLocation.bind(this), 
        this.errorLocation.bind(this)
        );
    }
  
    gotLocation(result){
      this.lat = result.coords.latitude;
      this.lng = result.coords.longitude;
      this.getWeather();
    }
  
    getWeather(){
      //https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely
      let url = `https://api.weatherbit.io/v2.0/current?lat=${this.lat}&lon=${this.lng}&key=4333c4c65d1541678d0abd6602ba6021&include=minutely?units=si`
      fetch(url)
      .then(response => {
        return response.json();
      }).then(data => {
          document.querySelector("#weather").innerHTML = data.data[0].temp;
         //let temp = data.data[0].app_temp;
      }).catch(err => {
        console.log(err);
      });
    };
  
    errorLocation(err){
      console.log(err);
    }
  }