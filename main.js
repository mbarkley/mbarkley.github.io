TIME = 400;
LARGE = 1.1;
DEGREES = "10";

cloudState = {'cloud1': false, 'cloud2': false, 'cloud3': false};
cloudHover = {'cloud1': false, 'cloud2': false, 'cloud3': false};
cloudMove = {'cloud1': false, 'cloud2': false, 'cloud3': false};
elementId = null;

//function init() {
//	fadeInHTML('about_text');
//	for (var id in cloudState) {
//		setInterval(
//			function() {
//				if (cloudHover[id]) {
//					if (!cloudMove[id]) {
//						$("#" + id).animate(
//							{rotate: "10deg", scale: "1.0"},
//							TIME,
//							function() {
//								$("#" + id).animate({rotate: "0deg")
//							}
//						);
//	}
//}

function init() {
	fadeInHTML('about_text');
}

function setActive(elementId) {
	console.log(elementId+" set active");
	cloudState[elementId] = true;
	wiggle(elementId,10);
}

function removeActive(elementId) {
	console.log(elementId+" set inactive");
	cloudState[elementId] = false;
	$("#" + elementId).stop().animate({rotate: "0deg", scale: "1.0"});
}

function wiggle(id, degrees) {
	if (cloudState[id]) {
		callback = function(){
			wiggle(id,-1*degrees);
		};
		$("#" + id).stop().animate(
			{
				rotate: degrees+"deg",
				//scale: LARGE
			},
			TIME,
			"linear",
			callback
		);
	} else {
		$("#" + id).animate({rotate: "0deg", scale: 1},TIME,"linear");
	}
}

function getTotalHeight(element) {
	return (parseInt(element.height())
				+ parseInt(element.css("padding-top").replace("px",""))
				+ parseInt(element.css("padding-bottom").replace("px","")));
}

function getTotalWidth(element) {
	return (parseInt(element.width())
				+ parseInt(element.css("padding-left").replace("px",""))
				+ parseInt(element.css("padding-right").replace("px","")));
}


function loadHTML(elementId) {
	document.getElementById("main_wrapper").innerHTML = document.getElementById(elementId).innerHTML;
}

function fancyLoadHTML(elementId) {
	$("#main_wrapper > *").animate({"opacity": "0"}, 300);

	document.elementId = elementId;
	setTimeout("fadeInHTML(document.elementId)", 500);
}

function fadeInHTML(elementId) {
	loadHTML(elementId);
	
	$("#main_wrapper > div.wrapper").css({"height":"auto","opacity":"0"});
	
	$("#main_wrapper").animate({"height": getTotalHeight($("#main_wrapper > div.wrapper")),
										"width": getTotalWidth($("#main_wrapper > div.wrapper"))},
							1000);
	$("#main_wrapper > div.wrapper").animate({"opacity": "1"}, 2000);

	document.elementId = null;
}

function _fadeInHTML(elementId) {
	loadHTML(elementId);
	
	$("#main_wrapper > div.wrapper").css({"height":"auto","opacity":"0"});
	
	$("#main_wrapper").animate({"height": getTotalHeight($("#main_wrapper > div.wrapper"))
							+ parseInt($("#main_wrapper").css("padding-top").replace("px",""))
							+ parseInt($("#main_wrapper").css("padding-bottom").replace("px",""))},
							1000);
	$("#main_wrapper > div.wrapper").animate({"opacity": "1"}, 2000);

	document.elementId = null;
}
