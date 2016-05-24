$(function() {
	
	var timer = undefined;
	
	function animate() {
		
		var $pixelfoot = $('[pixelfoot]');
		
		$pixelfoot.attr('pixelfoot', 'animated');
		
		// This is a hack to make the CSS animation restart:
		$pixelfoot
			.before($pixelfoot.clone(true))
			.remove();
		
	}
	
	function isVisible() {
		
		return ($('[pixelfoot]').css('display') == 'none') ? false : true;
		
	}
	
	function loop() {
		
		var $pixelfoot = $('[pixelfoot]');
		var rand;
		
		if (isVisible()) {
			
			//console.log('looping');
			
			rand = (Math.round(Math.random() * 10000) + 500); // Add 500 so there’s not much overlap.
			
			timer = window.setTimeout(function() {
				animate();
				loop();
			}, rand);
			
		} else if ($pixelfoot.attr('pixelfoot') == 'animated') {
			
			//console.log('not looping');
			
			$pixelfoot.attr('pixelfoot', '');
			
			window.clearTimeout(timer);
			
			timer = undefined;
			
		}
		
	}
	
	$(window).resize(function() {
		
		// We only want to animate if mascot is visible:
		if ((timer === undefined) && isVisible()) {
			
			loop();
			
		}
		
	});
	
	loop();
	
});
