$(document).ready(()=>{



$('#weather-form').submit((event)=>{
	event.preventDefault()
	console.log("user submitted the form")
	var zipCode = $('#zip-code').val();
	console.log(zipCode)

	var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=49b2b518730f65cb59f4980b0561197a`;
	console.log(weatherUrl)
})


})