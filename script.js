var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var description = document.querySelector('.description')
var temp = document.querySelector('.temp')
var wind = document.querySelector('.wind')
var humidity = document.querySelector('.humidity')



  button.addEventListener('click', function() {
  //API Call. Find the value of what the user input into the search bar
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=210c3c7bad5a6c9c82c3686871ddecf6')
  

  .then(response => response.json())
  //Created variables to grab the data
  .then(data => {
    var nameValue = data['name'];
    var tempValue =data['main']['temp'];
    var descriptionValue = data['weather'][0]['description'];
    var windValue = data['wind']['speed'];
    var humidityValue = data['main']['humidity'];

  //Converting the data to text/html
    
    name.innerHTML = nameValue;
    temp.innerHTML = "Temperature: " + (1.8*(tempValue-273)+32) + " F" ;
    description.innerHTML ="Current Conditions: " +  descriptionValue;
    wind.innerHTML = "Wind Speed: " + windValue + "mph";
    humidity.innerHTML = "Humidity: " + humidityValue + "%";
  
    console.log(data)
  })


  .catch(err => alert("Invalid city name!"))
});
