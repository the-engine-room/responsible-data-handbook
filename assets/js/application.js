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
