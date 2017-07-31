var f = {
     html: document.documentElement,
     head: document.head,
     body: document.body,
     drag: false,
     base: {},
     page: {},
     event: 'click',
     getScript: function(selector, callback) {
          var script = document.createElement('script');

          script.src = selector;
          console.log(selector);
          script.onload = callback || false;

          document.querySelector('#fusion-scripts').appendChild(script);
     },
     hasClass: function(selector, value) {
          if (typeof selector !== 'object') {
               selector = document.querySelector(selector);
          }
          if (selector !== null) {
               if (selector.classList) {
                    return selector.classList.contains(value);
               } else {
                    return new RegExp('(^| )' + value + '( |$)', 'gi').test(selector.className);
               }
          }
     },
     addClass: function(selector, value) {
          if (typeof selector !== 'object') {
               selector = document.querySelector(selector);
          }
          if (selector !== null) {
               if (selector.classList) {
                    selector.classList.add(value);
               } else {
                    selector.className += ' ' + value;
               }
          }
     },
     removeClass: function(selector, value) {
          if (typeof selector !== 'object') {
               selector = document.querySelector(selector);
          }
          if (selector !== null) {
               if (selector.classList) {
                    selector.classList.remove(value);
               } else {
                    selector.className = selector.className.replace(new RegExp('(^|\\value)' + value.split(' ').join('|') + '(\\value|$)', 'gi'), ' ');
               }
          }
     },
     toggleClass: function(selector, value) {
          if (f.hasClass(selector, value)) {
               f.removeClass(selector, value);
          } else {
               f.addClass(selector, value);
          }
     },
     trigger: function(selector) {
          if (typeof selector !== 'object') {
               selector = document.querySelector(selector);
          }
          if (typeof selector.click == 'function') {
               selector.click()
          } else if (typeof ele.onclick == 'function') {
               selector.onclick();
          }
     },
	init: function() {
		f.paths();
          f.update();
		f.scripts();
		f.binds();
     },
	update: function() {
		f.width = screen.width;
		f.height = screen.height;
		f.device = (f.width > 1040 ? 'desktop' : (f.width > 768 ? 'tablet' : 'mobile'));
		f.event = (f.device == 'desktop' ? 'click' : 'touchend');
		if (f.update_watch.length) {
		     for (var i = 0; i < f.update_watch.length; i++) {
		          window[f.update_watch[i]]();
		     }
		}
	},
	paths: function() {
	     f.page.root = window.location.origin + '/cancun/';
	     f.page.current = window.location.href;

	     f.base.root = f.page.root;
	     f.base.js = f.base.root + 'public_html/js/';
	     f.base.jsp = f.base.root + 'public_html/js/plugins/';
	     f.base.css = f.base.root + 'public_html/css/';
	     f.base.images = f.base.root + 'public_html/images/';
	},
	scripts: function() {
		// For global plugins.
          f.getScript(f.base.jsp + 'date.js', function() {
               date.init();
          });

          f.getScript(f.base.jsp + 'webfontloader.js', function() {
               WebFont.load({
                    google: {
                         families: ['Montserrat:300,400,400i,500,600,700,900']
                    }
               });
          });
	},
	binds: function() {
	     window.addEventListener('touchstart', function() {
	          f.drag = false;
	     });

	     window.addEventListener('touchmove', function() {
	          f.drag = true;
	     });

		window.onresize = function() {
		     clearTimeout(f.update_timeout);
		     f.update_timeout = setTimeout(f.update, 1);
		};
	},
     update_watch: [],
     update_timeout: null,
};

f.init();