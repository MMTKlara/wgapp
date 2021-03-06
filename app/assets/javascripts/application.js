// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery.purr
//= require best_in_place

$(document).ready(function() {
	// hide alert/notice bar if empty
	$("span.alert:empty, span.notice:empty").hide();
	jQuery(".best_in_place").best_in_place();
	
	$('.best_in_place').hover(
		function () {
			$(this).css("background-image", "url(/images/pen_hover.png)");
		},
		function () {
			$(this).css("background-image", "url(/images/pen_normal.png)");
		}
	);

  
}); 