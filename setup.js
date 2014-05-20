$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 1,
		qstrings: {
			id: '87792318@N00'
		},
		itemTemplate: '<li><img src="{{image_c}}" alt="" /></li>'
	});
});