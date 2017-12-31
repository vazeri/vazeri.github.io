        window.onload =function() {
	$(".buttom-btn").click(function(){
		$(".top-btn").addClass('top-btn-show');
		$(".contact-form-page").addClass('show-profile');
		$(this).addClass('buttom-btn-hide')
	});

	$(".top-btn").click(function(){
		$(".buttom-btn").removeClass('buttom-btn-hide');
		$(".contact-form-page").removeClass('show-profile');
	});
}