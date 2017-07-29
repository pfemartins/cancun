<!doctype html>
<html class="no-js" lang="en">
<head>
     <?php include ("views/includes/head.php"); ?>
     <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://cdn.rawgit.com/nolimits4web/Swiper/d9f17789/dist/css/swiper.min.css">
	<link rel="stylesheet" href="css/hotels/landing.css"> 
</head>
<body>
	<div id="fusion" class="sr-hotels">
		<?php include ("views/includes/header.php"); ?>
		<main id="hotels">
			<div class="fusion-container">
				<div class="pure-g row top-section">
					<div class="pure-u-3-4 pure-u-md-1">
						<h1>Grand Fiesta Americana Coral Beach Cancun</h1>
						<h5><i class="icon icon-location hide-for-small"></i><div class="star-wrap left hide-for-large hide-for-medium"><i class="icon icon-star-small"></i><i class="icon icon-star-small"></i><i class="icon icon-star-small"></i><i class="icon icon-star-small"></i><i class="icon icon-half-star-small"></i></div> Punta Cancun Hotel Zone &nbsp; &nbsp; <span class="hide-for-small">| &nbsp; &nbsp; 1.800.568.9504</span></h5>
						<div class="pure-g row">
							<div class="pure-u-1">
								<div class="star-wrap left hide-for-small"><i class="icon icon-star-small"></i><i class="icon icon-star-small"></i><i class="icon icon-star-small"></i><i class="icon icon-star-small"></i><i class="icon icon-half-star-small"></i></div> 
								<a href="" class="reviews left hide-for-small">Based on 45 reviews</a>
								<div class="user-reviews left hide-for-large hide-for-medium">3.9/5  User Rating</div>
								<div class="tripadvisor-wrap left"><i class="icon icon-tripadvisor"></i> 4/5 Very Good!</div>
							</div>
						</div>
					</div>
					<div class="pure-u-1-4 hide-for-large hide-for-medium top-right">
						<div class="msrp">$299</div>
						<div class="price"><sup>$</sup>249</div>
						<a href="" class="button yellow-bg">Book</a>
					</div>
				</div>
				<div class="pure-g row">
					<div class="pure-u-1 pure-u-md-17-24 main-content">
						<div class="pure-g row gallery">
							<div class="pure-u-1">
								<!-- Swiper -->
							    <div class="swiper-container gallery-top">
							        <div class="swiper-wrapper">
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/1)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/2)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/3)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/4)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/5)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/6)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/7)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/1200/1200/nature/8)"></div>
							        </div>
							        <!-- Add Arrows -->
							        <div class="swiper-button-next swiper-button-white"></div>
							        <div class="swiper-button-prev swiper-button-white"></div>
							    </div>
							    <div class="swiper-container gallery-thumbs hide-for-small">
							        <div class="swiper-wrapper">
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/200/200/nature/1)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/200/200/nature/2)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/200/200/nature/3)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/200/200/nature/4)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/200/200/nature/5)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/200/200/nature/6)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/200/200/nature/7)"></div>
							            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/200/200/nature/8)"></div>
							        </div>
							    </div>

							</div>
						</div>
						<a class="mobile-filters-button">
							<div class="filter-box hide-for-large hide-for-medium">
								<div class="pure-g row">
									<span id="landing-dates" class="fusion-dates" data-date-output="#landing-dates .fusion-date-checkin,#landing-dates .fusion-date-checkout">
										<div class="pure-u-1-2">
											<h4 class="gray hide-for-small">Check-In</h4>
											<div class="date"><span class="number">21</span> / June</div>
											<a><i class="icon icon-arrow-down-small"></i></a>
											<input id="fusion-checkin" class="fusion-date-checkin pure-input-1 curved ie-curved fusion-readonly dark fusion-date-input" value="Arrive" type="text" readonly="readonly" hidden>
										</div>
										<div class="pure-u-1-2">
											<h4 class="gray hide-for-small">Check-Out</h4>
											<div class="date"><span class="number">27</span> / June</div>
											<a><i class="icon icon-arrow-down-small"></i></a>
											<input id="fusion-checkout" class="fusion-date-checkout pure-input-1 curved ie-curved fusion-readonly dark fusion-date-input" value="Depart" type="text" readonly="readonly" hidden>
										</div>
									</span>
								</div>
							</div>
						</a>
						
						<div id="hotel-content" class="pure-g row tabs-wrap">
							<div class="pure-u-1">
								<ul class="tabs hide-for-small">
									<li><a href="#tab-one" class="is-active">About the Hotel</a></li>
								  	<li><a href="#tab-two">Rooms</a></li>
								  	<li><a href="#tab-three">User Reviews</a></li>
								  	<li><a href="#tab-four">Location</a></li>
								</ul>
								<div class="show-hide-wrap">
									<div class="section-top hide-for-large hide-for-medium pure-g row">
										<a class="show-hide-link">
											<div class="pure-u-1">
												<h3 class="left">About the Hotel</h3>
												<div class="right plusminus"></div>
											</div>
										</a>
									</div>
									<section class="tab-content show-hide-content" id="tab-one">
									  	<p class="hotel-info-content">Spend an amazing beach holiday or an unforgettable romantic getaway at the beach in the exclusive Secrets Playa Mujeres Golf and Spa Resort All Inclusive - Adults Only. It is a brand new adults-only hotel in Playa Mujeres, a few miles north of Cancun . It has a full spa and leisure and business facilities for all travelers. It offers an Unlimited Luxury travel experience that includes activities during the day and night and an array of gourmet dining options. All of its spacious suites are decorated in contemporary style, and features splendid views and tablets with important information about the property.</p>
									  	<p><a href="" class="read-more">Read More</a></p>
									  	<hr>
									  	<div class="pure-g row">
									  		<div class="pure-u-1 pure-u-md-1-3">
									  			<h4>Categories</h4>
									  		</div>
									  		<div class="pure-u-1 pure-u-md-2-3">
									  			<ul class="categories">
									  				<div class="cat-wrap">
									  					<li>All-inclusive</li>
									  					<li>Spa</li>
									  				</div>
									  				<div class="cat-wrap">
									  					<li>Beach</li>
									  				<li>Family</li>
									  				</div>
									  				
									  				
									  			</ul>
									  			<hr>
									  		</div>
									  	</div>
									  	<div class="pure-g row">
									  		<div class="pure-u-1 pure-u-md-1-3">
									  			<h4>All-Inclusive</h4>
									  		</div>
									  		<div class="pure-u-1 pure-u-md-2-3">
									  			<p>Food &amp; Drinks:<br>
									  			Breakfast, lunch and dinner in any of the restaurants.  Room service 24 hours a day at no extra charge.  Unlimited domestic and international drinks.</p>
									  			<p><a href="" class="read-more">More Information</a></p>
									  			<hr>
									  		</div>
									  	</div>
									  	<div class="pure-g row">
									  		<div class="pure-u-1 pure-u-md-1-3">
									  			<h4>Amenities</h4>
									  		</div>
									  		<div class="pure-u-1 pure-u-md-2-3">
									  			<div class="pure-g row amenities-wrap">
									  				<div class="pure-u-1-2">
									  					<p><i class="icon icon-wifi"></i> Wireless internet</p>
									  					<p><i class="icon icon-room-service"></i> Room service</p>
									  					<p><i class="icon icon-pool"></i> Pool</p>
									  				</div>
									  				<div class="pure-u-1-2">
									  					<p><i class="icon icon-gym"></i> Fitness room/gym</p>
									  					<p><i class="icon icon-spa"></i> Spa</p>
									  					<p><i class="icon icon-outlet"></i> Business rooms</p>
									  				</div>
									  			</div>
									  			<p><a href="" class="read-more">More Information</a></p>
									  			
									  		</div>
									  	</div>
									  	<?php /* <div class="pure-g row">
									  		<div class="pure-u-1 pure-u-md-1-3">
									  			<h4>Restaurants</h4>
									  		</div>
									  		<div class="pure-u-1 pure-u-md-2-3 slider-wrap">

									  			<div class="slideshow-container">
													<div class="mySlides fade pure-g row">
														<div class="pure-u-1-3 slider-img">
															<img src="images/hotels/landing/restaurants.jpg">
														</div>
														<div class="pure-u-2-3 slider-text">
															<p><span class="regular">Sanctorum Elite Lounge Restaurant</span><br>
															Located on the tenth floor of the hotel<br>
															A la carte breakfast<br>
															Exlusively for guests in teh Club Rooms or Suites</p>
															<div class="numbertext">1 of 10</div>
														</div>
													</div>

													<div class="mySlides fade pure-g row">
														<div class="pure-u-1-3 slider-img">
															<img src="http://www.hdwallpaperspulse.com/wp-content/uploads/2014/07/14/hd-wallpapers-1366x768-3.jpg" style="width:100%">
														</div>
														<div class="pure-u-2-3 slider-text">
															<p><span class="regular">Sanctorum Elite Lounge Restaurant</span><br>
															Located on the tenth floor of the hotel<br>
															A la carte breakfast<br>
															Exlusively for guests in teh Club Rooms or Suites</p>
															<div class="numbertext">2 of 10</div>
														</div>
													</div>

													<div class="mySlides fade pure-g row">
														<div class="pure-u-1-3 slider-img">
															<img src="http://www.hdwallpaperspulse.com/wp-content/uploads/2014/07/14/hd-wallpapers-1366x768-3.jpg" style="width:100%">
														</div>
														<div class="pure-u-2-3 slider-text">
															<p><span class="regular">Sanctorum Elite Lounge Restaurant</span><br>
															Located on the tenth floor of the hotel<br>
															A la carte breakfast<br>
															Exlusively for guests in teh Club Rooms or Suites</p>
															<div class="numbertext">3 of 10</div>
														</div>
													</div>

													  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
													  <a class="next" onclick="plusSlides(1)">&#10095;</a>
												</div>
												<div style="text-align:center">
												  <span class="dot" onclick="currentSlide(1)"></span> 
												  <span class="dot" onclick="currentSlide(2)"></span> 
												  <span class="dot" onclick="currentSlide(3)"></span> 
												</div>
												<hr>
									  		</div>
									  	</div> 
									  	<div class="pure-g row">
									  		<div class="pure-u-1 pure-u-md-1-3">
									  			<h4>Bars</h4>
									  		</div>
									  		<div class="pure-u-1 pure-u-md-2-3 slider-wrap">

									  			<div class="slideshow-container">
													<div class="barsMySlides fade pure-g row">
														<div class="pure-u-1-3 slider-img">
															<img src="images/hotels/landing/restaurants.jpg">
														</div>
														<div class="pure-u-2-3 slider-text">
															<p><span class="regular">Sanctorum Elite Lounge Restaurant</span><br>
															Located on the tenth floor of the hotel<br>
															A la carte breakfast<br>
															Exlusively for guests in teh Club Rooms or Suites</p>
															<div class="numbertext">1 of 10</div>
														</div>
													</div>

													<div class="barsMySlides fade pure-g row">
														<div class="pure-u-1-3 slider-img">
															<img src="http://www.hdwallpaperspulse.com/wp-content/uploads/2014/07/14/hd-wallpapers-1366x768-3.jpg" style="width:100%">
														</div>
														<div class="pure-u-2-3 slider-text">
															<p><span class="regular">Sanctorum Elite Lounge Restaurant</span><br>
															Located on the tenth floor of the hotel<br>
															A la carte breakfast<br>
															Exlusively for guests in teh Club Rooms or Suites</p>
															<div class="numbertext">2 of 10</div>
														</div>
													</div>

													<div class="barsMySlides fade pure-g row">
														<div class="pure-u-1-3 slider-img">
															<img src="http://www.hdwallpaperspulse.com/wp-content/uploads/2014/07/14/hd-wallpapers-1366x768-3.jpg" style="width:100%">
														</div>
														<div class="pure-u-2-3 slider-text">
															<p><span class="regular">Sanctorum Elite Lounge Restaurant</span><br>
															Located on the tenth floor of the hotel<br>
															A la carte breakfast<br>
															Exlusively for guests in teh Club Rooms or Suites</p>
															<div class="numbertext">3 of 10</div>
														</div>
													</div>

													  <a class="prev" onclick="barsPlusSlides(-1)">&#10094;</a>
													  <a class="next" onclick="barsPlusSlides(1)">&#10095;</a>
												</div>
												<br>

												<div style="text-align:center">
												  <span class="dot" onclick="barsCurrentSlide(1)"></span> 
												  <span class="dot" onclick="barsCurrentSlide(2)"></span> 
												  <span class="dot" onclick="barsCurrentSlide(3)"></span> 
												</div>
									  		</div>
									  	</div> */ ?>
									</section>
								</div>
								<div class="show-hide-wrap">
									<div class="section-top hide-for-large hide-for-medium pure-g row">
										<a class="show-hide-link">
											<div class="pure-u-1">
												<h3 class="left">Room Rates</h3>
												<div class="right plusminus"></div>
											</div>
										</a>
									</div>
									<section class="tab-content show-hide-content" id="tab-two">
									  	<div class="pure-g row hide-for-small">
									  		<div class="pure-u-1">
									  			<h2>Room Rates</h2>
									  		</div>
									  	</div>
									  	<div class="pure-g row room-rate">
									  		<div class="pure-u-1 hide-for-large hide-for-medium">
									  			<div class="room-type">Royal honeymoon ocean front</div>
									  		</div>
									  		<div class="pure-u-1-3">
									  			<img src="images/hotels/landing/room-rates.jpg" alt="" class="room-img">
									  		</div>
									  		<div class="pure-u-1-3 pure-u-md-11-24">
									  			<div class="room-type hide-for-small">Royal honeymoon ocea front</div>
									  			<p class="discount hide-for-small">32% Discount per room!</p>
									  			<p><a href="">+ Room details</a></p>
									  			<p class="hide-for-small">Nightly rate and Cacnellation Policy</p>
									  		</div>
									  		<div class="pure-u-1-3 pure-u-md-5-24 pricing">
									  			<div class="nights">Total 3 nights</div>
									  			<div class="msrp hide-for-small">$490</div>
									  			<div class="row">
									  				<div class="price">$764</div>
									  				<div class="msrp hide-for-large right">$490</div>
									  			</div>
									  			
									  			<div class="fees hide-for-small">Taxes and fees included</div>
									  			<a href="" class="button yellow-bg hide-for-small">Book</a>
									  		</div>
									  		<div class="pure-g row hide-for-large hide-for-medium">
									  			<div class="pure-u-2-3">
									  				<p class="discount italic">32% Discount per room!</p>
									  				<p class="nightly">Nightly rate and Cacnellation Policy</p>
									  			</div>
									  			<div class="pure-u-1-3">
									  				<a href="" class="button yellow-bg">Book</a>
									  			</div>
									  		</div>
									  	</div>
									  	<div class="pure-g row">
									  		<div class="pure-u-1">
									  			<hr>
									  		</div>
									  	</div>
									  	<div class="pure-g row room-rate">
									  		<div class="pure-u-1 hide-for-large hide-for-medium">
									  			<div class="room-type">Royal honeymoon ocean front</div>
									  		</div>
									  		<div class="pure-u-1-3">
									  			<img src="images/hotels/landing/room-rates.jpg" alt="" class="room-img">
									  		</div>
									  		<div class="pure-u-1-3 pure-u-md-11-24">
									  			<div class="room-type hide-for-small">Royal honeymoon ocea front</div>
									  			<p class="discount hide-for-small">32% Discount per room!</p>
									  			<p><a href="">+ Room details</a></p>
									  			<p class="hide-for-small">Nightly rate and Cacnellation Policy</p>
									  		</div>
									  		<div class="pure-u-1-3 pure-u-md-5-24 pricing">
									  			<div class="nights">Total 3 nights</div>
									  			<div class="msrp hide-for-small">$490</div>
									  			<div class="row">
									  				<div class="price">$764</div>
									  				<div class="msrp hide-for-large right">$490</div>
									  			</div>
									  			
									  			<div class="fees hide-for-small">Taxes and fees included</div>
									  			<a href="" class="button yellow-bg hide-for-small">Book</a>
									  		</div>
									  		<div class="pure-g row hide-for-large hide-for-medium">
									  			<div class="pure-u-2-3">
									  				<p class="discount italic">32% Discount per room!</p>
									  				<p class="nightly">Nightly rate and Cacnellation Policy</p>
									  			</div>
									  			<div class="pure-u-1-3">
									  				<a href="" class="button yellow-bg">Book</a>
									  			</div>
									  		</div>
									  	</div>									  	<div class="pure-g row">
									  		<div class="pure-u-1">
									  			<hr>
									  		</div>
									  	</div>
									  	<div class="pure-g row room-rate">
									  		<div class="pure-u-1 hide-for-large hide-for-medium">
									  			<div class="room-type">Royal honeymoon ocean front</div>
									  		</div>
									  		<div class="pure-u-1-3">
									  			<img src="images/hotels/landing/room-rates.jpg" alt="" class="room-img">
									  		</div>
									  		<div class="pure-u-1-3 pure-u-md-11-24">
									  			<div class="room-type hide-for-small">Royal honeymoon ocea front</div>
									  			<p class="discount hide-for-small">32% Discount per room!</p>
									  			<p><a href="">+ Room details</a></p>
									  			<p class="hide-for-small">Nightly rate and Cacnellation Policy</p>
									  		</div>
									  		<div class="pure-u-1-3 pure-u-md-5-24 pricing">
									  			<div class="nights">Total 3 nights</div>
									  			<div class="msrp hide-for-small">$490</div>
									  			<div class="row">
									  				<div class="price">$764</div>
									  				<div class="msrp hide-for-large right">$490</div>
									  			</div>
									  			
									  			<div class="fees hide-for-small">Taxes and fees included</div>
									  			<a href="" class="button yellow-bg hide-for-small">Book</a>
									  		</div>
									  		<div class="pure-g row hide-for-large hide-for-medium">
									  			<div class="pure-u-2-3">
									  				<p class="discount italic">32% Discount per room!</p>
									  				<p class="nightly">Nightly rate and Cacnellation Policy</p>
									  			</div>
									  			<div class="pure-u-1-3">
									  				<a href="" class="button yellow-bg">Book</a>
									  			</div>
									  		</div>
									  	</div>
									</section>
								</div>
								<div class="show-hide-wrap">
									<div class="section-top hide-for-large hide-for-medium pure-g row">
										<a class="show-hide-link">
											<div class="pure-u-1">
												<h3 class="left">User Reviews</h3>
												<div class="right plusminus"></div>
											</div>
										</a>
									</div>
									<section class="tab-content show-hide-content" id="tab-three">
									 	<div class="pure-g row hide-for-small">
									  		<div class="pure-u-1">
									  			<h2>User Reviews</h2>
									  		</div>
									  	</div>
									  	<div class="pure-g row">
									  		<div class="pure-u-1-3 pure-u-md-1-4">
									  			<div class="rating">
									  				<p><span>4.5</span>/5</p>
													<p class="italic">Very good!</p>
									  			</div>
												<div class="tripadvisor-rating">
													<i class="icon icon-tripadvisor"></i> 4/5 Very Good!<br>
													Trip Advisor Reviews
												</div>
									  		</div>
									  		<div class="pure-u-2-3 pure-u-md-3-4 ratings-table">
									  			<div class="pure-g row">
									  				<div class="pure-u-1 pure-u-md-1-2">
									  					<div class="rating-num left"><span>4.5</span>/5</div> Stay
									  				</div>
									  				<div class="pure-u-1 pure-u-md-1-2">
									  					<div class="rating-num left"><span>4.5</span>/5</div> Service
									  				</div>
									  			</div>
									  			<div class="pure-g row">
									  				<div class="pure-u-1 pure-u-md-1-2">
									  					<div class="rating-num left"><span>4.5</span>/5</div> Room Conditions
									  				</div>
									  				<div class="pure-u-1 pure-u-md-1-2">
									  					<div class="rating-num left"><span>4.5</span>/5</div> Price Quality
									  				</div>
									  			</div>
									  			<div class="pure-g row">
									  				<div class="pure-u-1 pure-u-md-1-2">
									  					<div class="rating-num left"><span>4.5</span>/5</div> Cleanliness of the room
									  				</div>
									  				<div class="pure-u-1 pure-u-md-1-2">
									  					<div class="rating-num left"><span>4.5</span>/5</div> Room Comfort
									  				</div>
									  			</div>
									  		</div>
									  	</div>
									  	<div class="pure-g row">
									  		<div class="pure-u-1 pure-u-md-3-4 right">
									  			<hr>
									  		</div>
									  	</div>
									  	<div class="pure-g row user-rating">
									  		<div class="pure-u-1-3 pure-u-md-1-4">
									  			<div class="name">Marciela</div>
									  			<div class="user-num">3.7/5</div>
									  			<div class="date">
									  				Family<br>
									  				5/7/2017
									  			</div>
									  		</div>
									  		<div class="pure-u-2-3 pure-u-md-3-4 user-rating-text">
									  			<div class="recommend right">I'd recommend it!</div>
									  			<p>The best: <br>
									  			<br>
									  			La atención del personal ,siempre pendientes de q te la pases bien , y la comida rica y variada</p>
									  		</div>
									  	</div>
									  	<div class="pure-g row">
									  		<div class="pure-u-1 pure-u-md-3-4 right">
									  			<hr>
									  		</div>
									  	</div>
									  	<div class="pure-g row user-rating">
									  		<div class="pure-u-1-3 pure-u-md-1-4">
									  			<div class="name">Erica Betiana</div>
									  			<div class="user-num">3.7/5</div>
									  			<div class="date">
									  				Family<br>
									  				5/7/2017
									  			</div>
									  		</div>
									  		<div class="pure-u-2-3 pure-u-md-3-4 user-rating-text">
									  			<div class="recommend right">I'd recommend it!</div>
									  			<p>The best: <br>
									  			<br>
									  			La atención del personal ,siempre pendientes de q te la pases bien , y la comida rica y variada</p>
									  		</div>
									  	</div>
									  	<div class="pure-g row">
									  		<div class="pure-u-1 pure-u-md-3-4 right">
									  			<hr>
									  		</div>
									  	</div>
									  	<div class="pure-g row user-rating">
									  		<div class="pure-u-1-3 pure-u-md-1-4">
									  			<div class="name">Teresa</div>
									  			<div class="user-num">3.7/5</div>
									  			<div class="date">
									  				Family<br>
									  				5/7/2017
									  			</div>
									  		</div>
									  		<div class="pure-u-2-3 pure-u-md-3-4 user-rating-text">
									  			<div class="recommend right">I'd recommend it!</div>
									  			<p>The best: <br>
									  			<br>
									  			La atención del personal ,siempre pendientes de q te la pases bien , y la comida rica y variada</p>
									  		</div>
									  	</div>
									  	<div class="pure-g row">
									  		<div class="pure-u-1 pure-u-md-3-4 right">
									  			<hr>
									  		</div>
									  	</div>
									  	<div class="pure-g row">
									  		<div class="pure-u-1">
									  			<a href="" class="button reviews clear">Load more reviews</a>
									  		</div>
									  	</div>
									</section>
								</div>
								<div class="show-hide-wrap">
									<div class="section-top hide-for-large hide-for-medium pure-g row">
										<a class="show-hide-link">
											<div class="pure-u-1">
												<h3 class="left">Location</h3>
												<div class="right plusminus"></div>
											</div>
										</a>
									</div>
									<section class="tab-content show-hide-content" id="tab-four">
									 	<img src="images/hotels/landing/map.jpg" alt="" class="map">
									</section>
								</div>
								
							</div>
						</div>
					</div>
					<div class="swiper-container gallery-bottom hide-for-large hide-for-medium">
						<div class="pure-g row">
							<div class="pure-u-1">
								<h2>Similar Hotels</h2>
							</div>
						</div>
				        <div class="swiper-wrapper">
				            <div class="swiper-slide">
				            	<a href="">
				            		<div class="hotel-wrap">
										<img src="images/hotels/search-results/result1.jpg">
										<div class="pure-g row">
											<div class="pure-u-3-4">
												<p>Bel Air Collection Resort and Spa Cancun Adults Only</p>
											</div>
											<div class="pure-u-1-4 price">
												$245
											</div>
										</div>
										<div class="pure-g row">
											<div class="pure-u-1 star-rating">
											<i class="icon icon-star left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-half-star-small left"></i>
												<div class="hotel-zone italic left">Punta Cancun Hotel Zone</div>
											</div>
										</div>
									</div>
				            	</a>
				            </div>
				            <div class="swiper-slide">
								<a href="">
									<div class="hotel-wrap">
										<img src="images/hotels/search-results/result3.jpg">
										<div class="pure-g row">
											<div class="pure-u-3-4">
												<p>Bel Air Collection Resort and Spa Cancun Adults Only</p>
											</div>
											<div class="pure-u-1-4 price">
												$239
											</div>
										</div>
										<div class="pure-g row">
											<div class="pure-u-1 star-rating">
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-half-star-small left"></i>
												<div class="hotel-zone italic left">Punta Cancun Hotel Zone</div>
											</div>
										</div>
									</div>
								</a>
				            </div>
				            <div class="swiper-slide">
				            	<a href="">
				            		<div class="hotel-wrap">
										<img src="images/hotels/search-results/result2.jpg">
										<div class="pure-g row">
											<div class="pure-u-3-4">
												<p>Bel Air Collection Resort and Spa Cancun Adults Only</p>
											</div>
											<div class="pure-u-1-4 price">
												$239
											</div>
										</div>
										<div class="pure-g row">
											<div class="pure-u-1 star-rating">
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-star-small left"></i>
												<i class="icon icon-half-star-small left"></i>
												<div class="hotel-zone italic left">Punta Cancun Hotel Zone</div>
											</div>
										</div>
									</div>
				            	</a>
				            	
				            </div>
				        </div>
				    </div>
					<div class="pure-u-1 pure-u-md-7-24 sidebar hide-for-small">
						<div class="book-block">
							<div class="msrp">$299</div>
							<div class="price"><sup>$</sup>239</div>
							<p>Avg. per night/Taxes included</p>
							<a href="" class="button yellow-bg">Choose a room</a>
						</div>
						<div class="filter-box">
							<div class="pure-g row">
								<span id="landing-dates" class="fusion-dates" data-date-output="#landing-dates .fusion-date-checkin,#landing-dates .fusion-date-checkout">
									<div class="pure-u-1-2">
										<h4 class="gray hide-for-small">Check-In</h4>
										<div class="date"><span class="number">21</span> / June</div>
										<a><i class="icon icon-arrow-down-small hide-for-small"></i></a>
										<input id="fusion-checkin" class="fusion-date-checkin pure-input-1 curved ie-curved fusion-readonly dark fusion-date-input" value="Arrive" type="text" readonly="readonly" hidden>
									</div>
									<div class="pure-u-1-2">
										<h4 class="gray hide-for-small">Check-Out</h4>
										<div class="date"><span class="number">27</span> / June</div>
										<a><i class="icon icon-arrow-down-small hide-for-small"></i></a>
										<input id="fusion-checkout" class="fusion-date-checkout pure-input-1 curved ie-curved fusion-readonly dark fusion-date-input" value="Depart" type="text" readonly="readonly" hidden>
									</div>
								</span>
							</div>
							<div class="pure-g row">
								<div class="pure-u-1-2">
									<h4 class="gray">Guests</h4>
									<div class="guests"><span class="number"><select name="guests_num" id="">
										<option value="1" selected>1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
									</select></span></div>
									<a><i class="icon icon-arrow-down-small hide-for-small"></i></a>
								</div>
								<div class="pure-u-1-2">
									<h4 class="gray">Rooms</h4>
									<div class="rooms"><span class="number"><select name="room_num" id="">
										<option value="1" selected>1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
									</select></span></div>
									<a><i class="icon icon-arrow-down-small hide-for-small"></i></a>
								</div>
							</div>
						</div>
						<h2>Location</h2>
						<img src="images/hotels/landing/map-thumbnail.jpg" alt="" class="map">
						<a href="" class="button clear"><i class="icon icon-heart"></i> Save to wishlist</a>
						<div class="pure-g row">
							<div class="pure-u-1">
								<div class="social-section">
									<i class="icon icon-facebook left"></i>
									<i class="icon icon-twitter left"></i>
									<i class="icon icon-email left"></i>
								</div>
							</div>
						</div>
						<div class="similar-hotels">
							<h2>Similar Hotels</h2>
							<div class="hotel-wrap">
								<img src="images/hotels/search-results/result1.jpg">
								<div class="pure-g row">
									<div class="pure-u-3-4">
										<p>Bel Air Collection Resort and Spa Cancun Adults Only</p>
									</div>
									<div class="pure-u-1-4 price">
										$245
									</div>
								</div>
								<div class="pure-g row">
									<div class="pure-u-1 star-rating">
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-half-star-small left"></i>
										<div class="hotel-zone italic left">Punta Cancun Hotel Zone</div>
									</div>
								</div>
							</div>
							<div class="hotel-wrap">
								<img src="images/hotels/search-results/result3.jpg">
								<div class="pure-g row">
									<div class="pure-u-3-4">
										<p>Bel Air Collection Resort and Spa Cancun Adults Only</p>
									</div>
									<div class="pure-u-1-4 price">
										$239
									</div>
								</div>
								<div class="pure-g row">
									<div class="pure-u-1 star-rating">
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-half-star-small left"></i>
										<div class="hotel-zone italic left">Punta Cancun Hotel Zone</div>
									</div>
								</div>
							</div>
							<div class="hotel-wrap">
								<img src="images/hotels/search-results/result2.jpg">
								<div class="pure-g row">
									<div class="pure-u-3-4">
										<p>Bel Air Collection Resort and Spa Cancun Adults Only</p>
									</div>
									<div class="pure-u-1-4 price">
										$239
									</div>
								</div>
								<div class="pure-g row">
									<div class="pure-u-1 star-rating">
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-star-small left"></i>
										<i class="icon icon-half-star-small left"></i>
										<div class="hotel-zone italic left">Punta Cancun Hotel Zone</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<form method="POST" class="mobile-search-bar hide-for-large hide-for-medium" action="">
				<div class="fusion-container">
					<div class="pure-g row">
						<div class="pure-u-1">
							<a class="close">x</a>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1 nav-wrap">
							<nav class="gradient-bg">
								<ul>
									<li><a>Hotels</a></li>
									<li><a>Hotels + Flight</a></li>
								</ul>
							</nav>
							<div class="gradient-bg nav-fill hide-for-medium hide-for-small"></div>
						</div>
						
					</div>
					<div class="pure-g row">
						<div class="pure-u-1 flying-from">
							<h4>Flying From</h4>
							<div class="flying-from-city">San Francisco, CA</div>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1">
							<hr>
						</div>
					</div>
					<div class="pure-g row">
						<div id="mobile-dates" class="fusion-dates" data-date-output="#mobile-dates .fusion-date-checkin,#mobile-dates .fusion-date-checkout">
							<div class="pure-u-1-2 section check-in-wrap">
								<h4 class="gray">Check-In</h4>
								<div class="date"><span class="number">21</span> / June</div>
								<a><i class="icon icon-arrow-down-small"></i></a>
								<input id="fusion-checkin" class="fusion-date-checkin pure-input-1 curved ie-curved fusion-readonly dark fusion-date-input" value="Arrive" type="text" readonly="readonly" hidden>
							</div>
							<div class="pure-u-1-2 section check-out-wrap">
								<h4 class="gray">Check-Out</h4>
								<div class="date"><span class="number">27</span> / June</div>
								<a><i class="icon icon-arrow-down-small"></i></a>
								<input id="fusion-checkout" class="fusion-date-checkout pure-input-1 curved ie-curved fusion-readonly dark fusion-date-input" value="Depart" type="text" readonly="readonly" hidden>
							</div>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1">
							<hr>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1-2 section">
							<h4 class="gray">Guests</h4>
							<a href=""><i class="icon icon-arrow-down-small right"></i></a>
							<div class="guests"><span class="number"><select name="guests_num" id="">
										<option value="1" selected>1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
									</select></span></div>
						</div>
						<div class="pure-u-1-2 section">
							<h4 class="gray">Rooms</h4>
							<a href=""><i class="icon icon-arrow-down-small right"></i></a>
							<div class="rooms"><span class="number"><select name="room_num" id="">
										<option value="1" selected>1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
									</select></span></div>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1">
							<h4>
								Room 1
							</h4>
						</div>
					</div>
					<div class="pure-g row counter-row">
						<div class="pure-u-7-12">
							<p>Adults</p>
						</div>
						<div class="pure-u-5-12">
							<div class="adults counter">
								<div class="circle minus left">
									-
								</div>
								<div class="circle plus right">
									+
								</div>
								<div class="counter-number">2</div>
								<input type="text" class="counter-number-input" name="adults" hidden>
							</div>
						</div>
					</div>
					<div class="pure-g row counter-row">
						<div class="pure-u-7-12">
							<p>Children</p>
						</div>
						<div class="pure-u-5-12">
							<div class="children counter">
								<div class="circle minus left">
									-
								</div>
								<div class="circle plus right">
									+
								</div>
								<div class="counter-number">1</div>
								<input type="text" class="counter-number" name="children" hidden>
							</div>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1">
							<hr>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1">
							<h4>Age of Children</h4>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1-2">
							<p>Child 1</p>
						</div>
						<div class="pure-u-1-2">
							<div class="fusion-select">
								<i class="icon icon-arrow-down-small"></i>
								<select name="child-age" id="child-age" dir="rtl">
									<option value="0-17" selected>0-17</option>
									<option value=">2">>2</option>
									<option value="10">10</option>
								</select>
							</div>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1">
							<hr>
						</div>
					</div>
				</div>
			</form>
		</main>
		<div class="fusion-overlay inactive"></div>
		<?php include ("views/includes/footer.php"); ?>
		<!-- Swiper JS -->
   		<script src="https://cdn.rawgit.com/nolimits4web/Swiper/d9f17789/dist/js/swiper.min.js"></script>
		<script src="js/hotels/landing.js?version=1"></script>
	</div>
</html>