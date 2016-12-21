
// To execute the code, inject it on the iplayer homepage or copy the function f2() and execute it with f2();

// To map the function to the onload event (so we wait for the page to be loaded to execute it)
window.onload = f1;

// Static method to change the first tile
function f1(){
	document.querySelector('#main > div.b-g-p > div.iplayer-stream.grid.grid--with-gutters > ol > li:nth-child(1) > div:nth-child(2) > ol > li > div > ol > li.grid__item.one-whole.g4--one-third > a > div.thumbnail-item__img > div.rs-image > picture > source:nth-child(1)').srcset = 'http://ichef-1.bbci.co.uk/news/660/cpsprodpb/17F03/production/_92215089_cheryl-nspccpa.jpg';
	document.querySelector('#main > div.b-g-p > div.iplayer-stream.grid.grid--with-gutters > ol > li:nth-child(1) > div:nth-child(2) > ol > li > div > ol > li.grid__item.one-whole.g4--one-third > a > div.thumbnail-item__desc > div > strong').innerText = 'New Category';
	document.querySelector('#main > div.b-g-p > div.iplayer-stream.grid.grid--with-gutters > ol > li:nth-child(1) > div:nth-child(2) > ol > li > div > ol > li.grid__item.one-whole.g4--one-third > a > div.thumbnail-item__desc > h3 > strong').innerText = 'New Brand';
	document.querySelector('#main > div.b-g-p > div.iplayer-stream.grid.grid--with-gutters > ol > li:nth-child(1) > div:nth-child(2) > ol > li > div > ol > li.grid__item.one-whole.g4--one-third > a > div.thumbnail-item__desc > p').innerText = 'New Episode';
};


function f2(){

	// Could be an array to check instead of one image (tile)
	
	// For variant 1
	// Being human series
	var tile = "p01l69yl.jpg"
	var newTile = 'http://i2.mirror.co.uk/incoming/article8083758.ece/ALTERNATES/s1200/Being-Human-cast1.jpg';
	
	// For variant 2 (comment the 2 lines above and uncomment the 2 below)
	// Cheryl
	//var tile = "p04jq99p.jpg"
	//var newTile = 'http://ichef-1.bbci.co.uk/news/660/cpsprodpb/17F03/production/_92215089_cheryl-nspccpa.jpg';
	
	// List all the tiles on the page
	var tiles = document.querySelectorAll('.rs-image picture source');

	// Run through all the tiles so we can find the matching one (dynamic, always work if the tile is moved)
	for(var i=0; i<tiles.length; i++){
		// Check that we found the matching tile
		if(tiles[i].srcset.indexOf(tile) +1){
			// We replace the old image with the new one
			tiles[i].srcset = newTile;
			
			// V1
			// We update from the current element the Category, brand and episode
			// Try catch will avoid any errors in the console as elements can be duplicated on the page or hidden
			try{
				tiles[i].parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0].innerText = "New Category";
				tiles[i].parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].innerText = "New Brand";
				tiles[i].parentNode.parentNode.parentNode.parentNode.children[0].children[2].innerText = "New Episode";
			}
			catch(err){
			 // Do nothing
			};
			
			// V2 (Cheryl only)
			// This version 2 go back to the parent not and take all the HTML, we then replace the category, brand and episode
			// according to the name it has (will only work on the tile it's replacing but can be copied or use in a function later)
			/*
			try{
				var newHTML = tiles[i].parentNode.parentNode.parentNode.parentNode.innerHTML
				.replace('History', 'New Category')
				.replace('Who Do You Think You Are?','New Brand')
				.replace('Cheryl traces her family roots','New Episode');
				tiles[i].parentNode.parentNode.parentNode.parentNode.innerHTML = newHTML;
			}
			catch(err){
				// Do nothing
			};*/
		}
	}
};














