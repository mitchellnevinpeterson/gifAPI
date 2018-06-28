function getGifs() {
$("#divRow").empty()
$("#footer").empty()
var userInput = document.getElementById("userInput").value
var userNumber = document.getElementById("userNumber").value
if(userNumber === ""){
	alert("Please enter the number of Gifs you want to search for!")
	return userInput = document.getElementById("userInput").value = ""
	return userNumber = document.getElementById("userNumber").value = ""
}
$.ajax({
	// you can change the q= to a different name to get different gifs
	url: 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=joqrfJhFL6OUq0wFalto5G15rCf9uUyS&limit=' + userNumber + "'",
	dataType: "json",
	success: function(data) {
		console.log("Success", data)
		for(var i = 0; i < data.data.length; i++) {
			// var img = document.createElement("img")
			// document.body.appendChild(img)
			// img.src = data.data[i].images.original.url 
			// Or I can use the += on the innerHTML
			document.getElementById("divRow").innerHTML += "<div class='col-6 col-md-4'><a href='" + data.data[i].bitly_gif_url + "'><h5 class='text-center mt-3'>" + data.data[i].title.toUpperCase() + "</h5><img class='img-fluid p-3 d-block mx-auto' src='" + data.data[i].images.original.url + "'></a></div>"
		}
		if(userNumber > 3) {
		document.getElementById("footer").innerHTML += "<div class='d-block mx-auto text-center m-5'><a href='#'><h3>Back to search</h3></a></div>"
		}
	},
	error: function() {
		console.log("API call FAILED")
	},
	type: 'GET'
})
}
function clearGifs() {
	$("#divRow").empty()
	$("#footer").empty()
	var userInput = document.getElementById("userInput").value = ""
	var userNumber = document.getElementById("userNumber").value = ""
}

// Triggering the function tip() anytime the enter key is pressed
addEventListener("keydown", function (enter){
	if (enter.keyCode === 13) {
		enter.preventDefault()
		getGifs()
	}
})