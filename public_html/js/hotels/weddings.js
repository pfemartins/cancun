(function() {
	function $(selector, context) {
		context = context && context.querySelectorAll ? context : null || document;
		return context.querySelectorAll(selector);
	}

	function forEach(collection, iterator) {
		for (var key in Object.keys(collection)) {
			iterator(collection[key]);
		}
	}

	function plusToMinus(menu) {
		menu.children[2].classList.add('invisible');
		menu.children[1].classList.remove('invisible');
		menu.children[1].classList.add('visible');
	}

	function minusToPlus(menu) {
		menu.children[1].classList.add('invisible');
		menu.children[2].classList.remove('invisible');
		menu.children[2].classList.add('visible');
	}

	function showMenu(menu) {
		var ul = this.nextElementSibling;
		var target = window.matchMedia('(min-width:768px)').matches ? ul : this;
		if (target.children[2].classList.contains('invisible')) {
			minusToPlus(this);
			hideMenu(this);
			return;
		}
		if (!ul || ul.classList.contains('visible')) return;

		plusToMinus(this);
		this.classList.add('-active');
		ul.classList.add('-animating');
		ul.classList.remove('invisible');
		ul.classList.add('visible');
		setTimeout(function() {
			ul.classList.remove('-animating');
		}, 25);
	}

	function hideMenu(menu) {
		if (menu.currentTarget && menu.currentTarget.className === 'collapse hide-for-large') {
			let box = menu.currentTarget.parentNode;
			minusToPlus(box.previousElementSibling);
			box.classList.add('invisible');
			box.classList.remove('visible');
			return;
		}
		var ul = menu.nextElementSibling;

		if (!ul || !ul.classList.contains('visible')) return;

		minusToPlus(menu);

		menu.classList.remove('-active');
		ul.classList.add('-animating');
		ul.classList.add('invisible');
		ul.classList.remove('visible');
	}

	forEach($('.title-container'), function(e) {
		e.addEventListener('click', showMenu);
	});

	forEach($('.collapse'), function(e) {
		e.addEventListener('click', hideMenu);
	});

	forEach($('.mobile-box'), function(e) {
		if (window.matchMedia('(max-width:768px)').matches) {
			e.classList.remove('visible');
			e.classList.add('invisible');
		}
	});
})();
