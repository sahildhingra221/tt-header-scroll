$(document).on("scroll", function () {
	if ($(document).scrollTop() > 10) {
		$(".post-sec").addClass("resize");
	} else {
		$(".post-sec").removeClass("resize");
	}
});