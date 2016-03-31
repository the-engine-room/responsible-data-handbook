$(document).ready(function(){
	$('.post p strong').before("**").after("**");
	
	
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
	        $('.index,.download').addClass('dontshow');
	    } else {
	        $('#sidemenu').removeClass('fixed');
	       	$('.index,.download').removeClass('dontshow');

	    }

	    if ((window.innerHeight + window.scrollY + 500) >= document.body.offsetHeight){
	    	$('.postrow #sidemenu').removeClass('fixed');
	    	$('.postrow #sidemenu').addClass('gone');

	    }else{
	    	$('.postrow #sidemenu').removeClass('gone');

	    }
	}
});
