var json_url = "http://api.openweathermap.org/data/2.5/weather?q=Boston,ma&appid=6e131a2916d5d45d8367b72a4675be0a";
var city;
var temp_curr;
var temp_low;
var temp_high;
var description;
$.when(
	$.getJSON(json_url)
	).done( function(json_obj) {
		city = json_obj["name"];
		temp_curr = k_to_f(json_obj["main"]["temp"]);
		temp_low = k_to_f(json_obj["main"]["temp_min"]);
		temp_high = k_to_f(json_obj["main"]["temp_max"]);
		description = json_obj["weather"][0]["main"];

		insertWeatherInfo();
	}
);
function k_to_f(kelvin) {
	return ((9 / 5) * (kelvin - 273) + 32).toFixed(0);
}
function insertWeatherInfo() {
	//$("#city").append(city);
	$("#description").append(description);
	$("#temp_curr").prepend(temp_curr + "&deg;");
	$("#temp_low").append(temp_low + "&deg; /");
	$("#temp_high").append(temp_high + "&deg;");
}