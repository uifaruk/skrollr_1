jQuery(document).ready(function($){
	
	$(".counter_value").counterUp({
		delay:.06,
		time:100,
	});
	
	$(".team_slider").owlCarousel({
		items:3,
		loop:true,
		nav:true,
		autoplay:false,
		navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	});
	
	$(".client_slider").owlCarousel({
		items:1,
		loop:true,
		nav:true,
		autoplay:false,
		navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	});
	
	
});
