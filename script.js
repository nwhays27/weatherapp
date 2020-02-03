var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var description = document.querySelector('.description')
var temp = document.querySelector('.temp')

button.addEventListener('click', function() {

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=210c3c7bad5a6c9c82c3686871ddecf6')
  .then(response => response.json())
  .then(data => console.log(data))

  .catch(err => alert("Invalid city name!"))
})

