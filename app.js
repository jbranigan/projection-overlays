$(function(){
	$('.legend-item').on('mouseover', function() {
		var map = $(this).attr('id');
		$('embed').css('opacity', .25);
		$('embed[src*="' + map + '"]').not(this).css('opacity', 1);
	});
	$('.legend-item').on('mouseout', function() {
		$('embed').css('opacity', 1);
	});
});