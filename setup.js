$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 2,
		qstrings: {
			id: '87792318@N00'
		},
		itemTemplate: '<li><img src="{{image_z}}" alt="" /></li>'
	});
});