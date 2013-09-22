var top_a = 5;
if($(window).height() > 630) { top_a =($(window).height()-630)/2 }
$(window).load(
	function() {
		var dfd = $.Deferred();
		dfd.then(
			function(){
				$("#loadingWrap").remove();
				$("#content").hide();
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

