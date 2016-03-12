function appear(){
	sitesdiv = document.getElementById("sites");
	sitesdiv.style.display="block";
	searchdiv = document.getElementById("search");
	searchdiv.style.display="block";
	
	//only do for page 0 because other pages are hidden by default
	for(var i=0;i<sitesdiv.childNodes[0].childNodes.length;i++){
		sitesdiv.childNodes[0].childNodes[i].style.display="inline-block";
	};
}

var config =
{
    "sites":
    [
        { "url": "http://gmail.com/",                                "text": "gm" },
        { "url": "http://youtube.com/",                              "text": "yt" },
        { "url": "http://boards.4chan.org/g/",                       "text": "/g/"},
        { "url": "https://news.ycombinator.com/",         			 "text": "hn" },
        { "url": "http://facebook.com/",                             "text": "fb" },
        { "url": "http://github.com/",                               "text": "git"}
    ],
    "search":
    {
        "url"  : "https://duckduckgo.com/",
        "name" : "Search...",
        "query": "q"
    }
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        var p = i / 12, //used for navigation
        site = d.createElement("a");
        site.href = config.sites[i].url;
        site.textContent = config.sites[i].text;

		//navigation stuff
        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }

    var form = d.querySelector("#search form"), text = form.querySelector("input");
    form.action      = config.search.url;
    text.name        = config.search.query;
    text.placeholder = config.search.name;
});