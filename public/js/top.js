var top_a;var zoom
zoom = $(window).height()/629
if($(window).width()/425 < zoom){zoom = $(window).width()/425}
top_a =($(window).height()-zoom*600)/2
$(window).load(
	function() {
		var dfd = $.Deferred();
		dfd.then(
			function(){
				$("#loadingWrap").remove();
				$("#content").hide();
				$("#anime").css('height',zoom*600 + 'px');
				return $("#top").css('margin-top',top_a + 'px')
			}
		).then(
			function(){
				return $("#top").fadeIn(2000);
			}
		).then(
			function(){
				return $("#top").animate(
					{opacity: 0}, 3500, 'easeInQuint'
				)
			}
		).then(
			function(){
				 return jQuery.Deferred(function(dfd) {
					setTimeout(function() {
						$("#top").remove();
						dfd.resolve();
					}, 1300);
				});
			}
		).then(
			function(){
				 return jQuery.Deferred(function(dfd) {
					setTimeout(function() {
						$("#content").fadeIn(2000);
						dfd.resolve();
					});
				});
			}
		);
		dfd.resolve();
	}
);

