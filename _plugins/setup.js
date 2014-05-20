$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 2,
		qstrings: {
			id: '87792318@N00'
		},
		itemTemplate: '<li><a href="{{image_z}}"><img src="{{image_z}}" alt="{{title}}" /></a></li>'
	});
	
	$('#nocallback').jflickrfeed({
		limit: 2,
		qstrings: {
			id: '87792318@N00'
		},
		useTemplate: false,
		itemCallback: function(item){
			$(this).append("<li><img src='" + item.image_z + "' alt=''/></li>");
		}
	});

});
