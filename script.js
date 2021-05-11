let yourCity = prompt('Input your city:', 'London');

fetch('https://goweather.herokuapp.com/weather/' + yourCity)
  .then((response) => {
    if(response.ok){
      return response.json();
    }

    const error = document.querySelector('#error');
    error.textContent = 'City is not found';
  })
  .then((data) => {
    console.log(data);
    const city = document.querySelector('#city'),
      temperatureToday = document.querySelector('#temperatureToday'),
      windToday = document.querySelector('#windToday'),
      descriptionToday = document.querySelector('#descriptionToday'),
      temperatureTomorrow = document.querySelector('#temperatureTomorrow'),
      windTomorrow = document.querySelector('#windTomorrow'),
      temperatureDATomorrow = document.querySelector('#temperatureDATomorrow'),
      windDATomorrow = document.querySelector('#windDATomorrow');

    city.innerHTML = `${yourCity}`;

    temperatureToday.innerHTML = `Temperature: ${data.temperature}`;
    windToday.innerHTML = `Wind: ${data.wind}`;
    descriptionToday.innerHTML = `Description: ${data.description}`;
    
    temperatureTomorrow.innerHTML = `Temperature: ${data.forecast[0].temperature}`;
    windTomorrow.innerHTML = `Wind: ${data.forecast[0].wind}`;
    
    temperatureDATomorrow.innerHTML = `Temperature: ${data.forecast[1].temperature}`;
    windDATomorrow.innerHTML = `Wind: ${data.forecast[1].wind}`;
  });