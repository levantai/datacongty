 $(function(){
	 
 	$('.n1').click(function(){
 		$('body,html').animate({scrollTop:716},2000,"easeInElastic");
 		return false;

 	})

 	$('.n2').click(function(){
 		$('body,html').animate({scrollTop:$('.topgioithieu').offset().top},2000,"easeInExpo");
 		return false;

 	})
 	$('.n3').click(function(event) {
 		$('body,html').animate({scrollTop:$('#lienhe').offset().top},2000,"easeInOutQuint");
 		return false;
 	});



	 $(window).scroll(function(){
	 	vitrihientai = $('body,html').scrollTop();
	 	console.log(vitrihientai);

	 	if(vitrihientai > 400) {
	 		$('.navbar-fixed-top').addClass('tienhoa');
	 	}
	 	else if(vitrihientai < 400) {
	 		$('.navbar-fixed-top').removeClass('tienhoa');
	 	}

	 	/*if(vitrihientai	> 715) {
	 		$('.portfolio').addClass('bienra');
	 	}
	 	else if(vitrihientai < 715) {
	 		$('.portfolio').removeClass('bienra');
	 	}*/



	 })

	






})  
 