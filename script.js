//var appWeather = function() {

  var $city = $('#city');
  var temp;
  var $cityWeather=$('#city-weather');
  
  var findCityWeather = function(data,city) {
    $cityWeather.empty();
    temp = Math.round(data.main.temp - 273);
        $('#city-weather').append("The current tempeture in " + city + " is " + temp)
  };

  var fetch = function (city) {
    var _url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d703871f861842b79c60988ccf3b17ec"
    $.ajax({
      method: "GET",
      url: _url,
      dataType: "json",
      success: function(data) {
        console.log(data);
        findCityWeather(data,city);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }

    }); 
  };
//};

//app = appWeather();


$('.search').on('click', function(e){
  e.preventDefault();
	$city.empty();
  var city = $city.val();
  fetch(city);

});


