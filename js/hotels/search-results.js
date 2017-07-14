var search = {
	init: function() {
		search.scripts();
		search.binds();
	},
	scripts: function() {
		f.getScript(f.base.jsp + 'nouislider.js', function() {
			f.getScript(f.base.jsp + 'wnumb.js', function() {
				var priceRangeSlider = document.getElementById('price-range');
				var priceMax = document.getElementById('price-high-value');

				noUiSlider.create(priceRangeSlider, {
					start: parseFloat(priceMax.innerText.replace(/,/g, '')),
					connect: [true, false],
					range: {
					  'min': 530,
					  'max': 2000
					},
					format: wNumb({
						decimals: 0,
						thousand: ','
					})
				});

				priceRangeSlider.noUiSlider.on('update', function ( values, handle ) {
					priceMax.innerHTML = values[handle];
					document.getElementById("priceValue").value = parseFloat(values[handle].replace(/,/g, ''));
				});

				var starRatingSlider = document.getElementById('star-rating');
				var starMax = document.getElementById('star-rating-value');

				noUiSlider.create(starRatingSlider, {
					start: parseFloat(starMax.innerText),
					connect: [true, false],
					range: {
					  'min': 2.0,
					  'max': 5.0
					},
					format: wNumb({
						decimals: 1,
					})
				});

				starRatingSlider.noUiSlider.on('update', function ( values, handle ) {
					starMax.innerHTML = values[handle];
					document.getElementById("starValue").value = parseFloat(values[handle].replace(/,/g, ''));
				});

				var tripAdvisorSlider = document.getElementById('tripadvisor-rating');
				var tripAdvisorMax = document.getElementById('tripadvisor-rating-value');

				noUiSlider.create(tripAdvisorSlider, {
					start: parseFloat(tripAdvisorMax.innerText),
					connect: [true, false],
					range: {
					  'min': 2.5,
					  'max': 5.0
					},
					format: wNumb({
						decimals: 1,
					})
				});

				tripAdvisorSlider.noUiSlider.on('update', function ( values, handle ) {
					tripAdvisorMax.innerHTML = values[handle];
					document.getElementById("tripAdvisorValue").value = parseFloat(values[handle].replace(/,/g, ''));
				});

				var mobilePriceRangeSlider = document.getElementById('mobile-price-range');
				var mobilePriceMax = document.getElementById('mobile-price-high-value');

				noUiSlider.create(mobilePriceRangeSlider, {
					start: parseFloat(mobilePriceMax.innerText.replace(/,/g, '')),
					connect: [true, false],
					range: {
					  'min': 530,
					  'max': 2000
					},
					format: wNumb({
						decimals: 0,
						thousand: ','
					})
				});

				mobilePriceRangeSlider.noUiSlider.on('update', function ( values, handle ) {
					mobilePriceMax.innerHTML = values[handle];
					document.getElementById("mobile-priceValue").value = parseFloat(values[handle].replace(/,/g, ''));
				});

				var mobileStarRatingSlider = document.getElementById('mobile-star-rating');
				var mobileStarMax = document.getElementById('mobile-star-rating-value');

				noUiSlider.create(mobileStarRatingSlider, {
					start: parseFloat(mobileStarMax.innerText),
					connect: [true, false],
					range: {
					  'min': 2.0,
					  'max': 5.0
					},
					format: wNumb({
						decimals: 1,
					})
				});

				mobileStarRatingSlider.noUiSlider.on('update', function ( values, handle ) {
					mobileStarMax.innerHTML = values[handle];
					document.getElementById("mobile-starValue").value = parseFloat(values[handle].replace(/,/g, ''));
				});

				var mobileTripAdvisorSlider = document.getElementById('mobile-tripadvisor-rating');
				var mobileTripAdvisorMax = document.getElementById('mobile-tripadvisor-rating-value');

				noUiSlider.create(mobileTripAdvisorSlider, {
					start: parseFloat(mobileTripAdvisorMax.innerText),
					connect: [true, false],
					range: {
					  'min': 2.5,
					  'max': 5.0
					},
					format: wNumb({
						decimals: 1,
					})
				});

				mobileTripAdvisorSlider.noUiSlider.on('update', function ( values, handle ) {
					mobileTripAdvisorMax.innerHTML = values[handle];
					document.getElementById("mobile-tripAdvisorValue").value = parseFloat(values[handle].replace(/,/g, ''));
				});
			});
		});
	},
	binds: function() {
		if (document.querySelector('a.mobile-filters-button')) {
			for (var i = 0; i < document.querySelectorAll('a.mobile-filters-button').length; i++) {
				document.querySelectorAll('a.mobile-filters-button')[i].addEventListener('click', function() {
					f.addClass(document.querySelector('.mobile-search-bar'), 'open-filters');
					document.querySelector('a.mobile-filters-button').style.display = 'none';
				});
			}
		}

		if (document.querySelector('a.close')) {
			for (var i = 0; i < document.querySelectorAll('a.close').length; i++) {
				document.querySelectorAll('a.close')[i].addEventListener('click', function() {
					f.removeClass(document.querySelector('form.mobile-search-bar.open-filters'), 'open-filters');
					document.querySelector('a.mobile-filters-button').style.display = 'block';
				});
			}
		}

		if (document.querySelector('a.more-filters')) {
			for (var i = 0; i < document.querySelectorAll('a.more-filters').length; i++) {
				document.querySelectorAll('a.more-filters')[i].addEventListener('click', function() {
					document.querySelector('.additional-filters').style.display = 'block';
					document.querySelector('a.more-filters').style.display = 'none';
					document.querySelector('.mobile-search-bar button').style.display = 'none';
				});
			}
		}

		if (document.querySelector('a.hide-filters')) {
			for (var i = 0; i < document.querySelectorAll('a.hide-filters').length; i++) {
				document.querySelectorAll('a.hide-filters')[i].addEventListener('click', function() {
					document.querySelector('.additional-filters').style.display = 'none';
					document.querySelector('a.more-filters').style.display = 'block';
					document.querySelector('.mobile-search-bar button').style.display = 'block';
				});
			}
		}

		if (document.querySelector('a.toggle-flight')) {
			for (var i = 0; i < document.querySelectorAll('a.toggle-flight').length; i++) {
				document.querySelectorAll('a.toggle-flight')[i].addEventListener('click', function() {
					var selector = this.parentNode.parentNode.parentNode.querySelectorAll('.flight-dropdown-wrap')

					f.toggleClass(this.querySelector('i'), 'active');

					for (var i = 0; i < selector.length; i++) {
						f.toggleClass(selector[i], 'active');
					}
				});
			}
		}

		if (document.querySelector('a.flight-details')) {
			for (var i = 0; i < document.querySelectorAll('a.flight-details').length; i++) {
				document.querySelectorAll('a.flight-details')[i].addEventListener('click', function() {
					var selector = this.parentNode.parentNode.querySelectorAll('.flight-details-wrap')
					
					f.toggleClass(this, 'active');

					for (var i = 0; i < selector.length; i++) {
						f.toggleClass(selector[i], 'active');
					}
				});
			}
		}
	},
};

