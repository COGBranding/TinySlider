(function( $ ) {
    "use strict";

	//function to enable the homepage slider
	jQuery(function() {
		tns({
			container: ".homepage-quotes-slider",
			autoHeight: true,
			items: 1,
			swipeAngle: false,
			speed: 400,
			nav: false,
			mouseDrag: true,
			prevButton: '#prevslider', 
			nextButton: '#nextslider', 
		  })
	});


	//replace the homepage slider buttons with arrows
	jQuery(function() {
		let x = $('#nextslider');
		x.html('<i class="fas fa-long-arrow-alt-right"></i>');

		let y = $('#prevslider');
		y.html('<i class="fas fa-long-arrow-alt-left"></i>');
	})
 
}(jQuery));
