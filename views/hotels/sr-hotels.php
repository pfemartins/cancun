<!doctype html>
<html class="no-js" lang="en">
<head>
      <?php include ("views/includes/head.php"); ?>
<link rel="stylesheet" href="css/hotels/search-results.css"> 
</head>
<body>
	<div id="fusion" class="sr-hotels">
		<?php include ("views/includes/header.php"); ?>
		<main id="hotels">
			<form action="" method="POST">
				<div class="fusion-container">
					<div class="pure-g row filter-box">
						<span id="landing-dates" class="fusion-dates" data-date-output="#landing-dates .fusion-date-checkin,#landing-dates .fusion-date-checkout">
							<div class="pure-u-1-4 pure-u-md-5-24 section check-in-wrap">
								<h4 class="pink hide-for-small">Check-In</h4>
								<div class="date"><span class="number">21</span> / June</div>
								<a><i class="icon icon-arrow-down hide-for-small"></i></a>
								<input id="fusion-checkin" class="fusion-date-checkin pure-input-1 curved ie-curved fusion-readonly dark fusion-date-input" value="Arrive" type="text" readonly="readonly" hidden>
							</div>
							<div class="pure-u-1-4 pure-u-md-5-24 section check-out-wrap">
								<h4 class="pink hide-for-small">Check-Out</h4>
								<div class="date"><span class="number">27</span> / June</div>
								<a><i class="icon icon-arrow-down hide-for-small"></i></a>
								<input id="fusion-checkout" class="fusion-date-checkout pure-input-1 curved ie-curved fusion-readonly dark fusion-date-input" value="Depart" type="text" readonly="readonly" hidden>
							</div>
						</span>
						<div class="pure-u-1-4 pure-u-md-4-24 section">
							<h4 class="pink">Guests</h4>
							<div class="guests"><span class="number"><select name="guests_num" id="">
								<option value="1" selected>1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
							</select></span></div>
							<a><i class="icon icon-arrow-down hide-for-small"></i></a>
						</div>
						<div class="pure-u-1-4 pure-u-md-4-24 section">
							<h4 class="pink">Rooms</h4>
							<div class="rooms"><span class="number"><select name="room_num" id="">
								<option value="1" selected>1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
							</select></span></div>
							<a><i class="icon icon-arrow-down hide-for-small"></i></a>
						</div>
						<div class="pure-u-1-4 pure-u-md-6-24 section hide-for-small last">
							<div class="location"><select name="location" id="">
								<option value="cozumel" selected>Cozumel</option>
								<option value="xel-ha">Xel-Ha</option>
								<option value="puerto-vallarta">Puerto Vallarta</option>
							</select></div>
							<a><i class="icon icon-arrow-down hide-for-small last"></i></a>
							<button class="purple update-search">Update Search</button>
						</div>
					</div>

					<div class="pure-g row">
						<div class="pure-u-md-7-24 hide-for-small filters-sidebar">
							<input type="hidden" name="price-range" value="">
							<input type="hidden" name="star-rating" value="">
							<input type="hidden" name="tripadvisor-rating" value="">
							<h3>Filters</h3>
							<hr>
							<div class="matches pink">116 matches</div>
							<label for="hotel-name">Hotel name</label>
							<input type="text" id="hotel-name">
							<hr>
							<label for="price-range">Price Range per night</label>
							<div id="price-range"></div>
							<div class="section-wrap">
								<div class="price-low left">from: $530</div>
								<div class="price-high right">to: $<span id="price-high-value">1,700</span></div>
							</div>
							<input type="hidden" name="priceValue" id="priceValue" value="1700">
							<hr>
							<div class="section-wrap">
								<label for="star-rating">Star rating  <i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i></label>
								<div id="star-rating"></div>
								<div class="value-wrap">
									<div class="star-low left">from: 2.0</div>
									<div class="star-high right">to: <span id="star-rating-value">4.8</span></div>
								</div>
							</div>
							<input type="hidden" name="starValue" id="starValue" value="4.8">
							<hr>
							<div class="section-wrap">
								<label for="tripadvisor-rating">TripAdvisor rating  <i class="icon icon-tripadvisor"></i></label>
								<div id="tripadvisor-rating"></div>
								<div class="value-wrap">
									<div class="star-low left">from: 2.5</div>
									<div class="star-high right">to: <span id="tripadvisor-rating-value">4.8</span></div>
								</div>
							</div>
							<input type="hidden" name="tripAdvisorValue" id="tripAdvisorValue" value="4.8">
							<hr>
							<h5>Amenities</h5>
							<label><input type="checkbox" name="amenities" value="wifi"> Wireless internet (89)</label>
							<label><input type="checkbox" name="amenities" value="pool"> Pool(s) (83)</label>
							<label><input type="checkbox" name="amenities" value="beach"> Beach (51)</label>
							<a href="">See more...</a>
							<hr>
							<h5>Meal Plan</h5>
							<label><input type="checkbox" name="meal-plan" value="all inclusive"> All Inclusive (33)</label>
							<label><input type="checkbox" name="meal-plan" value="room only"> Room Only (43)</label>
							<label><input type="checkbox" name="meal-plan" value="continental breakfast"> Continental Breakfast Include (10)</label>
							<a href="">See more...</a>
							<hr>
							<h5>Theme</h5>
							<label><input type="checkbox" name="theme" value="all inclusive"> All Inclusive (33)</label>
							<label><input type="checkbox" name="theme" value="beach"> Beach (63)</label>
							<label><input type="checkbox" name="theme" value="family"> Family (37)</label>
							<a href="">See more...</a>
							<hr>
							<h5>City/Zone</h5>
							<label><input type="checkbox" name="city-zone" value="cancun hotel zone carribbean sea"> Cancun Hotel Zone Caribbean Sea (33)</label>
							<label><input type="checkbox" name="city-zone" value="punta cancun cancun hotel zone"> Punta Cancun Cancun Hotel Zone (5)</label>
							<label><input type="checkbox" name="city-zone" value="puerto juare cancun hotel zone"> Puerto Juare Cancun Hotel Zone (37)</label>
							<a href="">See more...</a>
							<hr>
							<h5>Chain</h5>
							<label><input type="checkbox" name="theme" value="oasis"> Oasis (5)</label>
							<label><input type="checkbox" name="theme" value="playa resorts"> Playa Resorts (4)</label>
							<label><input type="checkbox" name="theme" value="beach"> Secrets (2)</label>
							<a href="">See more...</a>
						</div> <!-- end filters sidebar -->
						<div class="pure-u-1 pure-u-md-17-24 results-list">
							<div class="pure-g row">
								<div class="pure-u-1">
									<div class="sort-wrap left fusion-select">
										<i class="icon icon-arrow-down-small"></i>
											Sort By: <select name="sort-by" id="sort-by">
												<option value="recommended" selected>Recommended</option>
												<option value="price-low">Price - Low</option>
												<option value="price-high">Price - High</option>
											</select>
									</div>
									<div class="sort-view right hide-for-small">
										<a href=""><i class="icon icon-map-light"></i></a>
										<a href=""><i class="icon icon-list-dark"></i></a>
									</div>
									<a class="button mobile-filters-button hide-for-large hide-for-medium">Filters</a>
								</div>
							</div>
							<div class="pure-g row result">
								<div class="pure-u-1 pure-u-md-1-3 hotel-img">
									<img src="images/hotels/search-results/result1.jpg">
								</div>
								<div class="pure-u-3-4 pure-u-md-11-24 hotel-info">
									<h3 class="purple">Grand Fiesta Americana Coral Beach Cancun</h3>
									<div class="pure-g row stars">
										<div class="pure-u-1-3">
											<div class="stars">
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-half-star"></i>
											</div>
										</div>
										<div class="pure-u-2-3">
											<div class="area">
												Punta Cancun Hotel Zone
											</div>
										</div>
									</div>
									<div class="pure-g row ratings">
										<div class="pure-u-10-24 user-ratings">
											3.9/5 User Rating
										</div>
										<div class="pure-u-1-2 trip-advisor-ratings">
											<i class="icon icon-tripadvisor"></i>  4/5 Very Good!
										</div>
									</div>
									<div class="pure-g row includes hide-for-small">
										<div class="pure-u-1">
											<h5>All-Inclusive</h5>
											<div class="amenities">
												<i class="icon icon-wifi"></i>
												<i class="icon icon-room-service"></i>
												<i class="icon icon-pool"></i>
												<i class="icon icon-gym"></i>
												<i class="icon icon-spa"></i>
											</div>
										</div>
										
									</div>
								</div>
								<div class="pure-u-6-24 pure-u-md-5-24 price-wrap">
									<div class="retail">$299</div>
									<div class="price"><sup>$</sup>239</div>
									<p>Avg. per night<br>
									Taxes included</p>
									<a href="" class="button purple-bg hide-for-small">Book</a>
								</div>
								<div class="pure-u-1 mobile-button hide-for-medium hide-for-large">
									<a href="" class="button purple-bg">Book</a>
								</div>
							</div>
							<div class="pure-g row result">
								<div class="pure-u-1 pure-u-md-1-3 hotel-img">
									<img src="images/hotels/search-results/result2.jpg">
								</div>
								<div class="pure-u-3-4 pure-u-md-11-24 hotel-info">
									<h3 class="purple">Bel Air Collection Resort and Spa Cancun Adults Only</h3>
									<div class="pure-g row stars">
										<div class="pure-u-1-3">
											<div class="stars">
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-half-star"></i>
											</div>
										</div>
										<div class="pure-u-2-3">
											<div class="area">
												Punta Cancun Hotel Zone
											</div>
										</div>
									</div>
									<div class="pure-g row ratings">
										<div class="pure-u-10-24 user-ratings">
											3.9/5 User Rating
										</div>
										<div class="pure-u-1-2 trip-advisor-ratings">
											<i class="icon icon-tripadvisor"></i>  4/5 Very Good!
										</div>
									</div>
									<div class="pure-g row includes hide-for-small">
										<div class="pure-u-1">
											<h5>All-Inclusive</h5>
											<div class="amenities">
												<i class="icon icon-wifi"></i>
												<i class="icon icon-room-service"></i>
												<i class="icon icon-pool"></i>
												<i class="icon icon-gym"></i>
												<i class="icon icon-spa"></i>
											</div>
										</div>
										
									</div>
								</div>
								<div class="pure-u-6-24 pure-u-md-5-24 price-wrap">
									<div class="retail">$299</div>
									<div class="price"><sup>$</sup>239</div>
									<p>Avg. per night<br>
									Taxes included</p>
									<a href="" class="button purple-bg hide-for-small">Book</a>
								</div>
								<div class="pure-u-1 mobile-button hide-for-medium hide-for-large">
									<a href="" class="button purple-bg">Book</a>
								</div>
							</div>
							<div class="pure-g row result">
								<div class="pure-u-1 pure-u-md-1-3 hotel-img">
									<img src="images/hotels/search-results/result3.jpg">
								</div>
								<div class="pure-u-3-4 pure-u-md-11-24 hotel-info">
									<h3 class="purple">Grand Fiesta Americana Coral Beach Cancun</h3>
									<div class="pure-g row stars">
										<div class="pure-u-1-3">
											<div class="stars">
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-half-star"></i>
											</div>
										</div>
										<div class="pure-u-2-3">
											<div class="area">
												Punta Cancun Hotel Zone
											</div>
										</div>
									</div>
									<div class="pure-g row ratings">
										<div class="pure-u-10-24 user-ratings">
											3.9/5 User Rating
										</div>
										<div class="pure-u-1-2 trip-advisor-ratings">
											<i class="icon icon-tripadvisor"></i>  4/5 Very Good!
										</div>
									</div>
									<div class="pure-g row includes hide-for-small">
										<div class="pure-u-1">
											<h5>All-Inclusive</h5>
											<div class="amenities">
												<i class="icon icon-wifi"></i>
												<i class="icon icon-room-service"></i>
												<i class="icon icon-pool"></i>
												<i class="icon icon-gym"></i>
												<i class="icon icon-spa"></i>
											</div>
										</div>
										
									</div>
								</div>
								<div class="pure-u-6-24 pure-u-md-5-24 price-wrap">
									<div class="retail">$299</div>
									<div class="price"><sup>$</sup>239</div>
									<p>Avg. per night<br>
									Taxes included</p>
									<a href="" class="button purple-bg hide-for-small">Book</a>
								</div>
								<div class="pure-u-1 mobile-button hide-for-medium hide-for-large">
									<a href="" class="button purple-bg">Book</a>
								</div>
							</div>
							<div class="pure-g row result">
								<div class="pure-u-1 pure-u-md-1-3 hotel-img">
									<img src="images/hotels/search-results/result1.jpg">
								</div>
								<div class="pure-u-3-4 pure-u-md-11-24 hotel-info">
									<h3 class="purple">Grand Fiesta Americana Coral Beach Cancun</h3>
									<div class="pure-g row stars">
										<div class="pure-u-1-3">
											<div class="stars">
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-half-star"></i>
											</div>
										</div>
										<div class="pure-u-2-3">
											<div class="area">
												Punta Cancun Hotel Zone
											</div>
										</div>
									</div>
									<div class="pure-g row ratings">
										<div class="pure-u-10-24 user-ratings">
											3.9/5 User Rating
										</div>
										<div class="pure-u-1-2 trip-advisor-ratings">
											<i class="icon icon-tripadvisor"></i>  4/5 Very Good!
										</div>
									</div>
									<div class="pure-g row includes hide-for-small">
										<div class="pure-u-1">
											<h5>All-Inclusive</h5>
											<div class="amenities">
												<i class="icon icon-wifi"></i>
												<i class="icon icon-room-service"></i>
												<i class="icon icon-pool"></i>
												<i class="icon icon-gym"></i>
												<i class="icon icon-spa"></i>
											</div>
										</div>
										
									</div>
								</div>
								<div class="pure-u-6-24 pure-u-md-5-24 price-wrap">
									<div class="retail">$299</div>
									<div class="price"><sup>$</sup>239</div>
									<p>Avg. per night<br>
									Taxes included</p>
									<a href="" class="button purple-bg hide-for-small">Book</a>
								</div>
								<div class="pure-u-1 mobile-button hide-for-medium hide-for-large">
									<a href="" class="button purple-bg">Book</a>
								</div>
							</div>
							<div class="pure-g row result">
								<div class="pure-u-1 pure-u-md-1-3 hotel-img">
									<img src="images/hotels/search-results/result2.jpg">
								</div>
								<div class="pure-u-3-4 pure-u-md-11-24 hotel-info">
									<h3 class="purple">Bel Air Collection Resort and Spa Cancun Adults Only</h3>
									<div class="pure-g row stars">
										<div class="pure-u-1-3">
											<div class="stars">
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-half-star"></i>
											</div>
										</div>
										<div class="pure-u-2-3">
											<div class="area">
												Punta Cancun Hotel Zone
											</div>
										</div>
									</div>
									<div class="pure-g row ratings">
										<div class="pure-u-10-24 user-ratings">
											3.9/5 User Rating
										</div>
										<div class="pure-u-1-2 trip-advisor-ratings">
											<i class="icon icon-tripadvisor"></i>  4/5 Very Good!
										</div>
									</div>
									<div class="pure-g row includes hide-for-small">
										<div class="pure-u-1">
											<h5>All-Inclusive</h5>
											<div class="amenities">
												<i class="icon icon-wifi"></i>
												<i class="icon icon-room-service"></i>
												<i class="icon icon-pool"></i>
												<i class="icon icon-gym"></i>
												<i class="icon icon-spa"></i>
											</div>
										</div>
										
									</div>
								</div>
								<div class="pure-u-6-24 pure-u-md-5-24 price-wrap">
									<div class="retail">$299</div>
									<div class="price"><sup>$</sup>239</div>
									<p>Avg. per night<br>
									Taxes included</p>
									<a href="" class="button purple-bg hide-for-small">Book</a>
								</div>
								<div class="pure-u-1 mobile-button hide-for-medium hide-for-large">
									<a href="" class="button purple-bg">Book</a>
								</div>
							</div>
							<div class="pure-g row result">
								<div class="pure-u-1 pure-u-md-1-3 hotel-img">
									<img src="images/hotels/search-results/result3.jpg">
								</div>
								<div class="pure-u-3-4 pure-u-md-11-24 hotel-info">
									<h3 class="purple">Grand Fiesta Americana Coral Beach Cancun</h3>
									<div class="pure-g row stars">
										<div class="pure-u-1-3">
											<div class="stars">
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-star"></i>
												<i class="icon icon-half-star"></i>
											</div>
										</div>
										<div class="pure-u-2-3">
											<div class="area">
												Punta Cancun Hotel Zone
											</div>
										</div>
									</div>
									<div class="pure-g row ratings">
										<div class="pure-u-10-24 user-ratings">
											3.9/5 User Rating
										</div>
										<div class="pure-u-1-2 trip-advisor-ratings">
											<i class="icon icon-tripadvisor"></i>  4/5 Very Good!
										</div>
									</div>
									<div class="pure-g row includes hide-for-small">
										<div class="pure-u-1">
											<h5>All-Inclusive</h5>
											<div class="amenities">
												<i class="icon icon-wifi"></i>
												<i class="icon icon-room-service"></i>
												<i class="icon icon-pool"></i>
												<i class="icon icon-gym"></i>
												<i class="icon icon-spa"></i>
											</div>
										</div>
										
									</div>
								</div>
								<div class="pure-u-6-24 pure-u-md-5-24 price-wrap">
									<div class="retail">$299</div>
									<div class="price"><sup>$</sup>239</div>
									<p>Avg. per night<br>
									Taxes included</p>
									<a href="" class="button purple-bg hide-for-small">Book</a>
								</div>
								<div class="pure-u-1 mobile-button hide-for-medium hide-for-large">
									<a href="" class="button purple-bg">Book</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</form>
			<form method="POST" class="mobile-search-bar hide-for-large hide-for-medium" action="">
				<div class="fusion-container">
					<div class="pure-g row">
						<div class="pure-u-1">
							<a class="close">x</a>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1 nav-wrap">
							<nav class="purple-bg">
								<ul>
									<li><a>Hotels</a></li>
									<li><a>Hotels + Flight</a></li>
								</ul>
							</nav>
							<div class="purple-bg purple-fill hide-for-medium hide-for-small"></div>
						</div>
						
					</div>
					<div class="pure-g row">
						<div id="mobile-dates" class="fusion-dates" data-date-output="#mobile-dates .fusion-date-checkin,#mobile-dates .fusion-date-checkout">
							<div class="pure-u-1-2 section check-in-wrap">
								<h4 class="pink">Check-In</h4>
								<div class="date"><span class="number">21</span> / June</div>
								<a><i class="icon icon-arrow-down"></i></a>
								<input id="fusion-checkin" class="fusion-date-checkin pure-input-1 curved ie-curved fusion-readonly dark fusion-date-input" value="Arrive" type="text" readonly="readonly" hidden>
							</div>
							<div class="pure-u-1-2 section check-out-wrap">
								<h4 class="pink">Check-Out</h4>
								<div class="date"><span class="number">27</span> / June</div>
								<a><i class="icon icon-arrow-down"></i></a>
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
							<h4 class="pink">Guests</h4>
							<a href=""><i class="icon icon-arrow-down right"></i></a>
							<div class="date"><span class="number">02</span></div>
						</div>
						<div class="pure-u-1-2 section">
							<h4 class="pink">Rooms</h4>
							<a href=""><i class="icon icon-arrow-down right"></i></a>
							<div class="date"><span class="number">01</span></div>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1">
							<hr>
						</div>
					</div>
					<div class="pure-g row">
						<div class="pure-u-1">
							<h4 class="pink">Area</h4>
							<div class="fusion-select">
								<i class="icon icon-arrow-down-small"></i>
								<select name="area" id="area">
									<option value="recommended" selected>All Cancun</option>
									<option value="price-low">Price - Low</option>
									<option value="price-high">Price - High</option>
								</select>
							</div>
						</div>
						<div class="pure-g row">
							<div class="pure-u-1">
								<button class="purple-bg">
									Go!
								</button>
							</div>
						</div>
						<div class="pure-g row">
							<div class="pure-u-1">
								<a class="more-filters purple">
									+ More filters
								</a>
							</div>
						</div>
						<div class="additional-filters" style="display: none;">
							<div class="pure-g row pink-bg">
								<div class="pure-u-1">
									<h3>Filters</h3>
								</div>
							</div>
							<div class="pure-g row">
								<div class="pure-u-1 filters-sidebar">
									<input type="hidden" name="price-range" value="">
									<input type="hidden" name="star-rating" value="">
									<input type="hidden" name="tripadvisor-rating" value="">
									<label for="price-range">Price Range per night</label>
									<div id="mobile-price-range"></div>
									<div class="section-wrap">
										<div class="price-low left">from: $530</div>
										<div class="price-high right">to: $<span id="mobile-price-high-value">1,700</span></div>
									</div>
									<input type="hidden" name="priceValue" id="mobile-priceValue" value="1700">
									<hr>
									<div class="section-wrap">
										<label for="star-rating">Star rating  <i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i></label>
										<div id="mobile-star-rating"></div>
										<div class="value-wrap">
											<div class="star-low left">from: 2.0</div>
											<div class="star-high right">to: <span id="mobile-star-rating-value">4.8</span></div>
										</div>
									</div>
									<input type="hidden" name="starValue" id="mobile-starValue" value="4.8">
									<hr>
									<div class="section-wrap">
										<label for="tripadvisor-rating">TripAdvisor rating  <i class="icon icon-tripadvisor"></i></label>
										<div id="mobile-tripadvisor-rating"></div>
										<div class="value-wrap">
											<div class="star-low left">from: 2.5</div>
											<div class="star-high right">to: <span id="mobile-tripadvisor-rating-value">4.8</span></div>
										</div>
									</div>
									<input type="hidden" name="tripAdvisorValue" id="mobile-tripAdvisorValue" value="4.8">
									<hr>
									<h5>Amenities</h5>
									<label><input type="checkbox" name="amenities" value="wifi"> Wireless internet (89)</label>
									<label><input type="checkbox" name="amenities" value="pool"> Pool(s) (83)</label>
									<label><input type="checkbox" name="amenities" value="beach"> Beach (51)</label>
									<a href="">See more...</a>
									<hr>
									<h5>Meal Plan</h5>
									<label><input type="checkbox" name="meal-plan" value="all inclusive"> All Inclusive (33)</label>
									<label><input type="checkbox" name="meal-plan" value="room only"> Room Only (43)</label>
									<label><input type="checkbox" name="meal-plan" value="continental breakfast"> Continental Breakfast Include (10)</label>
									<a href="">See more...</a>
									<hr>
									<h5>Theme</h5>
									<label><input type="checkbox" name="theme" value="all inclusive"> All Inclusive (33)</label>
									<label><input type="checkbox" name="theme" value="beach"> Beach (63)</label>
									<label><input type="checkbox" name="theme" value="family"> Family (37)</label>
									<a href="">See more...</a>
									<hr>
									<h5>City/Zone</h5>
									<label><input type="checkbox" name="city-zone" value="cancun hotel zone carribbean sea"> Cancun Hotel Zone Caribbean Sea (33)</label>
									<label><input type="checkbox" name="city-zone" value="punta cancun cancun hotel zone"> Punta Cancun Cancun Hotel Zone (5)</label>
									<label><input type="checkbox" name="city-zone" value="puerto juare cancun hotel zone"> Puerto Juare Cancun Hotel Zone (37)</label>
									<a href="">See more...</a>
									<hr>
									<h5>Chain</h5>
									<label><input type="checkbox" name="theme" value="oasis"> Oasis (5)</label>
									<label><input type="checkbox" name="theme" value="playa resorts"> Playa Resorts (4)</label>
									<label><input type="checkbox" name="theme" value="beach"> Secrets (2)</label>
									<a href="">See more...</a>
									<hr>
								</div> 
							</div>
							<div class="pure-g row button-row">
								<div class="pure-u-1-2">
									<a class="button purple-bg">Go!</a>
								</div>
								<div class="pure-u-1-2">
									<a class="button purple close">Cancel</a>
								</div>
							</div>
							<div class="pure-g row">
								<div class="pure-u-1">
									<p><a class="purple hide-filters">- Hide filters</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</main>
		<div class="fusion-overlay inactive"></div>
        <?php include ("views/includes/footer.php"); ?>
		<script src="js/hotels/search-results.js?version=1"></script>
	</div>
</html>