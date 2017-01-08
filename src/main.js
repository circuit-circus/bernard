$(document).ready(function() {
	$(window).scroll(function() {
		/* LIGHTBAR */ 
		var scrollPos = $(window).scrollTop(),
			presTop = $('.product-presentation').offset().top - 100,
			probTop = $('.problem-statement').offset().top,
			sectionDelta = (probTop - presTop) / 2,
			stepTwo = presTop + (sectionDelta / 4),
			stepThree = presTop + (sectionDelta / 4) * 2,
			stepFour = presTop + (sectionDelta / 4) * 3;

		if(scrollPos < presTop) {
			//updateLightbar(1);
		}
		else if(scrollPos < stepTwo) {
			//updateLightbar(2);
		}
		else if(scrollPos < stepThree) {
			//updateLightbar(3);
		}
		else if(scrollPos < stepFour) {
			//updateLightbar(4);
		}

		/* CREDIT CARD */
		var cardMax = probTop + 100,
			cardPx = cardMax - scrollPos,
			cardTrans = 'rotate(-100deg) translate(' + cardPx + 'px)';
		if(cardPx > 266) {
			/*$('.card-img').css({
				transform: cardTrans
			});*/
		}

		/* HOW IT WORKS */ 
		if(scrollPos > probTop - 50) {
			$('.problem-statement').addClass('animated');
		}

		/* HOW IT WORKS */ 
		var howTop = $('.how-it-works').offset().top;
		if(scrollPos > howTop - 50) {
			$('.how-it-works').addClass('animated');
		}

		var newBgPos = mapValue(scrollPos, howTop, probTop, 0, 50);
		$('.product-pres-test').css('background-position-y', newBgPos + "%");
		
		/* THE DESIGN */
		var designTop = $('.the-design').offset().top;

		if(scrollPos > designTop - 50) {
			$('.the-design').addClass('animated');
		}
	}); // .scroll end


	/* SIGNUP SHEET */ 
	$('.signup').click(function(e) {
		toggleSignup(true);
		e.preventDefault();
	});

	$('.contact').click(function(e) {
		toggleContact(true);
		e.preventDefault();
	});

	$('.signup-sheet .close').click(function(e) {
		toggleSignup(false);
		e.preventDefault();
	});

	$('.contact-sheet .close').click(function(e) {
		toggleContact(false);
		e.preventDefault();
	});

	$('.terms').click(function(e) {
		toggleTerms(true);
		e.preventDefault();
	});

	$('.terms-sheet .close').click(function(e) {
		toggleTerms(false);
		e.preventDefault();
	});

	$(window).keyup(function(e) {
		// If clicked esc
		if(e.keyCode === 27) {
			if($('.signup-sheet').hasClass('visible')) {
				toggleSignup(false);	
			}
			if($('.contact-sheet').hasClass('visible')) {
				toggleContact(false);	
			}
			if($('.terms-sheet').hasClass('visible')) {
				toggleTerms(false);	
			}
		}
	});

	$('.signup-sheet form').submit(function(e) {
		thankYouForm();
		e.preventDefault();
	});
});

function mapValue(n, start1, stop1, start2, stop2) {
	return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};

function thankYouForm() {
	$('.signup-sheet form').addClass('sent');
	$('.signup-sheet input[type="submit"').val('Thanks!').attr('disabled', 'disabled');
	$('.signup-sheet input[type="email"').val('We\'ll get in touch soon.').attr('disabled', 'disabled');
}

function updateLightbar(newNumber) {
	var lightElem = $('.lightbar');
	for(var i = 0; i < 5; i++) {
		if(lightElem.hasClass('light-' + i)) {
			lightElem.removeClass('light-' + i);
		}
	}
	lightElem.addClass('light-' + newNumber);
}

function toggleSignup(shouldShow) {
	if(shouldShow) {
		lockScroll();
		$('.signup-sheet').addClass('visible');
	}
	else {
		unlockScroll();
		$('.signup-sheet').removeClass('visible');
	}
}

function toggleContact(shouldShow) {
	if(shouldShow) {
		lockScroll();
		$('.contact-sheet').addClass('visible');
	}
	else {
		unlockScroll();
		$('.contact-sheet').removeClass('visible');
	}
}

function toggleTerms(shouldShow) {
	if(shouldShow) {
		lockScroll();
		$('.terms-sheet').addClass('visible');
	}
	else {
		unlockScroll();
		$('.terms-sheet').removeClass('visible');
	}
}

var scrollPosition = [0, 0];
function lockScroll() {
	// lock scroll position, but retain settings for later
	scrollPosition = [
	  self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
	  self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
	];
	var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
	html.data('scroll-position', scrollPosition);
	html.data('previous-overflow', html.css('overflow'));
	html.css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

function unlockScroll() {
	// un-lock scroll position
	var html = jQuery('html');
	var scrollPosition = html.data('scroll-position');
	html.css('overflow', html.data('previous-overflow'));
	window.scrollTo(scrollPosition[0], scrollPosition[1])
}