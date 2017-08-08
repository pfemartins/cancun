populate();

function populate() {
	var navbar = document.getElementById('navbar');
	var div = document.createElement('div');
	div.classList.add('explore-regions-head');
	var header = document.createElement('h1');
	header.classList.add('explore-regions-header');
	header.innerHTML = 'Holbox';
	var text = document.createElement('p');
	text.classList.add('explore-regions-sub-header');
	text.innerText = 'The island of flamingos where you can swim with sharks and sway in a hammock in the same day.';
	var btn = document.createElement('button');
	btn.classList.add('explore-regions-header-btn');
	btn.innerHTML = 'View Gallery';
	div.appendChild(header);
	div.appendChild(document.createElement('br'));
	div.appendChild(text);
	div.appendChild(btn);
	navbar.appendChild(div);
}