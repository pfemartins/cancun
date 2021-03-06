(function() {
	init();

	function init() {
		flagMobile();
		setNavIcon();
	}

	function $(selector, context) {
		context = context && context.querySelectorAll ? context : null || document;
		return context.querySelectorAll(selector);
	}

	function forEach(collection, iterator) {
		for (var key in Object.keys(collection)) {
			iterator(collection[key]);
		}
	}

	function showMenu(menu) {
		var ul = $('ul', this)[0] || this.parentNode;
		var target = window.matchMedia('(min-width:768px)').matches ? ul : this;
		if (target.children[0].children[0].classList.contains('invisible')) {
			minusToPlus(this);
			hideThisMenu(this);
			return;
		}
		if (!ul || ul.classList.contains('-visible')) return;

		if (this.classList.contains('plus-click')) {
			plusToMinus(this);
		}
		this.classList.add('-active');
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
		if (menu.classList.contains('plus-click')) {
			minusToPlus(menu);
		}

		menu.classList.remove('-active');
		ul.classList.add('-animating');
		setTimeout(function() {
			ul.classList.remove('-visible');
			ul.classList.remove('-animating');
		}, 300);
	}

	function hideThisMenu(menu) {
		hideMenu(menu);
		// var menu = this;
		var ul = $('ul', menu)[0];
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

	function plusToMinus(menu) {
		menu.children[0].children[0].classList.add('invisible');
		menu.children[0].children[1].classList.remove('invisible');
		menu.children[0].children[1].classList.add('visible');
	}

	function minusToPlus(menu) {
		menu.children[0].children[0].classList.remove('invisible');
		menu.children[0].children[1].classList.add('invisible');
		menu.children[0].children[1].classList.remove('visible');
	}

	window.addEventListener('load', function() {
		window.addEventListener('resize', init);

		forEach($('.hamburger-menu-main'), function(e) {
			e.addEventListener('click', function(event) {
				forEach($('.hamburger-menu-main'), function(el) {
					el.classList.remove('show');
				});
				forEach($('.hamburger-holder'), function(el) {
					el.classList.add('show');
				});
				forEach(
					$(
						'.big-x, .mobile-login-row, .mobile-search, header > :not(:first-child):not(.gray-line):not(.injected-content)'
					),
					function(el) {
						el.classList.remove('hide');
					}
				);
				$('#navbar-bar')[0].classList.add('push-down');
			});
		});

		forEach($('.big-x'), function(e) {
			e.addEventListener('click', function(event) {
				forEach($('.hamburger-menu-main'), function(el) {
					el.classList.add('show');
				});
				forEach($('.hamburger-holder'), function(el) {
					el.classList.remove('show');
				});
				forEach(
					$(
						'.big-x, .mobile-login-row, .mobile-search, header > :not(:first-child):not(.gray-line):not(.injected-content)'
					),
					function(el) {
						el.classList.add('hide');
					}
				);
				$('#navbar-bar')[0].classList.remove('push-down');
			});
		});

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

		forEach($('.plus-click'), function(e) {
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

	function flagMobile() {
		$('body')[0].classList[window.matchMedia('(min-width:768px)').matches ? 'remove' : 'add']('is-mobile');
	}

	function setNavIcon() {
		var isMobile = !window.matchMedia('(min-width:768px)').matches;
		var pageName = getParameterByName('page');

		var shouldUseWhite = {
			mobile: {
				'explore-regions': false
			},
			desktop: {
				'explore-regions': true
			}
		};

		if (shouldUseWhite[isMobile ? 'mobile' : 'desktop'][pageName]) {
			$('.icon.icon-logo')[0].classList.add('hide');
			$('.icon.icon-logo-white')[0].classList.remove('hide');
		} else {
			$('.icon.icon-logo-white')[0].classList.add('hide');
			$('.icon.icon-logo')[0].classList.remove('hide');
		}
	}

	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
})();
