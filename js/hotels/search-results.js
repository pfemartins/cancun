var priceRangeSlider = document.getElementById('price-range');
var priceMax = document.getElementById('price-high-value');
var priceNum = priceMax.innerText;
var priceValue = parseFloat(priceNum.replace(/,/g, ''));
noUiSlider.create(priceRangeSlider, {
	start: priceValue,
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
		var newValue = values[handle];
		var numVal = parseFloat(newValue.replace(/,/g, ''));
		document.getElementById("priceValue").value = numVal;
});


var starRatingSlider = document.getElementById('star-rating');
var starMax = document.getElementById('star-rating-value');
var starNum = parseFloat(starMax.innerText);

noUiSlider.create(starRatingSlider, {
	start: starNum,
	connect: [true, false],
	range: {
	  'min': 2.0,
	  'max': 5.0
	},
	format: wNumb({
		decimals: 1,
	})
});
var starMax = document.getElementById('star-rating-value');

starRatingSlider.noUiSlider.on('update', function ( values, handle ) {
		starMax.innerHTML = values[handle];
		var newValue = values[handle];
		var numVal = parseFloat(newValue.replace(/,/g, ''));
		document.getElementById("starValue").value = numVal;
});

var tripAdvisorSlider = document.getElementById('tripadvisor-rating');
var tripAdvisorMax = document.getElementById('tripadvisor-rating-value');
var tripAdvisorNum = parseFloat(tripAdvisorMax.innerText);

noUiSlider.create(tripAdvisorSlider, {
	start: tripAdvisorNum,
	connect: [true, false],
	range: {
	  'min': 2.5,
	  'max': 5.0
	},
	format: wNumb({
		decimals: 1,
	})
});
var tripAdvisorMax = document.getElementById('tripadvisor-rating-value');

tripAdvisorSlider.noUiSlider.on('update', function ( values, handle ) {
		tripAdvisorMax.innerHTML = values[handle];
		var newValue = values[handle];
		var numVal = parseFloat(newValue.replace(/,/g, ''));
		document.getElementById("tripAdvisorValue").value = numVal;
});

/* Mobile Filters */

$('a.mobile-filters-button').click(function() {
	$('.mobile-search-bar').addClass('open-filters');
	$('a.mobile-filters-button').hide();
});
$('a.close').click(function() {
	$('form.mobile-search-bar.open-filters').removeClass('open-filters');
	$('a.mobile-filters-button').show();
});
$('a.more-filters').click(function() {
	$('.additional-filters').show();
	$('a.more-filters').hide();
	$('.mobile-search-bar button').hide();
});
$('a.hide-filters').click(function() {
	$('.additional-filters').hide();
	$('a.more-filters').show();
	$('.mobile-search-bar button').show();
});


var mobilePriceRangeSlider = document.getElementById('mobile-price-range');
var mobilePriceMax = document.getElementById('mobile-price-high-value');
var mobilePriceNum = mobilePriceMax.innerText;
var mobilePriceValue = parseFloat(mobilePriceNum.replace(/,/g, ''));
noUiSlider.create(mobilePriceRangeSlider, {
	start: mobilePriceValue,
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
		var newValue = values[handle];
		var numVal = parseFloat(newValue.replace(/,/g, ''));
		document.getElementById("mobile-priceValue").value = numVal;
});


var mobileStarRatingSlider = document.getElementById('mobile-star-rating');
var mobileStarMax = document.getElementById('mobile-star-rating-value');
var mobileStarNum = parseFloat(mobileStarMax.innerText);

noUiSlider.create(mobileStarRatingSlider, {
	start: mobileStarNum,
	connect: [true, false],
	range: {
	  'min': 2.0,
	  'max': 5.0
	},
	format: wNumb({
		decimals: 1,
	})
});
var mobileStarMax = document.getElementById('mobile-star-rating-value');

mobileStarRatingSlider.noUiSlider.on('update', function ( values, handle ) {
		mobileStarMax.innerHTML = values[handle];
		var newValue = values[handle];
		var numVal = parseFloat(newValue.replace(/,/g, ''));
		document.getElementById("mobile-starValue").value = numVal;
});

var mobileTripAdvisorSlider = document.getElementById('mobile-tripadvisor-rating');
var mobileTripAdvisorMax = document.getElementById('mobile-tripadvisor-rating-value');
var mobileTripAdvisorNum = parseFloat(mobileTripAdvisorMax.innerText);

noUiSlider.create(mobileTripAdvisorSlider, {
	start: mobileTripAdvisorNum,
	connect: [true, false],
	range: {
	  'min': 2.5,
	  'max': 5.0
	},
	format: wNumb({
		decimals: 1,
	})
});
var mobileTripAdvisorMax = document.getElementById('mobile-tripadvisor-rating-value');

mobileTripAdvisorSlider.noUiSlider.on('update', function ( values, handle ) {
		mobileTripAdvisorMax.innerHTML = values[handle];
		var newValue = values[handle];
		var numVal = parseFloat(newValue.replace(/,/g, ''));
		document.getElementById("mobile-tripAdvisorValue").value = numVal;
});

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
	     		var inputNum = $(this).find('input').value = counterNum;
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
	     		var inputNum = $(this).find('input').value = counterNum;
	     	}
	     	break;
	    }   
	}
    
};

for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', minusFunction, false);
}

/* Flight dropdown */
$('a.toggle-flight').click(function() {
	$(this).find('i').toggleClass('active');
	$(this).parent().parent().parent().children('.flight-dropdown-wrap').toggleClass('active');
});

$('a.flight-details').click(function() {
	$(this).toggleClass('active');
	$(this).parent().parent().children('.flight-details-wrap').toggleClass('active');
	console.log($(this).parent().parent().children('.flight-details-wrap'));
});
