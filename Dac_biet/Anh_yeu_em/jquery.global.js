
jQuery(document).ready(function($) {

	$('#cloud').pan({
		fps: 60, // Frame trên giây, fps càng nhỏ thì chuyển động sẽ càng giật.
		speed: 0.3, // tốc độ di chuyển của vậy thể
		dir: 'left' // hướng chuyển động, left: phải>trái, right: trái>phải
	});
	$('#city').pan({
		fps: 60, // Frame trên giây, fps càng nhỏ thì chuyển động sẽ càng giật.
		speed: 1, // tốc độ di chuyển của vậy thể
		dir: 'right' // hướng chuyển động, left: phải>trái, right: trái>phải
	});

});
