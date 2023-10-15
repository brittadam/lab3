class App {
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
    let url = `https://api.weatherbit.io/v2.0/current?lat=${this.lat}&lon=${this.lng}&key=9117630991164d73894b20e2d041d492&include=minutely`
    fetch(url).then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      console.log(data);
      
    }).catch(err => {
      console.log(err);
    });
  };

  errorLocation(err){
    console.log(err);
  }
}

let app = new App();
