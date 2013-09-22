$(window).load(
	function() {
		var dfd = $.Deferred();
		dfd.then(
			function(){
				$("#loadingWrap").remove();
				return $("#content").hide();
			}
		).then(
			function(){
				return $("#top").show();
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

