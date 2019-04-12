	$(document).ready(function() {
    	// document is loaded and DOM is ready
    	$('.carousel').carousel({
  			interval: 2000
		});
	});

	function tobooknow($param) {
   		alert("book now");
	}

  function initMap() {
    // The location of Uluru -33.943418,18.472101
    var uluru = {lat: -33.943418, lng: 18.472101};
    // The map, centered at Uluru
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  function mouseoverin($param) {
      let one = '#'+$param; 

      $(one).addClass('class1');
  }

  function mouseoverout($param) {
      let one = '#'+$param; 

      $(one).removeClass('class1');
  }
