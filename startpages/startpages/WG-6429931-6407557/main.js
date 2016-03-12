var shiftDown = false;

function setDate($)
{
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	d = new Date(),
	currentDate = days[d.getDay()] +' '+ d.getDate() +' '+ months[d.getMonth()], 
	mins = (d.getMinutes() > 9) ? d.getMinutes() : '0' + d.getMinutes(),
	currentTime = d.getHours() +':'+ mins,
	previousTime = $('#timeArea .time .timeInner').html();
	if (currentTime != previousTime){
		$('#timeArea .time .timeInner').html(currentTime);
		$('#timeArea .time .date').html(currentDate);
	}

	setTimeout(function(){
		setDate($);
	}, 1000);
}

function search(query, engine)
{
	query = query.replace(/ /g, '+', query);
	switch (engine)
	{
		case 'google':
		default:
			var url = 'https://www.google.co.uk/search?q=' + query;
		break;
		case 'youtube':
			var url = 'https://www.youtube.com/results?search_query=' + query;
		break;
		case 'tpb':
			var url = 'https://piratehole.com/search/' + query + '/0/99/0';
		break;
		case 'kickass':
			var url = 'http://kickasstorrent.proxyindex.co/usearch/' + query + '/';
		break;
		case 'duck':
			var url = 'https://duckduckgo.com/?q=' + query;
		break;
		case 'wa':
			var url = 'http://www.wolframalpha.com/input/?i=' + query;
		break;
		case 'wiki':
			var url = 'http://en.wikipedia.org/w/index.php?search=' + query;
		break;
		case 'imdb':
			var url = 'http://www.imdb.com/find?q=' + query + '&s=tt';
		break;
	}
	
	if (!shiftDown){
		window.location.replace(url);
	} else {
		$('<a>').attr('href', url).attr('target', '_blank')[0].click();
	}
}

$(function()
{
   setDate($);
   
   $(window).keydown(function(e) {
	  if (e.keyCode == 72){
		$('.hideable').toggleClass('hide');
	  }
	  if (e.keyCode == 16){
		shiftDown = true;
	  }
	});
	
	$(window).keyup(function(e) {
	  if (e.keyCode == 16){
		shiftDown = false;
	  }
	});
	
	$('#searchForm input, #searchForm select').keydown(function(e) {
	  if (e.keyCode == 13){
		e.preventDefault();
		var query = $('#searchForm input').val();
		var engine = $('#searchForm select option:selected').val();
		search(query, engine);
	  }
	});
});