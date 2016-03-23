$(document).ready(function(){


	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});

	$grid.isotope({filter: '*'});



	$('.filter-group').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  console.log(filterValue);
	  $grid.isotope({ filter: filterValue });
	});

});