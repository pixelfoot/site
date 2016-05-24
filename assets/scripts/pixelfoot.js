$(function() {
	
	function animate() {
		
		var $pixelfoot = $('[pixelfoot]');
		
		$pixelfoot.attr('pixelfoot', 'animated');
		
		// This is a hack to make the CSS animation restart:
		$pixelfoot
			.before($pixelfoot.clone(true))
			.remove();
		
	}
	
	(function loop() {
		var rand = (Math.round(Math.random() * 10000) + 500); // Add 500 so there’s not much overlap.
		setTimeout(function() {
			animate();
			loop();
		}, rand);
	}());
	
});
