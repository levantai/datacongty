 $(function(){
 	$('.top1 a.btn.btn-default').click(function(event) {
 		$('body,html').animate({scrollTop:$('.top3').offset().top})
 		return false;
 	});

 	

 	$('.n2').click(function(event) {
 		$('body,html').animate({scrollTop:$('.top4').offset().top})
 		$('.menuphai').removeClass('ra');
 		return false;
 	});

 	$('.n1').click(function(event) {
 		$('body,html').animate({scrollTop:0})
 		$('.menuphai').removeClass('ra');
 		return false;
 	});

 	$('.n3').click(function(event) {
 		$('body,html').animate({scrollTop:$('.top6').offset().top})
 		$('.menuphai').removeClass('ra');
 		return false;
 	});

 	$('.n4').click(function(event) {
 		$('body,html').animate({scrollTop:$('.top7').offset().top})
 		$('.menuphai').removeClass('ra');
 		return false;
 	});


 	var docao = $(window).height();
 	$('.top1').css({'height':docao})
 	$(window).resize (function(){
 		var docao = $(window).height();
 		$('.top1').css({height:docao})

 	});

 	$('.nutmenu').click(function(){
 		$('.menuphai').addClass('ra');
 			return false;
 	})

 	$('.tat').click(function() {
 		$('.menuphai').removeClass('ra');
 		return false;
 	})

})  
	 
    