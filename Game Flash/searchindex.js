// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("Game_Flash-Online.html", "Game Flash - Vipro8ASz", "game flash vipro8asz angry birdsbattle cityben power splashblock breaker panicblock breakerbomb it candy crushcaro tic tac toecombat tournament legends stick manconcussion mandooms day mandouble war easy caroescaping theprison manfighters ram page manfire boy and water girl fleeing thecomplex mangold minerinfil trating the air ship manmetal slug slugms pac manrage manretro bomberman songoku stealing diamond manstones of thanostroll face quest troll sportstroll tv showstroll videotroll youtubevalor manwpn fire man ", "");
   return this;
}
