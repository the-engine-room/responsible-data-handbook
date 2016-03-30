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
		$('#menu').toggleClass('mobile');
		return false;
	});




});

$(window).bind('scroll', function () {
	if($(window).width()>850){
	    if ($(window).scrollTop() > 50)
	    {
	        $('#sidemenu').addClass('fixed');
	    } else {
	        $('#sidemenu').removeClass('fixed');
	    }

	    if ((window.innerHeight + window.scrollY + 500) >= document.body.offsetHeight){
	    	$('#sidemenu').removeClass('fixed');
	    	$('#sidemenu').addClass('gone');
	    }else{
	    	$('#sidemenu').removeClass('gone');
	    }
	}
});
