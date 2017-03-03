document.addEventListener("DOMContentLoaded", function() {
	console.log('Poluchilos!');

	if($('.topics .dd-item.active').attr('data-nav-id') === '/windows') {
		// $('.scroll-wrapper.scrollbar-inner').css('height', '720px !important');
		console.log($('.scroll-wrapper.scrollbar-inner'));
		$('.scroll-wrapper.scrollbar-inner').css('height', '720px');
	}
});