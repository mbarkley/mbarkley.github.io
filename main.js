PAGES = ["about", "portfolio", "contact"];

function init() {
	hash = window.location.hash != null ? window.location.hash.replace("#","") : "";
	if (PAGES.indexOf(hash) > -1) {
		fadeInHTML(hash);
	} else {
		fadeInHTML("about");
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

function switchPage(elementId) {
	window.location.hash = "#" + elementId;
	fancyLoadHTML(elementId);
}

function loadHTML(elementId) {
	document.getElementById("main_wrapper").innerHTML = document.getElementById(elementId).innerHTML;
}

function fancyLoadHTML(elementId) {
	$("#main_wrapper > *").animate({"opacity": "0"}, 300, function() { fadeInHTML(document.elementId); });

	document.elementId = elementId;
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
