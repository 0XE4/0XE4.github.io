var images = ['0001.png', '0002.png', '0003.png', '0004.png', '0005.png'];
$('body').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});

var searchbox = document.getElementById('search');

//Uncomment line below to focus on serach on load

// $('#search').focus();
searchbox.onkeypress = function(e) {
	if (e.keyCode === 13) {
		search();
	}
}

function search() {
	var query = searchbox.value;
	window.location = 'https://google.co.uk/search?q=' + query;
}

function clear() {
	searchbox.val = null;
	searchbox.blur();
}