/* Custom */
f.modals = {
     active: (function() {
          if (f.modals.modal.querySelector('.f-modal-close')) {
               f.modals.close.push(f.modals.modal.querySelector('.f-modal-close'));
          }

          if (f.modals.modal.querySelector('.f-modal-overlay')) {
               f.modals.close.push(f.modals.modal.querySelector('.f-modal-overlay'));
          }

          document.addEventListener('keyup', f.modals.events.keyup, false);
          document.addEventListener(f.event, f.modals.events.click, false);

          if (f.hasClass(f.modals.modal, 'f-modal-box')) {
               f.addClass(document.body, 'f-modal-active-box');
          }

          f.addClass(document.body, f.modals.modal.id);
          f.addClass(document.body, 'f-modal-active');
          f.addClass(document.body, 'f-close-active');
          f.addClass(f.modals.modal, 'f-modal-animate');

          f.modals.resize();
     }),
     deactive: (function() {
          document.removeEventListener('keyup', f.modals.events.keyup, false);
          document.removeEventListener(f.event, f.modals.events.click, false );

          if (f.hasClass(f.modals.modal, 'f-modal-box')) {
               f.removeClass(document.body, 'f-modal-active-box', 'remove');
          }

          f.removeClass(document.body, f.modals.modal.id);
          f.removeClass(document.body, 'f-modal-active');
          f.removeClass(document.body, 'f-close-active');
          
          f.removeClass(f.modals.modal, 'f-modal-animate');
          f.addClass(f.modals.modal, 'f-hide');
          
          f.modals.resize();
     }),
     modal: '',
     close: [],
     events: {
          click: (function(event) {
               if(f.modals.close.includes(event.target)) {
                    event.preventDefault();
                    event.stopPropagation();
                    f.modals.deactive();
               }
          }),
          keyup: (function(event) {
               if (event.keyCode === 27) {
                    event.preventDefault();
                    event.stopPropagation();
                    f.modals.deactive();
               }
          }),
     },
     hide: (function() {
          f.modals.deactive();
     }),
     init: (function() {
          f.addClass(document.body, 'f-modal-init');

          f.modals.modal = document.querySelector('.f-modal-animate');

          f.addEvent('.f-modal-trigger-inactive', function(event) {
               event.preventDefault();
               event.stopPropagation();

               f.class(this, 'f-modal-trigger-inactive', 'remove');

               if (!f.drag) {
                    f.class(this.getAttribute('href'), 'f-hide', 'remove');
                    f.modals.show(this.getAttribute('href'));
               }
          }, f.event);

          f.removeClass(document.getElementById('fusion-modal'), 'f-hide');
     }),
     show: (function(item) {
          var show = true;

          if (document.querySelector('.f-modal-animate')) {
               for (var a = 0; a < document.querySelectorAll('.f-modal-animate').length; a++) {
                    show = ('#' + document.querySelectorAll('.f-modal-animate')[a].id) == item ? false : show;
                    f.modals.hide()
               }
          }

          if (show) {
               f.modals.modal = document.querySelector(item);
               f.modals.active();
          }

          return this;
     }),

};

f.modals.init();