
$('.parallax-window').parallax({imageSrc: 'img/bg1.jpg'});

$(window).scroll(function() {
	var top = $(window).scrollTop();
	var win = $(window).height();
	
	var find_class_small = $.contains('#nav-lg','.small');
	

	if(top > (win - 20) && find_class_small === false) {
		$('#nav-lg').addClass('small');
	}
	else {
		$('#nav-lg').removeClass('small');
	}
});

$(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

});

$(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
    loop: true,
    margin: 0,
    autoplay: true
  });
});