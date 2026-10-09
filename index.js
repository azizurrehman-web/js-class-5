function getweather() {
  let city = document.getElementById("city").value;

  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=a089002a927b454189b102948262909&q=${city}&aqi=yes`,
    )

    .then((response) => {
    let data = response.data;
      document.getElementById("result").innerHTML = `
    <h2>Today Weather Information</h2>

    <h3>City: ${response.data.location.name}</h3>

    <h3>Province/Region: ${response.data.location.region}</h3>

    <h3>Country: ${response.data.location.country}</h3>

    <h3>Temperature: ${response.data.current.temp_c} °C</h3>

    <h3>Weather Condition: ${response.data.current.condition.text}</h3>

    <h3>Wind Speed: ${response.data.current.wind_kph} km/h</h3>

    <h3>Humidity: ${response.data.current.humidity}%</h3>`;
    })
    .catch((error) => {
      console.error(error);
    });
}