/* Filters Counter */
var plus = document.getElementsByClassName("plus");
var minus = document.getElementsByClassName("minus");

var plusFunction = function() {
	var notes;
	var counterParent = this.parentNode;
	for(var i = 0; i < counterParent.childNodes.length; i++) {
		if (counterParent.childNodes[i].className == "counter-number") {
	     	counterNum = parseInt(counterParent.childNodes[i].innerHTML);
	     	if (counterNum < 10) {
	     		counterNum = counterNum + 1;
	     		counterParent.childNodes[i].innerHTML = counterNum;
	     		var inputNum = counterParent.querySelector('input').value = counterNum;
	     	}
	     	break;
	    }   
	}
    
};

for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', plusFunction, false);
}

var minusFunction = function() {
	var notes;
	var counterParent = this.parentNode;
	for(var i = 0; i < counterParent.childNodes.length; i++) {
		if (counterParent.childNodes[i].className == "counter-number") {
	     	counterNum = parseInt(counterParent.childNodes[i].innerHTML);
	     	if (counterNum > 0) {
	     		counterNum = counterNum - 1;
	     		counterParent.childNodes[i].innerHTML = counterNum;
	     		var inputNum = counterParent.querySelector('input').value = counterNum;
	     	}
	     	break;
	    }   
	}
    
};

for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', minusFunction, false);
}

search.init();