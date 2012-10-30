(function($) {

	// Store our function as a property of Drupal.behaviors.
	Drupal.behaviors.cmc_form_script = {

		attach: function(context) {
			jQuery('html').once('cmc_form_script', function() {

				//-----------------------------------------------------------------------------------------------
				// show hide descriptions
				//-----------------------------------------------------------------------------------------------
				$('input').focus(function() {
					$('aside').hide();
					$(this).siblings("aside").fadeIn(1000);
				});
				$('select').focus(function() {
					$('aside').hide();
					$(this).siblings("aside").fadeIn('slow');
				});

				// end script
				
			});
		}
	};
}(jQuery));
