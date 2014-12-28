var images = ["http://tinyurl.com/m29fwuo","http://tinyurl.com/noh7qen","http://tinyurl.com/okaob49","http://tinyurl.com/p437sr8","http://tinyurl.com/luvpf48"];

var currentImage = 0;

$(".right-arrow").on("click", function(){
	next();
});

$(".left-arrow").on("click", function(){
	previous();
});

var makeCircle = function(imageSrc, index){
	// creates circle for each image
	var $circle = $("<div/>", {
		"class": "circle",
		click: function() {
			changeCircle(index);
			currentImage = index;
			changePic(currentImage);
		}
	}).appendTo($("#circle-wrapper"));
};

var next = function(){
	currentImage++;
	changePic(currentImage);
	changeCircle(currentImage);
};

var previous = function(){
	currentImage--;
	changePic(currentImage);
	changeCircle(currentImage);
};

var changePic = function(currentImage){
	// changes pic in container to given index
	idx = currentImage % images.length;
	$(".slideshow").hide();
	$(".slideshow").css("background-image", "url('" + images[idx] + "')");
	$(".slideshow").show();
	changeCircle(idx);
};

var changeCircle = function(currentImage){
	// highlights corresponding circle
	idx = currentImage % images.length;
	$(".circle").removeClass("current");
	newCurrent = $(".circle").get(idx);
	$(newCurrent).addClass("current");
};

// making the nav circles
images.forEach(makeCircle);

// setting up starting view
$(".slideshow").css("background-image", "url('" + images[0] + "')")
var firstCircle = $(".circle").get(0);
$(firstCircle).addClass("current");

$(document).ready(function(){

	window.setInterval(function(){
		currentImage++;
		changePic(currentImage);
	}, 3500);

});