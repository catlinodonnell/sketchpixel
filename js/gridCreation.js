/*******************************
*
* Initialize a 16x16 grid, which has the default 'highlight' style class
* Listens for clicks of list buttons to execute further grid changes
*
*******************************/


$(document).ready(function() {	
	createGrid(16);

	$('button').click(clearGrid);
	$('.initial').click(function() {
		createGrid(16);
	});
	$('.size').click(sizeGrid);
	$('.random').click(randomColor);

});

/*******************************
*
* Creates an n x n grid after wiping existing grid
* Adds default 'highlight' style class
* 
*******************************/

function createGrid(n) { 
	var squareSize = $('.container').width() / n - 2;
	var gridHTML = [];

	$('.wrap').empty();
	for (var i = 0; i < n*n ; i++) {
		gridHTML.push('<div class="square default" style="width:'+squareSize+'px; height:'+squareSize+'px;"></div>');
	}
	$('.wrap').append(gridHTML.join(''));
	highlightHandler();
};

/*******************************
*
* Clear grid of existing alterations
* Existing highlight style remains constant
*
*******************************/

function clearGrid() {
	$('div.square').removeClass('highlight default');
	$('div.square').addClass('default');
	$('div.square').css({'background-color': '', 'border': ''});
};

/*******************************
*
* Prompt for and proceed to create a grid of n x n size
*
*******************************/

function sizeGrid() {
	var size = prompt("Grid Size?");

	createGrid(size);
};

/*******************************
*
* Instantiates default 'highlight' style class
*
*******************************/

function highlightHandler() {
	$('div.square').mouseenter(function() { 
		$(this).addClass('highlight');
	});
};

/*******************************
*
* Creates a floored random for easy rgb hex setting within randomColor function
*
*******************************/

function rand() {
	return(Math.floor(Math.random() * 256));
};

/*******************************
*
* Set grid highlights to become random colors rather than default 'highlight' style class
*
*******************************/

function randomColor() {
	$('div.square').mouseenter(function() {
		$(this).css({
			'background-color': 'rgb('+rand()+','+rand()+','+rand()+')',
			'border': '1px solid rgb('+rand()+','+rand()+','+rand()+')'
		});
	});
};