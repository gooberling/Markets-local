(function($) {

	// Store our function as a property of Drupal.behaviors.
	Drupal.behaviors.cmc_form_transition = {

		attach: function(context) {
			jQuery('html').once('cmc_form_transition', function() {
				//
				$('body.page-onboarding-uk').addClass('one');


				// on next click step 1
				$('#next-one').click(function() {
					var thisFieldset = 'one';
					var nextFieldset = 'risk';

					transtion(thisFieldset, nextFieldset);
				});

				// on next click risk warning
				$('#next-risk').click(function() {
					var thisFieldset = 'risk';
					var nextFieldset = 'two';

					transtion(thisFieldset, nextFieldset);
				});

				// on prev click risk warning
				$('#prev-risk').click(function() {
					var thisFieldset = 'risk';
					var nextFieldset = 'one';

					transtion(thisFieldset, nextFieldset);
				});

				// on next click step 2
				$('#next-two').click(function() {
					var thisFieldset = 'two';
					var nextFieldset = 'three';

					transtion(thisFieldset, nextFieldset);

				});

				// on prev click step 2
				$('#prev-two').click(function() {
					var thisFieldset = 'two';
					var nextFieldset = 'risk';

					transtion(thisFieldset, nextFieldset);

				});

				// on next click step 3
				$('#next-three').click(function() {
					var thisFieldset = 'three';
					var nextFieldset = 'four';

					transtion(thisFieldset, nextFieldset);

				});

				// on prev click step 3
				$('#prev-three').click(function() {
					var thisFieldset = 'three';
					var nextFieldset = 'two';

					transtion(thisFieldset, nextFieldset);

				});
				// on prev click step 
				$('#prev-four').click(function() {
					var thisFieldset = 'four';
					var nextFieldset = 'three';

					transtion(thisFieldset, nextFieldset);

				});

				// function that controls the animation

				function transtion(thisFieldset, nextFieldset) {
					// get hieght of next fieldset
					var fieldsetHeight = $('fieldset.' + nextFieldset).outerHeight();
					if (nextFieldset == 'risk') {
						scrollPos = 200;
					} else {
						scrollPos = 0;
					}
					//console.log(nextFieldset + '-' + scrollPos);
					// scroll to the top of the pge first
					$('body, html').animate({
						scrollTop: scrollPos
					}, 200, 'easeInCubic', function() {

						// fade out the current fieldset
						$('fieldset.' + thisFieldset).fadeOut('fast');
						// animate the white BG to height of next fieldset
						$('.bg').animate({
							height: fieldsetHeight
						}, 500, 'linear', function() {
							// for the risk section change the order of animation
							if (nextFieldset == 'two' || nextFieldset == 'one') {
								// fade in the steps
								$('.riskBg').hide();
								$('.steps').animate({
									opacity: 1
								}, 500, 'easeInOutCubic', function() {
									// fade in aro
									$('.steps li.' + nextFieldset + ' .aro').fadeIn('fast');
									// fade in the next fieldset
									$('fieldset.' + nextFieldset).fadeIn('slow');
									// remove the old body class name
									$('body').removeClass(thisFieldset);
									// add the next body class name
									$('body').addClass(nextFieldset);

									// remove the set height on the BG so that it can grow if other fieldsets are opened
									$('.bg').css('height', '');
								});

							} else {
								// fade in aro
								$('.steps li.' + nextFieldset + ' .aro').fadeIn('fast');

								// fade in the next fieldset
								$('fieldset.' + nextFieldset).fadeIn('slow');

								// remove the old body class name
								$('body').removeClass(thisFieldset);

								// add the next body class name
								$('body').addClass(nextFieldset);


								// remove the set height on the BG so that it can grow if other fieldsets are opened
								$(this).css('height', '');

								// if this is the first setp fade out the steps
								if (nextFieldset == 'risk') {
									$('.riskBg').fadeIn('fast');
									$('.steps').animate({
										opacity: 0.3
									}, 200, 'easeInOutCubic');
								}
							}
						});
					});

				}


				//
			});
		}
	};
}(jQuery));
