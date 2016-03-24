$(document).ready(function(){


	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});

	$grid.isotope({filter: '*'});


	$('.filter-group').on( 'click', 'li', function() {
	  $('.filter-group li').removeClass('active');
	  $(this).addClass('active')
	  var filterValue = $(this).attr('data-filter');
	  console.log(filterValue);
	  $grid.isotope({ filter: filterValue });
	});

});