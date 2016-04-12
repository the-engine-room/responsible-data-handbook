$(document).ready(function(){
	/* add additional styling on bold */
	$('.post p strong').before("**").after("**");

	/* add target = _blank attr to all links in markdown posts */
	$('.post-content a').attr("target","_blank");

	
	$('#menuswitch').click(function(e) {
		$(this).toggleClass('on');
		$('#menu').toggleClass('mobile');
		return false;
	});

	$('#smallmenuswitch').click(function(e){
		$(this).toggleClass('on');
		$('#menusmall').toggleClass('mobile');
		return false;
	})


	$('#smallmenuswitch, .mobile').hide();




});


$(window).bind('scroll', function () {
	if($(window).width()>850){
	    if ($(window).scrollTop() > 50)
	    {
	        $('#sidemenu').addClass('fixed');
	    } else {
	        $('#sidemenu').removeClass('fixed');

	    }

	    if ((window.innerHeight + window.scrollY + 520) >= document.body.offsetHeight){
	    	$('.postrow #sidemenu').removeClass('fixed');
	    	$('.postrow #sidemenu').addClass('gone');

	    }else{
	    	$('.postrow #sidemenu').removeClass('gone');

	    }
	}else{
		if ($(window).scrollTop() > 200){
		
			$('#smallmenuswitch, .mobile').fadeIn("slow");


		}else{
			$('#smallmenuswitch, .mobile').fadeOut("fast");

		}

	}
});

