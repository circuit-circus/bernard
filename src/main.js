$(document).ready(function() {
	$(window).scroll(function() {
		/* LIGHTBAR */ 
		var scrollPos = $(window).scrollTop(),
			presTop = $('.product-presentation').offset().top,
			probTop = $('.problem-statement').offset().top,
			sectionDelta = (probTop - presTop) / 2,
			stepTwo = presTop + (sectionDelta / 4),
			stepThree = presTop + (sectionDelta / 4) * 2,
			stepFour = presTop + (sectionDelta / 4) * 3;

		if(scrollPos < presTop) {
			updateLightbar(1);
		}
		else if(scrollPos < stepTwo) {
			updateLightbar(2);
		}
		else if(scrollPos < stepThree) {
			updateLightbar(3);
		}
		else if(scrollPos < stepFour) {
			updateLightbar(4);
		}

		/* CREDIT CARD */
		var cardMax = probTop + 100,
			cardPx = cardMax - scrollPos,
			cardTrans = 'rotate(-100deg) translate(' + cardPx + 'px)';
		if(cardPx > 266) {
			$('.card-img').css({
				transform: cardTrans
			});
		}
		//console.log(cardTrans);
	});
});

function updateLightbar(newNumber) {
	var lightElem = $('.lightbar');
	for(var i = 0; i < 5; i++) {
		if(lightElem.hasClass('light-' + i)) {
			lightElem.removeClass('light-' + i);
		}
	}
	lightElem.addClass('light-' + newNumber);
}