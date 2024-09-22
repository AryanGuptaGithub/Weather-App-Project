const apiKey = "6c61220dd48868fe371ddd7fa6e70a3f";
let cityName = "";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

let input = document.querySelector("#inputField");

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", () => {
  cityName = input.value;
  
  checkWeather(cityName);
});

async function checkWeather(cityName) {
  try {
    const response = await fetch( apiURL + `&q=${cityName}` + `&appid=${apiKey}`
    );
    var data = await response.json();
    console.log(data);
     if(data.cod === '404'){
      document.getElementById('errorMsg').innerText = data.message + "!";
       document.getElementById('messageAPI').innerText = 'Please Enter a Valid Name.'
      
      
     }
    let city = (document.querySelector(".city").innerHTML = data.name);
    //  data.name;
    let temp = (document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c");

    let humidity = (document.querySelector(".humidity").innerHTML =
      data.main.humidity + "%");

    let wind = (document.querySelector(".wind").innerHTML =
      data.wind.speed + " km/h");

    const weatherImages = document.getElementById("weatherImages");

    const weatherStatus = data.weather[0].main;
    if (weatherStatus === "Cloud") {
      weatherImages.src = "images/clouds.png";
    } else if (weatherStatus === "Mist") {
      weatherImages.src = "images/mist.png";
    } else if (weatherStatus === "Clear") {
      weatherImages.src = "images/clear.png";
    } else if (weatherStatus === "Drizzle") {
      weatherImages.src = "images/drizzle.png";
    } else if (weatherStatus === "Snow") {
      weatherImages.src = "images/snow.png";
    } else if (weatherStatus === "Rain") {
    weatherImages.src = "images/rain.png";
    }

     document.querySelector('.weather').style.display = 'block';

  } catch (err) {
    console.log(err);
  }
}
