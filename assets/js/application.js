$(document).ready(function(){
	$('.post p strong').before("**").after("**");
	
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
	  $grid.isotope({ filter: filterValue }).css('overflow','hidden');
	});



	$('#menuswitch').click(function(e) {
		$(this).toggleClass('on');
		console.log("HEYYYYYY");
		$('#menu').toggleClass('mobile');
		return false;
	});

});