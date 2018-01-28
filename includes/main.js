/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	$("figure").on('click',addModalCloseHandler);
}
function makeGallery(imageArray){
	var galleryHTML=[]

	for (var i = imageArray.length - 1; i >= 0; i--) {
		
		$("#gallery").append("<figure></figure>");
		$("figure:not(.imageGallery)").css("background-image","url("+imageArray[i]+")");
		$("figure:not(.imageGallery)").html("<figcaption></figcaption>");
		$("figure:not(.imageGallery) figcaption").text(imageArray[i]);
		$("figure:not(.imageGallery)").attr("class","imageGallery col-xs-12 col-sm-6 col-md-4");

		// <figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-1.jpg);">
		// 	<figcaption>landscape-1.jpg</figcaption>
		// </figure>
	}
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section

}

function addModalCloseHandler(){
	var img_url = $(this).css('background-image');

	
	img_url=img_url.slice(12,-2);
	//img_url=
	console.log(img_url);

	$("#galleryModal > div > div > div.modal-body > img").attr("src", img_url);
	$("#galleryModal").modal('show');

	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
}

function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}





