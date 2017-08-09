var map = {
	canvas: document.getElementById('map-canvas'),
	marker: {
		array: [],
		icon: {},
		label: {},
		price: true,
		active: (function(marker) {
			map.marker.icon.fillColor = '#CAC859';
			map.marker.icon.strokeColor = map.marker.price ? '#FFFFFF' : '#CAC859';

			if (map.marker.price) {
				map.marker.label.color = '#FFFFFF';
				map.marker.label.text = marker.price;
				marker.setLabel(map.marker.label);
			}

			marker.setIcon(map.marker.icon);

			marker.setZIndex(9999);
			f.addClass(document.body, 'f-marker-active');
		}),
		init: (function(id) {
			map.marker.resize();

			var price = '$190';

			var marker = new google.maps.Marker({
				position: map.marker.random(),
				id: id,
				map: map.canvas,
			});

			if (map.marker.price) {
				map.marker.label.text = price;
				marker.set('price', price);
				marker.setLabel(map.marker.label);
			}

			marker.set('info', new SnazzyInfoWindow({
				marker: marker,
				placement: 'top',
				content: 'Sample content',
				panOnOpen: false
			}));

			marker.info.open();

			marker.setIcon(map.marker.icon);
			marker.setZIndex(parseInt(id) * 10);

			google.maps.event.addListener(marker, 'click', function () {
				map.marker.reset();
				map.marker.active(marker);
			});

			return marker;
		}),
		random: (function() {
			var sw = map.canvas.getBounds().getSouthWest();
			var ne = map.canvas.getBounds().getNorthEast();
			var diff_lng = ne.lng() - sw.lng();
			var diff_lat = ne.lat() - sw.lat();

			return new google.maps.LatLng(sw.lat() + diff_lat * Math.random(),sw.lng() + diff_lng * Math.random());
		}),
		reset: (function() {
			map.marker.resize();

			for (var a = 0; a < map.marker.array.length; a++) {
				map.marker.array[a].setZIndex(parseInt(map.marker.array[a].id) * 10);

				if (map.marker.price) {
					map.marker.label.text = map.marker.array[a].price;
					map.marker.array[a].setLabel(map.marker.label)
				}
				map.marker.array[a].setIcon(map.marker.icon)
			}

			f.removeClass(document.body, 'f-marker-active');
		}),
		resize: (function() {
			map.marker.icon.anchor = map.marker.price ? new google.maps.Point(27, 13) : new google.maps.Point(14, 19);
			map.marker.icon.scale = 1;
			map.marker.icon.fillColor = '#7C7C7C';
			map.marker.icon.strokeColor = map.marker.icon.fillColor;
			map.marker.icon.fillOpacity = 1;
			map.marker.icon.strokeWeight = map.marker.price ? 1 : 2;

			if (map.marker.price) {
				map.marker.icon.path = 'M28.3304979,30.3857635 L35.2106454,25.5 L53,25.5 C53.8284271,25.5 54.5,24.8284271 54.5,24 L54.5,2 C54.5,1.17157288 53.8284271,0.5 53,0.5 L2,0.5 C1.17157288,0.5 0.5,1.17157288 0.5,2 L0.5,24 C0.5,24.8284271 1.17157288,25.5 2,25.5 L21.5161938,25.5 L28.3304979,30.3857635 Z';
				map.marker.icon.labelOrigin = map.marker.icon.anchor;
				map.marker.label = {
					color: 'white',
					fontSize: '14px',
					fontWeight: '700'
				}
			} else {
				map.marker.icon.path = 'M22.9636604,12.5370235 C22.9384159,6.97117171 18.4151324,2.45488527 12.861354,2.45008334 C7.31951194,2.4452814 2.77386511,6.9859891 2.76138009,12.5392186 C2.74889506,18.0835303 7.34681436,22.6950322 12.8776806,22.6483849 C18.5328483,22.6006399 22.932928,18.0744752 22.9636604,12.5370235 L22.9636604,12.5370235 Z M12.6899936,35.9900751 C12.5430545,35.7295359 12.350154,35.4842257 12.2567221,35.2055764 C11.7984805,33.8394951 11.1742292,32.5498332 10.4832997,31.291864 C9.21408025,28.9813111 7.65290328,26.8637959 6.11944033,24.7272102 C4.82662281,22.9257994 3.52927775,21.1257606 2.30149212,19.280172 C1.4160157,17.9492134 0.703546069,16.515219 0.278780809,14.9582952 C-0.0993371029,13.5723202 -0.0511805763,12.1757809 0.17643104,10.7736165 C0.454668749,9.06042409 1.06492581,7.47729543 1.99320803,6.01188272 C3.10327771,4.25958883 4.55071747,2.86099159 6.33360653,1.8019596 C8.0594212,0.776815536 9.92421752,0.205111131 11.9205868,0.0462357534 C12.0053752,0.0395130474 12.0886544,0.0157777793 12.1726197,0 L13.5524208,0 C14.0348092,0.0665410694 14.5182953,0.125673442 14.9994489,0.200720793 C16.7163457,0.468531447 18.2968676,1.09758465 19.7613199,2.02463209 C21.2774959,2.98433266 22.5362883,4.21637143 23.5390691,5.6990711 C24.4869707,7.1006867 25.1474422,8.63922598 25.4704065,10.3002831 C25.7984471,11.987408 25.8813148,13.6787859 25.3271717,15.3516421 C24.8723601,16.7249949 24.2328798,18.0130105 23.4256063,19.1992251 C22.1026052,21.1433219 20.7247249,23.0510612 19.3336735,24.9472759 C17.9636135,26.8149534 16.6089196,28.6925091 15.4620809,30.7064398 C14.594989,32.2289269 13.8545309,33.8145251 13.3289251,35.494104 C13.2714391,35.6780866 13.0974719,35.8255746 12.9774236,35.9900751 L12.6899936,35.9900751 Z';
			}
		}),
	},
	popup: document.getElementById('map-popup'),
	init: (function() {
		if (typeof google === 'object' && typeof google.maps === 'object') {
			f.addClass(document.body, 'f-map-init');
			f.toggleClass(document.body, 'f-map-active');

	        	map.canvas = new google.maps.Map(map.canvas, {
		          zoom: 15,
		          center: {
		          	lat: 40.746209, 
		          	lng: -73.991440,
		         	},
		         	disableDefaultUI: true,
				scrollwheel: false,
				scaleControl: false,
				styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#305c64"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#305c64"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"lightness":"-25"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"lightness":"-10"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"lightness":"15"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#4babb1"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#a7d5d2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]}],
	        	});
		} else {
			f.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyACnDRF0TNeXEbMSeqWbKN-1zT8mUdJueA', function() {
		          f.getScript(f.base.jsp + 'snazzy-info-window.js', function() {
					map.init();
			         	map.events();
			          f.update_watch.push(window.map.resize);
			        	google.maps.event.trigger(map.canvas, 'resize');
		          }, true);
			});
		}
	}),
	events: (function() {
	     google.maps.event.addListener(map.canvas, 'idle', function() {
	        	google.maps.event.trigger(map.canvas, 'resize');

			if (!map.marker.array.length) {
				for (var a = 0; a < 1; a++) {
					map.marker.array.push(map.marker.init(a));
		        	}
				map.marker.active(map.marker.array[0]);
				map.canvas.setCenter(map.marker.array[0].getPosition());
			}

	        	map.resize();
        	});
        	google.maps.event.addListener(map.canvas, 'click', function() {
			map.marker.reset();
        	});
        	if (document.querySelector('#map-zoom')) {
        		document.querySelector('#map-zoom-in').addEventListener(f.event, function() {
        			map.canvas.setZoom(map.canvas.zoom + 1);
        		});
        		document.querySelector('#map-zoom-out').addEventListener(f.event, function() {
        			map.canvas.setZoom(map.canvas.zoom - 1);
        		});
        	}
	}),
	resize: (function() {
        	google.maps.event.trigger(map.canvas, 'resize');
		map.marker.resize();
	}),
};

map.init();