$(document).ready(function() {
	/*Hamburger menu*/
	function hamburgerMenu() {
		$(".header-bottom,.search-input").toggleClass("header-bottom-z-index");
		$(".mob-menu").slideToggle();
		$("#hamburger-icon").toggleClass('open');
	}
	$('#hamburger-icon').click(function() {
		hamburgerMenu();
	});

	/*Write to us form*/
	$.each($(".write-us-form-focus"), function(index, value) {
		if($(value).val() != "") {
			$(this).parent().find("label").addClass("focus-label");
		} 
	});
	$(".write-us-form-focus").focus(function() {
		$(this).parent().find("label").addClass("focus-label");
	});
	$(".write-us-form-focus").blur(function() {
		if($(this).val() == "") {
			$(this).parent().find("label").removeClass("focus-label");
		}
	});

	/*slider config*/
	var $slider = $(".slider-div");
	$slider.slick({
		swipe: false,
		infinite: false
	});
	$(".total-count").text($slider.slick("getSlick").slideCount);
	$slider.on('afterChange', function (_, _, currentSlide) {
        $(".current-text").text(++currentSlide);
    });
	$(".arrow-left").click(function() {
		$(".slick-prev").trigger("click");
	});
	$(".arrow-right").click(function() {
		$(".slick-next").trigger("click");
	});
	function slickInit() {
		$(".news-blocks").slick({
			infinite: false,
			slidesToShow: 3,
			responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			      	dots: true,
			        slidesToShow: 2,
	        		slidesToScroll: 1  
			      }
			    },
			]
		});
	}
	function unslick() {
		if($(window).width() <= 783) {
			if(!($(".news-blocks").slick("getSlick").unslicked))
				$(".news-blocks").slick("unslick");
		}
		else {
			if($(".news-blocks").slick("getSlick").unslicked)
				slickInit();
		}
	}
	slickInit();
	$(window).resize(function() {
		unslick();
	});
	unslick();

	/*anchor*/
	function anchor(event, self) {
		event.preventDefault();
		var id = $(self).attr("href");
		if(id == "#")
			return false;
		var top = $(id).offset().top;
		$("body").animate({scrollTop: top}, 500);
	}
	$(".header-menu a").click(function(event) {
		anchor(event, this);
	});
	$(".mob-menu a").click(function(event) {
		hamburgerMenu();
		anchor(event, this);
	});

	/*search*/
	$(".search-icon").click(function() {
		$(this).addClass("seach-active-icon");
		$(".search-input").addClass("search-input-active");

	});
	$(".close-search").click(function() {
		$(".search-icon").removeClass("seach-active-icon");
		$(".search-input").removeClass("search-input-active");
	});
});