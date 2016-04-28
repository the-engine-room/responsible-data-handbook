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
	});


	$('#smallmenuswitch, .mobile').hide();




});
console.log('here!');

$(window).bind('scroll', function () {
	if($(window).width()>850){
	    if ($(window).scrollTop() > 50)
	    {
	        $('#sidemenu').addClass('fixed');
	        $('.fixedtop').fadeIn('fast');
	    } else {
	        $('#sidemenu').removeClass('fixed');
	        $('.fixedtop').fadeOut('fast');

	    }

	    if ((window.innerHeight + window.scrollY + 520) >= document.body.offsetHeight){
				$('.postrow #sidemenu, .slidepage #sidemenu').fadeOut('fast');
				$('.fixedbottom').fadeOut('fast');

	    }else{
				$('.postrow #sidemenu, .slidepage #sidemenu').fadeIn('fast');
				$('.fixedbottom').fadeIn('fast');

	    }
	}else{
		if ($(window).scrollTop() > 200){
			  $('.fixedtop').fadeIn('fast');
			$('#smallmenuswitch, .mobile').fadeIn("slow");


		}else{
			$('#smallmenuswitch, .mobile').fadeOut("fast");
			$('.fixedtop').fadeOut('fast');


		}

		if ((window.innerHeight + window.scrollY + 1000) >= document.body.offsetHeight){
	    	$('.fixedbottom').fadeOut('fast');


		}else{

	    	$('.fixedbottom').fadeIn('fast');

		}

	}
});
