/*
  Author:    Mysall
  Use:       Controls the page
  Date:      June 2014
*/

/* Create a function for shorter element calling */
var $ = function(elem){ return document.getElementById(elem); }

/* Set the url for the header image */
var headerImg  = 'i/top.png';

/* Add the header image to the page */
$('top').style.background += "url(" + headerImg + ")";


/* ------ HANDLE THE SEARCH ------ */


/* Create the html for the search bar */
var searchHtml = [
  '<form method="get" action="https://www.google.com/search">',
  '<input id="homeSearch" type="text" name="q" placeholder="Search" autofocus>',
  '</form>'
].join('');

/* Add the search bar to the page */
$('top').innerHTML += searchHtml;


/* ------ HANDLE THE BOXES ------ */


/* Array with links ["Title", "url"] */
var links = [
  ["/a/", "http://boards.4chan.org/a/"],
  ["/b/", "http://boards.4chan.org/b/"],
  ["/g/", "http://boards.4chan.org/g/"],
  ["/r9k/", "http://boards.4chan.org/r9k/"],
  ["/wg/", "http://boards.4chan.org/wg/"],
  ["Pomf", "http://pomf.se/"],
  ["YouTube", "https://www.youtube.com"],
  ["Translate", "https://translate.google.com/"],
  ["Dribbble", "https://www.dribbble.com"],
  ["VK", "http://vk.com/mysall"],
  ["Mail", "https://mail.cock.li"],
  ["Leddit", "http://www.reddit.com"],
  ["2ch", "http://2ch.hk"],
  ["Stack", "http://stackoverflow.com/"],
  ["Codrops", "http://tympanus.net/codrops/"],
];

for(var i = 0; i <= links.length - 1; ++i)
{
  /* Create the HTML for all the boxes */
  if(i % 2 === 0)
  {
    var boxClass = "light";
  }else
  {
    var boxClass = "red";
  }
  var boxHtml = [
    '<div class="linkBox ' + boxClass + '">',
    '<a href=' + links[i][1] + '>' + links[i][0] + '</a>',
    '</div>'
  ].join('');
  $('cont').innerHTML += boxHtml;
}
