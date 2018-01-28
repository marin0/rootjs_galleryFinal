var images=[
"images/landscape-1.jpg",
"images/landscape-2.jpg",
"images/landscape-3.jpg",
"images/landscape-4.jpg",
"images/landscape-5.jpg",
"images/landscape-6.jpg",
];

$(document).ready(function () {
	loadImages();
});

function loadImages() {

	for (var i = images.length - 1; i >= 0; i--) {
		$("#gallery").append("<figure></figure>");
		$("figure:not(.imageGallery)").css("background-image:url("+images[i]+");");
		$("figure:not(.imageGallery)").html("<figcaption></figcaption>");
		$("figure:not(.imageGallery) figcaption").text(images[i]);
		$("figure:not(.imageGallery)").attr("class","imageGallery col-xs-12 col-sm-6 col-md-4");
		// <figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-1.jpg);">
		// 	<figcaption>landscape-1.jpg</figcaption>
		// </figure>
	}
}