(function() {
	function $(selector, context) {
		context = context || document;
		return context['querySelectorAll'](selector);
	}

	function forEach(collection, iterator) {
		for (var key in Object.keys(collection)) {
			iterator(collection[key]);
		}
	}

	function showMenu(menu) {
		var menu = this;
		var ul = $('ul', menu)[0];

		if (!ul || ul.classList.contains('-visible')) return;

		menu.classList.add('-active');
		ul.classList.add('-animating');
		ul.classList.add('-visible');
		setTimeout(function() {
			ul.classList.remove('-animating');
		}, 25);
	}

	function hideMenu(menu) {
		var menu = this;
		var ul = $('ul', menu)[0];

		if (!ul || !ul.classList.contains('-visible')) return;

		menu.classList.remove('-active');
		ul.classList.add('-animating');
		setTimeout(function() {
			ul.classList.remove('-visible');
			ul.classList.remove('-animating');
		}, 300);
	}

	function showHamburger(btn) {
		var btn = this;
		var menu = $('.hamburger-menu')[0];
		if (!menu || menu.classList.contains('visible')) return;
		menu.classList.add('-animating');
		menu.classList.add('visible');
		setTimeout(function() {
			menu.classList.remove('-animating');
		}, 25);
		btn.classList.add('invisible');
		$('.hamburger-x')[0].classList.add('visible');
	}

	function hideHamburger(btn) {
		var btn = btn ? this : $('.hamburger-x')[0];
		var menu = $('.hamburger-menu')[0];
		if (!menu || !menu.classList.contains('visible')) return;
		menu.classList.remove('-active');
		menu.classList.add('-animating');
		setTimeout(function() {
			menu.classList.remove('visible');
			menu.classList.remove('-animating');
		}, 300);
		btn.classList.remove('visible');
		$('.hamburger-btn')[0].classList.remove('invisible');
	}

	function hideAllInactiveMenus(menu) {
		var menu = this;
		forEach($('li.-hasSubmenu.-active:not(:hover)', menu.parent), function(e) {
			e.hideMenu && e.hideMenu();
		});
	}

	window.addEventListener('load', function() {
		forEach($('.Menu li.-hasSubmenu'), function(e) {
			e.showMenu = showMenu;
			e.hideMenu = hideMenu;
		});

		forEach($('.Menu > li.-hasSubmenu'), function(e) {
			e.addEventListener('mouseenter', showMenu);
		});

		forEach($('.Menu > span.hamburger > li.-hasSubmenu'), function(e) {
			e.addEventListener('click', showMenu);
		});

		forEach($('.Menu > li.-hasSubmenu li'), function(e) {
			e.addEventListener('click', hideAllInactiveMenus);
		});

		forEach($('.Menu > li.-hasSubmenu'), function(e) {
			e.addEventListener('mouseleave', hideAllInactiveMenus);
		});

		forEach($('.Menu > li.-hasSubmenu li.-hasSubmenu'), function(e) {
			e.addEventListener('click', showMenu);
		});

		forEach($('.hamburger-btn'), function(e) {
			e.addEventListener('click', showHamburger);
		});

		forEach($('.hamburger-x'), function(e) {
			e.addEventListener('click', hideHamburger);
		});

		document.addEventListener('click', hideAllInactiveMenus);
	});
})();
